from django.shortcuts import render
from .models import DailyResult
from sunday.models import SundayResult
from sunday.models import StarBallGame

# Create your views here.
def DailyHomePage(request):
    result = DailyResult.objects.all().order_by('-id')
    # sunday = SundayResult.objects.all().order_by('-id')
    sunday = StarBallGame.objects.all().order_by('-id')
    context = {
        'result': result,
        'sunday': sunday,
    }
    return render(request, 'frontend/home_page.html', context)

def DailyGamePreviousResult(request):
    dailyResult = DailyResult.objects.all().order_by('-id')
    context = {
        'dailyResult': dailyResult
    }
    return render(request, 'frontend/daily_game_history.html', context)


######Privacy Policy for App########################

def privacyPolicy(request):
    return render(request, 'frontend/privacy_policy.html')