from django.contrib import admin

# Register your models here.
from .models import Visit, BasicInfo, Project, ProjectImage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]

admin.site.register(Visit)
admin.site.register(BasicInfo)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)
