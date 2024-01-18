from rest_framework import serializers
from .models import Tareas


"""
Serializador para las Tareas
"""
class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tareas
        fields = '__all__'