from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import productsApi
from .serializers import ProductSerializer
from .models import Product


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

    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(id=pk)
    seralizer = ProductSerializer(product, many=False)
    return Response(seralizer.data)
