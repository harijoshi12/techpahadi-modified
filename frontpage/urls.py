from django.urls import path
from .import views
urlpatterns = [
    path('', views.home, name="home"),
    path('services/', views.servicesHome, name='services'),
    path('pricing/', views.pricingHome, name='pricing'),
    path('marketplace/', views.marketplace, name="marketplace"),
    path('career/', views.career, name='career'),
    path('blog/', views.blogHome, name='blog'),
    path('why-us', views.whyUs, name="whyUs"),
    path('about-us/', views.aboutUs, name='aboutUs'),
    path('contact-us/', views.contactUs, name='contactUs'),
    path('our-expertise/', views.ourExpertise, name="ourExpertise"),
    path('privacy-policy/', views.privacyPolicy, name='privacyPolicy'),
    path('terms-and-conditions/', views.termsConditions, name='termsConditions'),
    path('refund-and-cancellation-policy/',
         views.refundPolicy, name='refundPolicy'),
]
