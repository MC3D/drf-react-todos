from django.urls import path

from .views import TodoListAPIView, TodoDetailAPIView, TodoCreateAPIView

urlpatterns = [
    path('todos/new/', TodoCreateAPIView.as_view(), name='todo_create'),
    path('todos/<int:pk>/', TodoDetailAPIView.as_view(), name='todo_detail'),
    path('todos/', TodoListAPIView.as_view(), name='todos_list'),
]
