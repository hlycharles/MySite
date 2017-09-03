# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-06 01:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('node', '0002_auto_20160703_1818'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('link', models.CharField(max_length=200)),
                ('img', models.ImageField(upload_to='projects')),
            ],
        ),
    ]