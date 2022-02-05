from django.urls import path, include
from rest_framework import routers
from .views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

router = routers.DefaultRouter()
router.register(r'user', UserProfileViewSet)
router.register(r'friend', FriendViewSet)
router.register(r'survey', SurveyViewSet)
router.register(r'myfriends', MyFriendViewSet, basename="myfriends")
router.register(r'getuploadedfile', UploadFiles, basename="getuploadedfile")


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('myfriends/<pk>/', MyFriendViewSet.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('fileupload/', UploadFileViewSet.as_view(), name='fileupload'),
    path('update-file/<id>/', updateUploadFileViewSet.as_view(), name='update-file'),
    path('user/change-password/<pk>',
         ChangePasswordView.as_view(), name='change-password'),
    path('user/password_reset/',
         include('django_rest_passwordreset.urls', namespace='password_reset')),
] + router.urls
