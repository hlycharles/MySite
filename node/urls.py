from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^work/$', views.work, name='work'),
    url(r'^about/$', views.about, name='about'),
]
