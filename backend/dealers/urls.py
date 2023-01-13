from django.urls import path
from .views import DealerListView, DealerView

urlpatterns = [
    path('', DealerListView.as_view()),
    path('<pk>', DealerView.as_view()),
]