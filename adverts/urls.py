from django.urls import path
from .views import AdvertsView, AdvertView, SearchView

urlpatterns = [
    path('', AdvertsView.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', AdvertView.as_view()),
]