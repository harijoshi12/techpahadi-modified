from django.shortcuts import render, HttpResponseRedirect
from .forms import SignUpForm, LoginForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
# Create your views here.


def profile(request):
    return render(request, 'user/profile.html')


def user_logout(request):
    logout(request)
    return HttpResponseRedirect("/")


def user_login(request):
    if not request.user.is_authenticated:
        if request.method == "POST":
            form = LoginForm(request=request, data=request.POST)
            if form.is_valid():
                uname = form.cleaned_data['username']
                upass = form.cleaned_data['password']
                user = authenticate(username=uname, password=upass)
                if user is not None:
                    login(request, user)
                    messages.success(request, 'logged in successfully')
                    return HttpResponseRedirect('/dashboard/')
        else:
            form = LoginForm()
        return render(request, 'user/testlogin.html', {'form': form})
    return HttpResponseRedirect


def user_signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            messages.success(request, 'welcome to techpahadi')
            form.save()
            return HttpResponseRedirect('/user/login/')
    else:
        form = SignUpForm()
    return render(request, 'user/testsignup.html', {'form': form})
