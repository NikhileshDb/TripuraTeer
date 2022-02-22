from rest_framework.response import Response
from rest_framework import serializers
from daily.models import DailyResult, FirstRound, SecondRound
from rest_framework.decorators import api_view

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

