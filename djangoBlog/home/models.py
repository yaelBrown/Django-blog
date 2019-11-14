# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# Django field types - https://docs.djangoproject.com/en/2.2/ref/models/fields/#field-types

class Post(models.Model):
  title = models.CharField(max_length=100)
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  content = models.TextField()