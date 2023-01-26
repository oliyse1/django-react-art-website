from django.contrib import admin
from .models import Artist

class ArtistAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')
    list_display_links = ('id', 'name')
    search_fields = ('name', )
    list_per_page = 25

admin.site.register(Artist, ArtistAdmin)
