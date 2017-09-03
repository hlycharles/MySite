from django.conf.urls import url
from django.views.generic.base import RedirectView

from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^work/$', views.work, name='work'),
    url(r'^about/$', views.about, name='about'),
    url(r'^contact/$', views.contact, name='contact'),
]
