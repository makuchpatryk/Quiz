from django.contrib import admin

from .models import Question, Choice, Test


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3


class QuestionsAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text', 'test', 'hint', 'image']})
    ]
    inlines = [ChoiceInline]
    list_display = ('question_text',)
    search_fields = ['question_text']


class QuestionsInline(admin.TabularInline):
    model = Question
    extra = 3


class TestAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['title', 'pub_date']})
    ]
    inlines = [QuestionsInline]
    list_display = ('title', 'pub_date')
    search_fields = ['title']


admin.site.register(Test, TestAdmin)
admin.site.register(Question, QuestionsAdmin)
admin.site.register(Choice)
