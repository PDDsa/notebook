from datetime import datetime

from django.db import models


class Memo(models.Model):
    title = models.CharField("标题", max_length=128)
    create_by = models.CharField("创建者", max_length=64, null=True)
    create_time = models.DateTimeField("创建时间", default=datetime.now)
    desc = models.TextField("备忘录详情", null=True)
