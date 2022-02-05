from django.core.mail import send_mail
from django_rest_passwordreset.signals import reset_password_token_created
from django.conf import settings
from django.dispatch import receiver
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


# Create your models here.


class UserProfileManager(BaseUserManager):
    def create_user(self, email, password, first_name, last_name, phone, gender, dob, username, access_code, **extra_fields):
        if not email:
            raise ValueError("User must have email!")
        if not password:
            raise ValueError("User must have password!")
        user = self.model(email=self.normalize_email(email), first_name=first_name, last_name=last_name,
                          phone=phone, gender=gender, dob = dob,  username=username, access_code=access_code, **extra_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_superuser(self, email, password, first_name, last_name, phone, gender, dob, username, access_code, **extra_fields):
        user = self.create_user(email, password, first_name, last_name, phone, gender, dob, username, access_code, **extra_fields)
        
        user.is_superuser = True
        user.is_staff = True
        user.save(using = self._db)
        
        return user
    

GENDER = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Others', 'Others'),
    ('Prefer Not To Say', 'Prefer Not To Say'),
)

class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    phone = models.IntegerField(null=True, blank=True)
    gender = models.CharField(
        max_length=255, choices=GENDER, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    username = models.CharField(
        max_length=255, unique=True, null=False, blank=False)
    access_code = models.CharField(max_length=255, null=True, blank=True)


    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username', 'first_name',
                       'last_name', 'phone', 'gender', 'dob', 'access_code']

    def __str__(self):
        return self.email


class Survey(models.Model):
    user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='survey')
    answer1 = models.CharField(max_length=255, blank=False, null=False)
    answer2 = models.CharField(max_length=255, blank=False, null=False)
    answer3 = models.CharField(max_length=255, blank=False, null=False)
    answer4 = models.CharField(max_length=255, blank=False, null=False)

    def __str__(self):
        return self.user + "'s Survey"+" " + self.pk


class Friend(models.Model):
    # who sent the request
    user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='sender_friends')
    # who will receive the request
    friend = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='receiver_friends')
    status = models.CharField(max_length=20, default='requested')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username + " & " + self.friend.username


class UploadFile(models.Model):
    user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='upload_file')
    title = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    file = models.FileField(upload_to="uploads/", blank=True, null=True)

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    email_plaintext_message = "http://localhost:3000/resetPassword?token={}".format(
        reset_password_token.key)
    send_mail(
        "Password Reset for {title}".format(title="Some website title"),
        email_plaintext_message,
        settings.EMAIL_HOST_USER,
        [reset_password_token.user.email], fail_silently=False
    )
