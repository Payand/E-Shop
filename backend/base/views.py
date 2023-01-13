from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import productsApi


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            "id": 3,
            'name': 'Ali',
            'family_name': 'shooshtari'
        }
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    return Response(productsApi)


@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in productsApi:
        if i['_id'] == pk:
            product = i
            break

    return Response(product)
