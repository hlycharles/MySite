# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 00:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('node', '0006_auto_20160707_0030'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectimage',
            name='image',
            field=models.ImageField(upload_to='project_img'),
        ),
    ]