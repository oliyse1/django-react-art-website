from django.urls import path
from .views import ArtistListView, ArtistView

urlpatterns = [
    path('', ArtistListView.as_view()),
    path('<pk>', ArtistView.as_view()),
]