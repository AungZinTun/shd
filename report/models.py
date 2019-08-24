from django.db import models

# Create your models here.

class TB(models.Model):
    name=models.CharField(max_length=20)