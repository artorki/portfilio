from django.shortcuts import render
from django.views.generic import TemplateView

class Socials(TemplateView):
    template_name = 'socials.html'