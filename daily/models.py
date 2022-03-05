from django.db import models
from django.forms import TimeInput

# Create your models here.

class FirstRound(models.Model):
    result_time = models.DateTimeField(blank=True, null=True)
    winning_number = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return str(self.winning_number) + " : " + str(self.result_time.strftime("%d/%m/%Y"))
    class Meta:
        get_latest_by = ['-result_time']
    


class SecondRound(models.Model):
    result_time = models.DateTimeField(blank=True, null=True)
    winning_number = models.PositiveIntegerField(null=True, blank=True)
    
    def __str__(self):
        return str(self.winning_number) + " : " + str(self.result_time.strftime("%d/%m/%Y"))



choice = (
        ('draft', 'draft'),
        ('published', 'published'),
    )  
class DailyResult(models.Model):
    first_round = models.OneToOneField(FirstRound, on_delete=models.CASCADE, null=True)
    second_round = models.OneToOneField(SecondRound, on_delete=models.CASCADE, null=True)
    status = models.CharField(max_length=10, choices = choice, null=True, blank=True)

    def __str__(self):
        return str(self.first_round.result_time.strftime("%d/%m/%y")) + "   [" + str(self.first_round.winning_number) + "/" + str(self.second_round.winning_number) + "]" 
     
    
    


