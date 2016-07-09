from django.contrib import admin

# Register your models here.
from .models import Visit, Project, ProjectImage

admin.site.register(Visit)
admin.site.register(Project)
admin.site.register(ProjectImage)
