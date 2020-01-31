from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet

from .models import BSettings, BoldAcademy, Brands, CSettings, CampaignInfo, Contracts, Creators, Insightsandstats, Messages, Survey
from .serializer import BSettingsSerializer, BoldAcademySerializer, BrandsSerializer, CSettingsSerializer, CampaignInfoSerializer, ContractsSerializer, CreatorsSerializer, InsightsandstatsSerializer, MessagesSerializer, SurveySerializer

class SurveyViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = SurveySerializer
    queryset = Survey.objects.all()

class MessagesViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = MessagesSerializer
    queryset = Messages.objects.all()

class InsightsandstatsViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = InsightsandstatsSerializer
    queryset = Insightsandstats.objects.all()

class CreatorsViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = CreatorsSerializer
    queryset = Creators.objects.all()

class ContractsViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = ContractsSerializer
    queryset = Contracts.objects.all()

class CampaignInfoViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = CampaignInfoSerializer
    queryset = CampaignInfo.objects.all()

class CSettingsViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = CSettingsSerializer
    queryset = CSettings.objects.all()

class BrandsViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = BrandsSerializer
    queryset = Brands.objects.all()

class BoldAcademyViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = BoldAcademySerializer
    queryset = BoldAcademy.objects.all()


class BSettingsViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    serializer_class = BSettingsSerializer
    queryset = BSettings.objects.all()
