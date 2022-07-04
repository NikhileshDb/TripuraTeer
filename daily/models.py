from django.db import models
from django.forms import TimeInput
from django.contrib import admin
from django.utils.html import format_html
# Create your models here.

class FirstRound(models.Model):
    result_time = models.DateTimeField(blank=True, null=True)
    winning_number = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return str(self.winning_number)
    class Meta:
        get_latest_by = ['-result_time']
  


class SecondRound(models.Model):
    result_time = models.DateTimeField(blank=True, null=True)
    winning_number = models.PositiveIntegerField(null=True, blank=True)
    
    def __str__(self):
        return str(self.winning_number)



choice = (
        ('draft', 'draft'),
        ('published', 'published'),
    )  
class DailyResult(models.Model):
    first_round = models.OneToOneField(FirstRound, on_delete=models.CASCADE, null=True)
    second_round = models.OneToOneField(SecondRound, on_delete=models.CASCADE, null=True)
    status = models.CharField(max_length=10, choices = choice, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return str(self.created_at)
      
    @admin.display
    def first_round_result(self):
        return format_html(
             '<span>{} --- {}</span>',
             self.first_round,
            self.first_round.result_time.strftime("%I:%M %p")
        )
    @admin.display
    def second_round_result(self):
        return format_html(
             '<span>{} --- {}</span>',
             self.second_round,
            self.second_round.result_time.strftime("%I:%M %p")
        )
    
    
     
    
    


