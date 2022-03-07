from django.shortcuts import render
from .models import DailyResult
from sunday.models import SundayResult

# Create your views here.
def DailyHomePage(request):
    result = DailyResult.objects.all().order_by('-id')
    sunday = SundayResult.objects.all().order_by('-id')
    context = {
        'result': result,
        'sunday': sunday,
    }
    return render(request, 'frontend/home_page.html', context)
