from email import parser
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import *
from django.views.generic import View
from django.core.mail import send_mail
from django.contrib import messages
from django.shortcuts import redirect
from rest_framework import generics, status, parsers
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q

from .serializers import UserProfileSerializer, ChangePasswordSerializer, SurveySerializer, FriendSerializer, UploadFileSerializer

class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class ChangePasswordView(generics.UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = ChangePasswordSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = "pk"

    def get_object(self, *args, **kwargs):
        kwargs = self.kwargs
        obj = UserProfile.objects.get(pk=kwargs.get('pk'))
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SurveyViewSet(ModelViewSet):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    permission_classes = [IsAuthenticated, ]

class FriendViewSet(ModelViewSet):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer


class UploadFileViewSet(generics.ListCreateAPIView):
    queryset = UploadFile.objects.all()
    serializer_class = UploadFileSerializer
    parser_classes = [parsers.FormParser, parsers.MultiPartParser]

class UploadFiles(ModelViewSet):
    serializer_class = UploadFileSerializer
    def get_queryset(self):
        queryset = UploadFile.objects.all()
        userId = self.request.query_params.get('userId', None)
        if userId:
            queryset = queryset.filter(user= userId)
        return queryset

class updateUploadFileViewSet(generics.RetrieveUpdateDestroyAPIView):
    queryset = UploadFile.objects.all()
    lookup_field = "id"
    serializer_class = UploadFileSerializer
    parser_classes = [parsers.FormParser, parsers.MultiPartParser]

class MyFriendViewSet(ModelViewSet):
    serializer_class = FriendSerializer
    def get_queryset(self):
        queryset = Friend.objects.all()
        friend = self.request.query_params.get('friend', None)
        if friend:
            queryset = queryset.filter((Q(user=(friend)) | Q(friend=(friend))),(Q(status="accepted") | Q(status="requested")))
        return queryset

class SendFormEmail(View):

    def get(self, request):

        # Get the form data
        name = request.GET.get('name', None)
        email = request.GET.get('email', None)
        message = request.GET.get('message', None)

        # Send Email and print in console
        send_mail(
            'Django Email Testing',
            'Hello ' + name + ',\n' + message,
            'ismailtitas1815@gmail.com',  # Admin
            [
                email,
            ]
        )

        # Redirect to same page after form submit
        messages.success(request, ('Email sent successfully.'))
        return redirect('home')
