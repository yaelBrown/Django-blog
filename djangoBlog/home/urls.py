from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
  url('/', views.home, name='index')
  url('home/', views.home, name='index')
]