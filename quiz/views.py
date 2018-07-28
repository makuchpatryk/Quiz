from django.shortcuts import render
from django.http import HttpResponse

def quiz_index(request):
	return render(request, 'quiz/index.html')
# Create your views here.
