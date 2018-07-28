from django.shortcuts import render
from django.views import generic
from .models import Question


class Index(generic.ListView):
    title = "Index"
    template = 'quiz/index.html'

    def get(self, request):
        context = {}

        return render(request, self.template, context)


class Questions(generic.ListView):
    title = "Questions"
    template = 'quiz/questions.html'

    def get(self, request):
        questions = list(Question.objects.values('pk', 'question_text'))

        context = {
            'question_text': self.title,
            'props': questions,
        }

        return render(request, self.template, context)
