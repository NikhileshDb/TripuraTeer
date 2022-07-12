from django.shortcuts import render
from .models import DailyResult
from sunday.models import SundayResult
from sunday.models import StarBallGame
from datetime import datetime, timezone
import time

# Create your views here.
def DailyHomePage(request):
    result = DailyResult.objects.all().order_by('-id')
    # sunday = SundayResult.objects.all().order_by('-id')
    sunday = StarBallGame.objects.all().order_by('-id')
    context = {
        'result': result,
        'sunday': sunday,
        'currentTime': datetime.now(timezone.utc)
    }
    return render(request, 'frontend/home_page.html', context)

def DailyGamePreviousResult(request):
    dailyResult = DailyResult.objects.all().order_by('-id')
    context = {
        'dailyResult': dailyResult,
          'currentTime': datetime.now(timezone.utc)
    }
    return render(request, 'frontend/daily_game_history.html', context)

def StarBallPreviousResult(request):
    starballResults = StarBallGame.objects.all().order_by('-id')
   
    context = {
        'starballResults' : starballResults,
        'currentTime': datetime.now(timezone.utc)
    }
    return render(request, 'frontend/starball_history.html', context)


######Privacy Policy for App########################

def privacyPolicy(request):
    return render(request, 'frontend/privacy_policy.html')




def draft(request):
    starballResults = StarBallGame.objects.all().order_by('-id')
    context = {
        'objects' : starballResults
    }
    return render(request, 'frontend/draft.html', context)