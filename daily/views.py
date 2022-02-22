from django.shortcuts import render
from .models import DailyResult


# Create your views here.
def DailyHomePage(request):
    result = DailyResult.objects.all()
    context = {
        'result': result
    }
    return render(request, 'frontend/home_page.html', context)

