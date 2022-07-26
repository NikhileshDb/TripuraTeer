from rest_framework.response import Response
from rest_framework import serializers
from daily.models import CommonNumber, DailyResult, FirstRound, SecondRound
from rest_framework.decorators import api_view
from sunday.models import SundayResult
from sunday.models import StarBallGame
from wednesday.models import WednesdayResult


class WednesdayResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = WednesdayResult
        fields = '__all__'


class SundayResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = StarBallGame
        fields = '__all__'


class FirstRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirstRound
        fields = '__all__'


class SecondRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondRound
        fields = '__all__'


class DailyResultSerializer(serializers.ModelSerializer):
    first_round = FirstRoundSerializer(required=True)
    second_round = SecondRoundSerializer(required=True)

    class Meta:
        model = DailyResult
        fields = '__all__'

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['first_round'] = FirstRoundSerializer(
            instance.first_round).data
        response['second_round'] = SecondRoundSerializer(
            instance.second_round).data
        return response


class CommonNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonNumber
        fields = '__all__'
