from django.urls import path



from .views import DailyHomePage
urlpatterns = [
    path('', DailyHomePage, name="daily_home"),
   
]

