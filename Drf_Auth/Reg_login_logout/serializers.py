from rest_framework import serializers
from Reg_login_logout.models import UserProfile
from Reg_login_logout.models import UserProfile, Survey, Friend, UploadFile
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'email', 'password', 'first_name',
                'last_name', 'username', 'phone', 'gender', 'dob', 'access_code')
        extra_kwargs = {
            "password": {"write_only": True, "style": {
                "input_type": "password"
            }}
        }
    def create(self, validated_data):
        user = UserProfile.objects.create_user(
            email = validated_data['email'],
            password = validated_data["password"],
            username = validated_data['username'],
            phone = validated_data['phone'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            gender = validated_data['gender'],
            dob = validated_data['dob'],
            access_code = validated_data['access_code'],
        )
        return user

class ChangePasswordSerializer(serializers.Serializer):
    model = UserProfile
    old_password = serializers.CharField(required=True,
                                         style={'input_type': 'password', 'placeholder': 'old password'})
    new_password = serializers.CharField(required=True,
                                         style={'input_type': 'password', 'placeholder': 'new password'})

class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = "__all__"



class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = "__all__"
class UploadFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadFile
        fields = "__all__"

