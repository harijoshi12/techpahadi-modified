from django.shortcuts import render, HttpResponseRedirect
# Create your views here.


def dashboard(request):
    if request.user.is_authenticated:
        return render(request, 'dashboard/dashboard.html')
    else:
        return HttpResponseRedirect('/')
