# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-30 02:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('node', '0009_basicinfo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='category',
            field=models.SmallIntegerField(choices=[(0, 'Front End'), (1, 'Back End'), (2, 'iOS'), (3, 'Android'), (4, 'Computer Vision'), (5, 'Other')], default=0),
        ),
        migrations.AlterField(
            model_name='project',
            name='link',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]