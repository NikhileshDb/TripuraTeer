from rest_framework import viewsets
from .serializers import FirstRoundSerializer, SecondRoundSerializer, SundayResultSerializer
from daily.models import FirstRound, SecondRound
from sunday.models import SundayResult


class SundayResultViewSet(viewsets.ModelViewSet):
    serializer_class = SundayResultSerializer
    queryset = SundayResult.objects.all().order_by('-result_time')

class FirstRoundViewSet(viewsets.ModelViewSet):
    serializer_class = FirstRoundSerializer
    queryset = FirstRound.objects.all().order_by('-result_time')


class SecondRoundViewSet(viewsets.ModelViewSet):
    serializer_class = SecondRoundSerializer
    queryset = SecondRound.objects.all().order_by('-result_time')