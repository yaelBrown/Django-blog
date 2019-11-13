from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
  url('users/login/', views.userLogin, name='login'),
  url('users/register/', views.userRegister, name='register'),
  url('posts/create/', views.postCreate, name='createPost'),
  url('', views.home, name='index')
]