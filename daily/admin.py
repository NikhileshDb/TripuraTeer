from django.contrib import admin
from .models import DailyResult, FirstRound, SecondRound, CommonNumber




admin.site.empty_value_display = '(Not Updated)'



admin.site.register(CommonNumber)


@admin.register(DailyResult)
class DailyResultModelAdmin(admin.ModelAdmin):
    list_display = [
       'first_round_result', 'second_round_result','created_at', 'status' ]
    list_display_links = ('first_round_result', 'second_round_result', 'status')
    search_fields = ['created_at']
    search_help_text = "Search by Date i,e: 12-22-2022"


@admin.register(FirstRound)
class FirstRoundModelAdmin(admin.ModelAdmin):
   list_display = [
      'result_time',
      'winning_number'
   ]

@admin.register(SecondRound)
class SecondRoundModelAdmin(admin.ModelAdmin):
   list_display = [
      'result_time',
      'winning_number'
   ]


