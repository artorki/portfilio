from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic import ListView
from .models import Project

class PortfolioView(ListView):
    model = Project
    template_name = 'portfolio.html'
    context_object_name = 'projects'
