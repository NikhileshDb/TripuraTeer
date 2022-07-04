from rest_framework.response import Response
from rest_framework import serializers
from daily.models import DailyResult, FirstRound, SecondRound
from rest_framework.decorators import api_view
from sunday.models import SundayResult
from wednesday.models import WednesdayResult

class WednesdayResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = WednesdayResult
        fields = '__all__'

class SundayResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SundayResult
        fields = '__all__'
        
class DailyResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyResult
        fields = '__all__'

class FirstRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirstRound
        fields = '__all__'

class SecondRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondRound
        fields = '__all__'

