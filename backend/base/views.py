from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['GET', 'POST'])
def getRoutes(request):
    routes = [
        {
            "id": 3,
            'name': 'ali',
            'family_name': 'shooshtari'
        }
    ]
    return Response(routes)
