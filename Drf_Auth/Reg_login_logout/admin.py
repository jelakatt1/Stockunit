from django.contrib import admin
from Reg_login_logout.models import UserProfile, Survey, Friend, UploadFile

# Register your models here.

admin.site.register(UserProfile)
admin.site.register(Survey)
admin.site.register(Friend)
admin.site.register(UploadFile)
