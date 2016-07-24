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
    imgTitles = [];
    imgs = [];
    for project in allProjects:
        currImages = project.projectimage_set.all()
        if (len(currImages) > 0):
            imgTitles.append(project.title)
            relativePath = currImages[0].image.url
            #take out the media url
            relativePath = relativePath[1:]
            mediaUrlLen = len(settings.MEDIA_URL)
            if (mediaUrlLen > 0):
                relativePath = relativePath[mediaUrlLen - 1:]
            relativePath = "img/" + relativePath
            imgs.append(relativePath)
        else:
            imgTitles.append("")
            imgs.append("")
    context = {
        "allProjects": allProjects,
        "imgTitles": json.dumps(imgTitles),
        "imgs": imgs,
    }
    return render(request, "node/work.html", context)

