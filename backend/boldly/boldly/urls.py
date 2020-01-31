"""boldly URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import re_path, include
from rest_framework.routers import DefaultRouter
from .api.core import views as coreViews

router = DefaultRouter()
router.register('survey', coreViews.SurveyViewSet)
router.register('messages', coreViews.MessagesViewSet)
router.register('insights', coreViews.InsightsandstatsViewSet)
router.register('creators', coreViews.CreatorsViewSet)
router.register('contracts', coreViews.ContractsViewSet)
router.register('campaigninfo', coreViews.CampaignInfoViewSet)
router.register('csettings', coreViews.CSettingsViewSet)
router.register('brands', coreViews.BrandsViewSet)
router.register('academy', coreViews.BoldAcademyViewSet)
router.register('bsettings', coreViews.BSettingsViewSet)



urlpatterns = [
    re_path('^', include(router.urls)),
]
