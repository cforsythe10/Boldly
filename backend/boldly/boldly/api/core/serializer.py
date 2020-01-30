from django.contrib.auth.models import User, Group
from rest_framework.serializers import ModelSerializer
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'name', 'userName'
        )