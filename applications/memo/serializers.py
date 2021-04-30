from rest_framework import serializers

from applications.memo.models import Memo


class MemoSerializers(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False)

    class Meta:
        model = Memo
        fields = "__all__"
