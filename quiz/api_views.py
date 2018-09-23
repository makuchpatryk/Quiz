from .models import Question
from .serializers import QuestionSerializer

from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class QuestionsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @action(detail=True)
    def test_questions(self, request, pk=None):
    	import ipdb; ipdb.set_trace()
    	return Response([group.name for group in groups])