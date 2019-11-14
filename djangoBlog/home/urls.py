from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
  url('admin', admin.site.urls),
  url('login', views.userLogin, name='login'),
  url('register', views.userRegister, name='register'),
  url('create', views.postCreate, name='createPost'),
  url('', views.home, name='index')
]