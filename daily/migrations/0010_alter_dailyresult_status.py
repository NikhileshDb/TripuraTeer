# Generated by Django 4.0.2 on 2022-07-05 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('daily', '0009_dailyresult_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailyresult',
            name='status',
            field=models.CharField(blank=True, choices=[('draft', 'draft'), ('publish', 'publish')], max_length=10, null=True),
        ),
    ]
