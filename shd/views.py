from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.shortcuts import render, HttpResponse, redirect
from django.views.generic import View
from .forms import LoginForm
from django.contrib.auth import authenticate, login

def home(request):
    if request.user.is_authenticated:
        return render(request, 'home.html')
    else:
        return redirect('login')

def log_in(request):
    if request.user.is_authenticated:
        return render(request, 'home.html')
    else:
        if request.method == 'POST':
                form=LoginForm(request.POST)
                if form.is_valid:
                    username=form.data['username']
                    password=form.data['password']
                    user=authenticate(request, username=username, password=password  )
                    if user is not None:
                        if user.is_active:
                            login(request, user )
                            return redirect ('/')
                        else:
                            return HttpResponse('Login Fail')
                    else:
                        return redirect ('/')
        else:
            form=LoginForm()
            return render (request, 'accounts/login.html', { 'form':form })
    