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
        try:
            # stripe.PaymentIntent.create(
            #     amount=request.data.get('amount'),
            #     # currency='usd',
            #     application_fee_amount=request.data.get('amount')/2,
            #     # payment_method_types=['card'],
            #     # on_behalf_of='{{CONNECTED_ACCOUNT_ID}}',
            #     transfer_data={
            #         'destination': user.stripe_info.get('id'),
            #     },
            # )
            payment_intent = stripe.PaymentIntent.create(
                amount=request.data.get('amount'),
                currency='usd',
                payment_method_types=['card'],
            )
            # print("intent")
            # print(payment_intent)
            #
            # # Create a Transfer to a connected account (later):
            # transfer = stripe.Transfer.create(
            #     amount=round(request.data.get('amount')/2*100),
            #     currency='usd',
            #     destination=user.stripe_info.get('id'),
            # )
            # print('transfer')
            # print(transfer)

            # charge = stripe.charges.create(
            #     amount= request.data.get('amount'),
            #     currency= user.currency,
            #     destination= user.stripe_info.get('id')
            # )
            stripe.payouts.create(
                amount= round(request.data.get('amount')/2) * 100,
                currency= 'usd',
                destination=user.stripe_info.get('id')
            )
            return Response({"message": "success"}, status=status.HTTP_201_CREATED)
        except:
            return Response({"message": "failed"}, status=status.HTTP_400_BAD_REQUEST)
