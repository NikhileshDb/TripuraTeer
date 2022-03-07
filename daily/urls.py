from django.urls import path
from .views import DailyHomePage, DailyGamePreviousResult


urlpatterns = [
    path('', DailyHomePage, namespace="daily_home"),
    path('daily-game-previous-result/', DailyGamePreviousResult, namespace="daily_game_previous_result"),
   
]

