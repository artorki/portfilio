from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('writings/', include('writings.urls')),
    path('portfolio/', include('portfolio.urls')),
    path('resume/', include('resume.urls')),
    path('socials/', include('socials.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)