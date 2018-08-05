from rest_framework import routers
from django.conf.urls import include, url
from django.contrib import admin
from quiz import api_views


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'questions', api_views.QuestionsViewSet, 'questions')

urlpatterns = [
    url(r'^api/', include(router.urls, namespace='api')),
    url(r'^$', include('quiz.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^quiz/', include('quiz.urls', namespace='quiz')),
    url(r'^api-auth/', include('rest_framework.urls',
        namespace='rest_framework'))
    ]
