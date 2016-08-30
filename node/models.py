from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Visit(models.Model):
    count = models.IntegerField(default=0)

class BasicInfo(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    
    def __str__(self):
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    link = models.CharField(max_length=200, blank=True)
    #choices for project catetory
    CATEGORY_CHOICES = (
        (0, "Front End"),
        (1, "Back End"),
        (2, "iOS"),
        (3, "Android"),
        (4, "Computer Vision"),
        (5, "Other"),
    )
    CATEGORY_COLORS = ["black", "black", "black", "black", "black"]
    category = models.SmallIntegerField(default=0, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='project_img')

    def __str__(self):
        return self.title
