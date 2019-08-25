from django.contrib import admin
from .models import tb, township
from import_export import resources
from import_export.admin import ImportExportModelAdmin
# Register your models here.

class tb_inline(admin.TabularInline):
    model=tb
class tsp_tb(admin.ModelAdmin):
    inlines=[ tb_inline, ]

@admin.register(tb)
class ViewAdini(ImportExportModelAdmin):
    pass

admin.site.register(township, tsp_tb)