from django.conf.urls import url
from . import views


app_name = 'quiz'

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^test/(?P<pk>\d+)/', views.TestView.as_view(), name='test')
]
