from django.shortcuts import render

# Create your views here.
def musica(request):
    return render(request, 'musica.html')

def mysterybox(request):
    return render(request, 'mysterybox.html')

def maintenance(request):
    return render(request, 'maintenance.html')

def page404(request):
    return render(request, '404.html')

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    return render(request, 'projects.html')

def beta(request):
    return render(request, 'beta.html')

def dash(request):
    return render(request, 'dash.html')