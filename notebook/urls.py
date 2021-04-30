from django.contrib import admin
from django.contrib.staticfiles import views
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

from applications.memo.views import MemoViewSet

router = DefaultRouter()
router.register(r"memo", MemoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r"^api/", include(router.urls)),
    path('', TemplateView.as_view(template_name='memo.html'), name='index'),
    path('details/', TemplateView.as_view(template_name='memo_detail.html'), name='index'),
    path('add/', TemplateView.as_view(template_name='memo_add.html'), name='index'),
    re_path(r'^static/(?P<path>.*)$', views.serve),

]
