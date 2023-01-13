from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Dealer
from .serializers import DealerSerializer

class DealerListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer
    pagination_class = None

class DealerView(RetrieveAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer
