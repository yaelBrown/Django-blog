# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.template import context
from django.http import HttpResponse
from .models import Post
import pymysql

# pymysql connection to database
con = pymysql.Connect('localhost', 'root', 'codeup', 'spring_blog')

# Example of posts
# posts = [
#   {
#     'author': 'CoreyMS',
#     'title': 'Blog Post 1',
#     'content': 'First post content',
#     'date_posted': 'August 27, 2018'
#   },
#   {
#     'author': 'Jane Doe',
#     'title': 'Blog Post 2',
#     'content': 'Second post content',
#     'date_posted': 'August 28, 2018'
#   }
# ]

posts = []
out = []

# Create your views here.

# def home(request):
#   return HttpResponse('<h1>Blog Home</h1>')

def home(request):
  try:
    with con: 
      cur = con.cursor()
      cur.execute("SELECT * FROM posts")

    rows = cur.fetchall()

    for row in rows:
      temp = {'id': row[0], 'author': row[1], 'content': row[2], 'title': row[3]}
      out.append(temp)
      temp = {}

    posts = out.copy()
    out.clear()

    context = {
      'posts': posts
    }

    del rows

  except: 
    print('A error has occured with GET to Index')

  return render(request, 'home/index.html', context)

def userLogin(request):
  return render(request, 'home/login.html')

def userRegister(request):
  return render(request, 'home/register.html')

def postCreate(request):
  return render(request, 'home/create.html')