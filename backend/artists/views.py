from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Artist
from .serializers import ArtistSerializer

class ArtistListView(ListAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    pagination_class = None

class ArtistView(RetrieveAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
