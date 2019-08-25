from django.shortcuts import render
from .models import tb , township
from django.views.generic import TemplateView

tsps=township.objects.all()

def index(request):
        if 'township' in request.GET:
                township=request.GET['township']
                if township:
                        
                        data=tb.objects.filter(township=township  )
                        township=data.first
        else:
                township=22
                data= tb.objects.filter(township=22)
               
    
        return render(request, 'TB/index.html', {'data':data, 'tsps':tsps, 'township':township} )

