from django.urls import path
from .views import DailyHomePage, DailyGamePreviousResult


urlpatterns = [
    path('', DailyHomePage, name="daily_home"),
    path('daily-game-previous-result/', DailyGamePreviousResult, name="daily_game_previous_result"),
   
]

