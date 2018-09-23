from rest_framework import routers
from django.conf.urls import include, url
from django.contrib import admin
from quiz import api_views
from django.conf.urls.static import static
from django.conf import settings


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'questions', api_views.QuestionsViewSet, 'questions')

urlpatterns = [
    url(r'^', include('quiz.urls', 'index')),
    url(r'^admin/', admin.site.urls),
    url(r'^quiz/', include('quiz.urls')),
    url(r'^api-auth/', include('rest_framework.urls',)),
    url(r'^api/', include(router.urls))
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
