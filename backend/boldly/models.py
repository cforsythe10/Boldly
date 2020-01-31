# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = True` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class BSettings(models.Model):
    buuid = models.ForeignKey('Brands', models.DO_NOTHING, db_column='bUUID')  # Field name made lowercase.
    nightmode = models.BooleanField(db_column='nightMode')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'b_settings'


class BoldAcademy(models.Model):
    faq = models.TextField()  # This field type is a guess.
    module = models.TextField()  # This field type is a guess.
    cmodule = models.TextField(db_column='cModule')  # Field name made lowercase. This field type is a guess.
    cuuid = models.ForeignKey('Creators', models.DO_NOTHING, db_column='cUUID')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'bold_academy'


class Brands(models.Model):
    uuid = models.UUIDField(db_column='UUID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=1)  # Field name made lowercase.
    location = models.CharField(db_column='Location', max_length=1)  # Field name made lowercase.
    industry = models.CharField(db_column='Industry', max_length=1)  # Field name made lowercase.
    brand_values = models.CharField(db_column='Brand Values', max_length=1)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    email = models.CharField(db_column='Email', max_length=1)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'brands'


class CSettings(models.Model):
    nightmode = models.BooleanField(db_column='nightMode')  # Field name made lowercase.
    cuuid = models.ForeignKey('Creators', models.DO_NOTHING, db_column='cUUID')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'c_settings'


class CampaignInfo(models.Model):
    uuid = models.ForeignKey('Creators', models.DO_NOTHING, db_column='UUID')  # Field name made lowercase.
    launched_by = models.UUIDField()
    title = models.CharField(db_column='Title', max_length=1)  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=1)  # Field name made lowercase.
    start_date = models.DateField()
    end_date = models.DateField()
    image_reference = models.TextField()  # This field type is a guess.
    campaign_values = models.CharField(max_length=1)
    looking_for_creators = models.CharField(max_length=1)
    social_platforms_used = models.CharField(max_length=1)
    start_age_range = models.IntegerField()
    end_age_range = models.IntegerField()
    desired_follower_count = models.IntegerField()
    engagement_rate = models.DecimalField(max_digits=65535, decimal_places=65535)
    desired_num_posts_per_week = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'campaign_info'


class Contracts(models.Model):
    dochash = models.CharField(db_column='docHash', max_length=1)  # Field name made lowercase.
    docpass = models.CharField(db_column='docPass', max_length=1)  # Field name made lowercase.
    documentname = models.CharField(db_column='documentName', max_length=1)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'contracts'


class Creators(models.Model):
    uuid = models.UUIDField(db_column='UUID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=1)  # Field name made lowercase.
    birthday = models.DateField(db_column='Birthday')  # Field name made lowercase.
    selected_values = models.CharField(db_column='Selected Values', max_length=1)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    industry = models.CharField(db_column='Industry', max_length=1)  # Field name made lowercase.
    interests = models.CharField(db_column='Interests', max_length=1)  # Field name made lowercase.
    location = models.CharField(db_column='Location', max_length=1)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=1)  # Field name made lowercase.
    contractid = models.UUIDField(db_column='contractID')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'creators'


class Insightsandstats(models.Model):
    cuuid = models.ForeignKey(Creators, models.DO_NOTHING, db_column='cUUID', blank=True, null=True)  # Field name made lowercase.
    buuid = models.ForeignKey(Brands, models.DO_NOTHING, db_column='bUUID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'insightsandstats'


class Messages(models.Model):
    inbox = models.BigIntegerField()
    ongoingc = models.TextField(db_column='ongoingC')  # Field name made lowercase. This field type is a guess.
    sent = models.BigIntegerField()
    cuuid = models.ForeignKey(Creators, models.DO_NOTHING, db_column='cUUID')  # Field name made lowercase.
    buuid = models.ForeignKey(Brands, models.DO_NOTHING, db_column='bUUID')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'messages'


class Survey(models.Model):
    brandq = models.CharField(db_column='brandQ', max_length=1)  # Field name made lowercase.
    creatorq = models.CharField(db_column='creatorQ', max_length=1)  # Field name made lowercase.
    profileq = models.CharField(db_column='profileQ', max_length=1)  # Field name made lowercase.
    locationq = models.CharField(db_column='locationQ', max_length=1)  # Field name made lowercase.
    cuuid = models.ForeignKey(Creators, models.DO_NOTHING, db_column='cUUID')  # Field name made lowercase.
    buuid = models.ForeignKey(Brands, models.DO_NOTHING, db_column='bUUID')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'survey'
