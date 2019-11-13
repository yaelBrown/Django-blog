# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# def home(request):
#   return HttpResponse('<h1>Blog Home</h1>')

def home(request):
  return render(request, 'home/index.html')

def userLogin(request):
  return render(request, 'users/login.html')

def userRegister(request):
  return render(request, 'users/register.html')

def postCreate(request):
  return render(request, 'posts/create.html')