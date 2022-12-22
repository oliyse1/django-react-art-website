from django.urls import path
from .views import DealerListView, DealerView, TopSellerView

urlpatterns = [
    path('', DealerListView.as_view()),
    path('topseller', TopSellerView.as_view()),
    path('<pk>', DealerView.as_view()),
]