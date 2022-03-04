from django.db import models

# Create your models here.

choice = (
        ('draft', 'draft'),
        ('published', 'published'),
    ) 
class WednesdayResult(models.Model):
    winning_number = models.BigIntegerField(null=True, blank=True)
    result_time = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=10, choices = choice, null=True, blank=True)

