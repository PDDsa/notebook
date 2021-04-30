from rest_framework import mixins, viewsets

from applications.memo.models import Memo
from applications.memo.serializers import MemoSerializers


class MemoViewSet(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = Memo.objects.all()
    serializer_class = MemoSerializers
