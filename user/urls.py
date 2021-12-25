from django.urls import path
from .import views
urlpatterns = [
    path('profile/', views.profile, name="profile"),
    path('login/', views.user_login, name="login"),
    path('signup/', views.user_signup, name="register"),
    path('logout/', views.user_logout, name="logout"),
]
