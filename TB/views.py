from django.shortcuts import render
from .models import tb, township
from random import randint
from django.views.generic import TemplateView
from chartjs.views.lines import BaseLineChartView


def index(request):
    data= tb.objects.filter(township=22)

    return render(request, 'TB/index.html', {'data':data} )
