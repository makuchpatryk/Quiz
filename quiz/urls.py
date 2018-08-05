from django.conf.urls import url
from . import views


app_name = 'quiz'

urlpatterns = [
    url(r'^$', views.Index.as_view(), name='index')
]
