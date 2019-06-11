from django.db import models

# Create your models here.
class TB(models.Model):
    year=models.IntegerField()
    population=models.IntegerField()
    presumptive_tb_target=models.IntegerField()
    presumptive_tb_exam_rate=models.IntegerField()