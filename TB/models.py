from django.db import models

# Create your models here.
import datetime



    
def current_year():
    return datetime.date.today().year

class township(models.Model):
    name=models.CharField(max_length=20)
    def __str__(self):
        return self.name

class tb(models.Model):
    township = models.ForeignKey(township, on_delete='CASCADE' )
    year = models.IntegerField(default=current_year)
    total_population= models.IntegerField(default=0)
    target_for_presumptive_tb= models.IntegerField(default=0)
    presumptive_tb_examinationn_rate = models.IntegerField(default=0)
    cnr_bact_confirmed = models.IntegerField(default=0)
    cnr_all_cases= models.IntegerField(default=0)
    treatment_success_rate= models.IntegerField(default=0)
    death_rate= models.IntegerField(default=0)
    new_ss_p_cases= models.IntegerField(default=0)
    relapse_cases= models.IntegerField(default=0)
    smear_positive_unknown_previous_treatment= models.IntegerField(default=0)
    total_no_of_clinically_diagnosed_cased= models.IntegerField(default=0)
    ep_cases= models.IntegerField(default=0)
    hiv_test_among_all_register_tb_cases= models.IntegerField(default=0)
    hiv_positive_case= models.IntegerField(default=0)
