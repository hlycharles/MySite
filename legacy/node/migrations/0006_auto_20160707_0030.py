# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 00:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('node', '0005_auto_20160706_2323'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectimage',
            name='image',
            field=models.ImageField(upload_to='media/project_img'),
        ),
    ]
