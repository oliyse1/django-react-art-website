from rest_framework import serializers
from .models import Advert

class AdvertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advert
        fields = '__all__'
        fields = ('slug', 'title', 'price', 'height', 'width', 'subject', 'medium', 'photo_main', 'is_published', 'list_date')

class AdvertDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advert
        fields = '__all__'
        lookup_field = 'slug'