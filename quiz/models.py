from django.db import models
from django.urls import reverse
import os


class Test(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('quiz:test')


    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now

    was_published_recently.admin_order_field = 'pub_date'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'


class Question(models.Model):
    test = models.ForeignKey('Test', on_delete=models.CASCADE,)
    question_text = models.CharField(max_length=200)
    hint = models.CharField(max_length=200)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey('Question', on_delete=models.CASCADE,)
    choice_text = models.CharField(max_length=200)
    correct = models.BooleanField(default=False)

    def __str__(self):
        return self.choice_text
