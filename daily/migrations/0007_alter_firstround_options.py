# Generated by Django 4.0.2 on 2022-02-22 23:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('daily', '0006_alter_firstround_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='firstround',
            options={'get_latest_by': ['-result_time']},
        ),
    ]
