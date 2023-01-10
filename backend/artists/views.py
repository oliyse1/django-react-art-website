from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Artist
from .serializers import ArtistSerializer
from rest_framework import permissions

class ArtistListView(ListAPIView):
    queryset = Artist.objects.all()
    # permission_classes = (permissions.AllowAny, )
    serializer_class = ArtistSerializer
    pagination_class = None

class ArtistView(RetrieveAPIView):
    queryset = Artist.objects.all()
    # permission_classes = (permissions.AllowAny, )
    serializer_class = ArtistSerializer
