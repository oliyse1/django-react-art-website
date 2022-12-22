from django.contrib import admin
from .models import Advert

class AdvertAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_published', 'price', 'list_date', 'artist', 'dealer')
    list_display_links = ('id', 'title')
    list_filter = ('dealer', 'artist')
    list_editable = ('is_published', )
    search_fields = ('title', 'price', 'artist')
    list_per_page = 25

admin.site.register(Advert, AdvertAdmin)