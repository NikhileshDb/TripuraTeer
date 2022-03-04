from django.urls import path
from django.views.generic import TemplateView


from .views import DailyHomePage
urlpatterns = [
    path('', DailyHomePage, name="daily_home"),
    path('dice/', TemplateView.as_view(template_name="components/dice.html")),
 

]

