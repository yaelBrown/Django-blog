from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
  url('', views.home, name='home'),
  # url('home/', views.home, name='index')
]