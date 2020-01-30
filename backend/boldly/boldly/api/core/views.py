from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
) 
from rest_framework.viewsets import GenericViewSet

from .models import User
from .serializer import UserSerializer

class UserViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = UserSerializer
    queryset = User.objects.all()
