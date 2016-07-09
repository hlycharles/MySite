from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Visit(models.Model):
    count = models.IntegerField(default=0)

class Project(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    link = models.CharField(max_length=200)

class ProjectImage(models.Model):
    project = models.ForeignKey(Project)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='project_img')
