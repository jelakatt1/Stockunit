from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Reg_login_logout.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
