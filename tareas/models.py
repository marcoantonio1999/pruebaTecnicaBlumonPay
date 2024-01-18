from django.db import models

"""
Modelo para las tareas
"""

class Tareas(models.Model):
    ESTADOS = (
        ('pendiente', 'Pendiente'),
        ('completada', 'Completada'),
        ('en_pruebas', 'En Pruebas'),
        ('estancado', 'Estancado'),
    )
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True, max_length=300)
    fecha = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=20, choices=ESTADOS, default='pendiente')

    def __str__(self) -> str:
        return self.titulo
