from rest_framework import viewsets
from .serializers import FirstRoundSerializer, SecondRoundSerializer
from daily.models import FirstRound, SecondRound


class FirstRoundViewSet(viewsets.ModelViewSet):
    serializer_class = FirstRoundSerializer
    queryset = FirstRound.objects.all().order_by('-result_time')


    
class SecondRoundViewSet(viewsets.ModelViewSet):
    serializer_class = SecondRoundSerializer
    queryset = SecondRound.objects.all().order_by('-result_time')