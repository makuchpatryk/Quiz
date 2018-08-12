from rest_framework import serializers
from .models import Question, Choice


class ChoicesSerializer(serializers.Serializer):
    pk = serializers.ReadOnlyField()
    choice_text = serializers.ReadOnlyField()
    correct = serializers.BooleanField()


# Serializers define the API representation.
class QuestionSerializer(serializers.Serializer):
    pk = serializers.ReadOnlyField()
    question_text = serializers.ReadOnlyField()
    hint = serializers.ReadOnlyField()
    image = serializers.FileField(
        max_length=None, allow_empty_file=False)
    choices = serializers.SerializerMethodField()

    def get_choices(self, obj):
        tmp = Choice.objects.filter(question=obj.pk)
       	return ChoicesSerializer(tmp, many=True).data
