from django.urls import path
from .views import Socials

urlpatterns = [
    path('', Socials.as_view(), name='socials'),
]