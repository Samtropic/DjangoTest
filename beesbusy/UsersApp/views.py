from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Profile
from .serializers import ProfileSerializer, UserSerializer

@csrf_exempt
@api_view(['GET'])
def search_users(request):

    hometown = request.query_params.get('hometown')
    age_min = request.query_params.get('age_min')
    age_max = request.query_params.get('age_max')
    gender = request.query_params.get('gender')

    queryset = User.objects.exclude(is_superuser=True)

    if hometown:
        queryset = queryset.filter(Q(profile__hometown__istartswith=hometown))

    if age_min and age_max:
        queryset = queryset.filter(profile__age__gte=age_min, profile__age__lte=age_max)
    elif age_min and not age_max:
        queryset = queryset.filter(profile__age__gte=age_min)
    elif age_max and not age_min:
        queryset = queryset.filter(profile__age__lte=age_max)
        


    if gender:
        queryset = queryset.filter(profile__gender=gender)

    serializer = UserSerializer(queryset, many=True)
    return Response(serializer.data)


class ProfileDetailView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    def get_object(self):
        user_id = self.kwargs.get('pk')
        return get_object_or_404(self.queryset, user__id=user_id)  # Filter by user.id