# Generated by Django 4.0.1 on 2022-01-28 13:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Reg_login_logout', '0003_alter_friend_friend_alter_friend_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='survey',
            name='answer5',
        ),
    ]
