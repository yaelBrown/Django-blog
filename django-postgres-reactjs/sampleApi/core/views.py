from django.http import JsonResponse
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView


class TestView(APIView):
  def get (self, request, *args, **kwargs):
    data = {
      'name': 'Yael',
      'age': 27
    }
    
    return Response(data)


# Create your views here.
# def test_view(req):
  # data = {
  #   'name': 'Yael',
  #   'age': 27
  # }

  # return JsonResponse(data)   # safe=False - lets you return other datatypes besides objects.