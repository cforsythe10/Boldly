
from rest_framework.serializers import ModelSerializer
from .models import BSettings, BoldAcademy, Brands, CSettings, CampaignInfo, Contracts, Creators, Insightsandstats, Messages, Survey


class BSettingsSerializer(ModelSerializer):
    class Meta:
        managed = BSettings
        fields = '__all__'

class BoldAcademySerializer(ModelSerializer):
    class Meta:
        managed = BoldAcademy
        fields = '__all__'

class BrandsSerializer(ModelSerializer):
    class Meta:
        managed = Brands
        fields = '__all__'

class CSettingsSerializer(ModelSerializer):
    class Meta:
        managed = False
        db_table = 'c_settings'

class CampaignInfoSerializer(ModelSerializer):
    class Meta:
        managed = CampaignInfo
        fields = '__all__'

class ContractsSerializer(ModelSerializer):
    class Meta:
        managed = Contracts
        fields = '__all__'

class CreatorsSerializer(ModelSerializer):
    class Meta:
        managed = Creators
        fields = '__all__'

class InsightsandstatsSerializer(ModelSerializer):
    class Meta:
        managed = Insightsandstats
        fields = '__all__'

class MessagesSerializer(ModelSerializer):
    class Meta:
        managed = Messages
        fields = '__all__'

class SurveySerializer(ModelSerializer):
    class Meta:
        managed = Survey
        fields = '__all__'
