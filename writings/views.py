from django.shortcuts import render
from django.views.generic import TemplateView

class Writings(TemplateView):
    template_name = 'writings.html'