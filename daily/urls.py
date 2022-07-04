from django.urls import path
from .views import DailyHomePage, DailyGamePreviousResult, privacyPolicy


urlpatterns = [
    path('', DailyHomePage, name="daily_home"),
    path('daily-game-previous-result/', DailyGamePreviousResult, name="d_prev_hist"),
    path('privacy-policy', privacyPolicy, name="privacy-policy"),
   
]

