from django.conf.urls import url
from . import views

urlpatterns = [
    url('', views.quiz_index, name='index'),
]
