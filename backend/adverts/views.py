from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Advert
from .serializers import AdvertSerializer
from django.db.models import Q

class AdvertsView(ListAPIView):
    queryset = Advert.objects.order_by('-list_date').filter(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = AdvertSerializer
    lookup_field = 'slug'

class AdvertView(RetrieveAPIView):
    queryset = Advert.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = AdvertSerializer
    lookup_field = 'slug'

class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = AdvertSerializer

    def post(self, request, format=None):
        queryset = Advert.objects.order_by('-list_date').filter(is_published=True)
        data = self.request.data

        subject = data['subject']
        if subject != 'Any':
            queryset = queryset.filter(subject__iexact=subject)

        medium = data['medium']
        if subject != 'Any':
            queryset = queryset.filter(medium__iexact=medium)

        min_price = data['min_price']
        max_price = data['max_price']
       
        queryset = queryset.filter(Q(price__gte=min_price) & Q(price__lte=max_price))

        min_height = data['min_height']
        max_height = data['max_height']
        queryset = queryset.filter(Q(height__gte=min_height) & Q(height__lte=max_height))

        min_width = data['min_width']
        max_width = data['max_width']
        queryset = queryset.filter(Q(width__gte=min_width) & Q(width__lte=max_width))

        keywords = data['keywords']
        queryset = queryset.filter(Q(title__icontains=keywords))

        serializer = AdvertSerializer(queryset, many=True)

        return Response(serializer.data) #in order for it to be json data
