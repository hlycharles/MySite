from django.shortcuts import render, get_object_or_404
from .models import Project, BasicInfo
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.conf import settings

# Create your views here.
def index(request):
    values = json.dumps(['v', 100])
    context = {"vals": values}
    return render(request, "node/index.html", context)

def about(request):
    allInfoEntries = BasicInfo.objects.all()
    infoContents = []
    for info in allInfoEntries:
        infoContents.append(info.content)
    context = {
        "allInfo": allInfoEntries,
    }
    return render(request, "node/about.html", context)

def work(request):
    allProjects = Project.objects.all()
    projectTitles = []
    projectContents = []
    projectCategories = []
    projectLinks = []
    imgs = []
    for project in allProjects:
        currImages = project.projectimage_set.all()
        projectTitles.append(project.title)
        projectContents.append(project.content)
        projectCategories.append(project.category)
        projectLinks.append(project.link)
        if (len(currImages) > 0):
            relativePath = currImages[0].image.url
            imgs.append(relativePath)
        else:
            imgs.append("")
    categories = []
    for (index, name) in Project.CATEGORY_CHOICES:
        categories.append(name)
    context = {
        "allProjects": allProjects,
        "projectTitles": json.dumps(projectTitles),
        "projectContents": json.dumps(projectContents),
        "projectLinks": json.dumps(projectLinks),
        "projectCategories": json.dumps(projectCategories),
        "categoryColors": json.dumps(Project.CATEGORY_COLORS),
        "imgs": imgs,
        "categories": categories,
    }
    return render(request, "node/work.html", context)

def contact(request):
    context = {}
    return render(request, "node/contact.html", context)

#404 handler
def handler404(request):
    context = {}
    return render(request, "node/index.html", context)

