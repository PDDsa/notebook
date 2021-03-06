# Generated by Django 2.2.6 on 2021-04-30 08:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Memo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='标题')),
                ('create_by', models.CharField(max_length=64, null=True, verbose_name='创建者')),
                ('create_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='创建时间')),
                ('desc', models.CharField(max_length=64, null=True, verbose_name='备忘录详情')),
            ],
        ),
    ]
