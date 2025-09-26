from django.shortcuts import render
from django.views.generic import TemplateView

class Resume(TemplateView):
    template_name = 'resume.html'