from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from UsersApp import views

urlpatterns = [
    path('users/', views.search_users, name='search-users'),
    path('users/<pk>/', views.ProfileDetailView.as_view(), name='profile-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)