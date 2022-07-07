from django.urls import path
from .views import DailyHomePage, DailyGamePreviousResult, privacyPolicy, StarBallPreviousResult


urlpatterns = [
    path('', DailyHomePage, name="daily_home"),
    path('daily-game-previous-result/', DailyGamePreviousResult, name="d_prev_hist"),
    path('starball-previous-result/', StarBallPreviousResult, name="start_ball_previous"),
    path('privacy-policy', privacyPolicy, name="privacy-policy"),
   
]

