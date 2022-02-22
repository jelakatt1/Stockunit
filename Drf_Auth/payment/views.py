from django.shortcuts import render
from rest_framework.views import APIView
import stripe
from rest_framework.response import Response
from rest_framework import status
from Reg_login_logout.models import UserProfile
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class PaymentView(APIView):
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        stripe.api_key = "sk_test_51K5xe9SGjJnXEIinSrF4DDyoCnr1lBgvbZkYwa5NAJy6vHPsHdcjJ8YuEucjHchHK133HgoZ3XTKT4Dn6rrNbnv900TePHs9zm"
        buy_obj = request.data.get('buy_obj')
        user = UserProfile.objects.filter(id=buy_obj.get('user')).first()
        session = stripe.checkout.Session.create(
            line_items=[{
                'price': buy_obj['stripe_product_info'].get('id')
                ,
                'quantity': 1,
            }],
            mode='payment',
            success_url='http://localhost:3000/',
            cancel_url='http://localhost:3000/',
            payment_intent_data={
                'application_fee_amount': buy_obj.get('price') / 2,
                'transfer_data': {
                    'destination': user.stripe_info.get('id')
                    ,
                },
            },
        )
        return Response({"message": "success"}, status=status.HTTP_201_CREATED)

