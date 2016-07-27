from django.shortcuts import render, get_object_or_404
from .models import Project
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.conf import settings

# Create your views here.
def index(request):
    values = json.dumps(['v', 100])
    context = {"vals": values}
    return render(request, "node/index.html", context)

def work(request):
    allProjects = Project.objects.all()
    projectTitles = []
    projectContents = []
    imgs = []
    for project in allProjects:
        currImages = project.projectimage_set.all()
        if (len(currImages) > 0):
            projectTitles.append(project.title)
            projectContents.append(project.content)
            relativePath = currImages[0].image.url
            imgs.append(relativePath)
        else:
            projectTitles.append("")
            projectContents.append("")
            imgs.append("")
    context = {
        "allProjects": allProjects,
        "projectTitles": json.dumps(projectTitles),
        "projectContents": json.dumps(projectContents),
        "imgs": imgs,
    }
    return render(request, "node/work.html", context)

