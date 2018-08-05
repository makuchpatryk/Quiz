from django.shortcuts import render
from django.views import generic
from .models import Question, Choice
from .serializers import QuestionSerializer
import json


class Index(generic.ListView):
    title = "Index"
    template = 'quiz/index.html'

    def get(self, request):
        questions = Question.objects.all()
        tmp = QuestionSerializer(
            questions, many=True
            )

        context = {
            'question_text': self.title,
            'props': json.dumps(tmp.data),
        }

        return render(request, self.template, context)
