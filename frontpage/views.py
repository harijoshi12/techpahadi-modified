from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'frontpage/home.html')


def servicesHome(request):
    return render(request, 'frontpage/m2_services.html')


def pricingHome(request):
    return render(request, 'frontpage/m3_pricing.html')


def marketplace(request):
    return render(request, 'frontpage/m4_marketplace.html')


def career(request):
    return render(request, 'frontpage/m6_career.html')


def blogHome(request):
    return render(request, 'frontpage/m7_blogHome.html')


def whyUs(request):
    return render(request, 'frontpage/n1_whyUs.html')


def aboutUs(request):
    return render(request, 'frontpage/n2_aboutUs.html')


def contactUs(request):
    return render(request, 'frontpage/n3_contactUs.html')


def ourExpertise(request):
    return render(request, 'frontpage/n4_ourExpertise.html')


def privacyPolicy(request):
    return render(request, 'frontpage/n5_privacyPolicy.html')


def termsConditions(request):
    return render(request, 'frontpage/n6_termsConditions.html')


def refundPolicy(request):
    return render(request, 'frontpage/n7_refundPolicy.html')
