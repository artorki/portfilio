from django.urls import path
from .views import Writings

urlpatterns = [
    path('', Writings.as_view(), name='writings'),
]