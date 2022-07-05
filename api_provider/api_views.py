from rest_framework import viewsets
from .serializers import FirstRoundSerializer, SecondRoundSerializer, SundayResultSerializer, WednesdayResultSerializer
from daily.models import FirstRound, SecondRound
from sunday.models import SundayResult
from sunday.models import StarBallGame
from wednesday.models import WednesdayResult

class WednesdayResultViewSet(viewsets.ModelViewSet):
    serilaizer_class = WednesdayResultSerializer
    queryset = WednesdayResult.objects.all().order_by('-result_time')

class SundayResultViewSet(viewsets.ModelViewSet):
    serializer_class = SundayResultSerializer
    queryset = StarBallGame.objects.all().order_by('-result_time')

class FirstRoundViewSet(viewsets.ModelViewSet):
    serializer_class = FirstRoundSerializer
    queryset = FirstRound.objects.all().order_by('-result_time')


class SecondRoundViewSet(viewsets.ModelViewSet):
    serializer_class = SecondRoundSerializer
    queryset = SecondRound.objects.all().order_by('-result_time')