# Generated by Django 4.0.1 on 2022-02-22 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Reg_login_logout', '0009_uploadfile_stripe_product_info'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadfile',
            name='stripe_product_info',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
