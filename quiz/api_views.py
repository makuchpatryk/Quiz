from .models import Question
from .serializers import QuestionSerializer

from rest_framework import viewsets

class QuestionsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
