# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-03 18:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('node', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Visits',
            new_name='Visit',
        ),
    ]