from django.shortcuts import render
from django.views import generic
from .models import Question, Choice, Test
from .serializers import QuestionSerializer
from django.urls import reverse
import json


class IndexView(generic.ListView):
    title = "Index"
    template = 'quiz/index.html'

    def get(self, request):
        test = Test.objects.all()
        context = {'test': test}
        return render(request, self.template, context)


class TestView(generic.ListView):

    title = "test"
    template = 'quiz/test.html'

    def get(self, request, pk):

        context = {
            'question_text': self.title,
            'test_id': pk,
        }

        return render(request, self.template, context)

