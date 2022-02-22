
from django.contrib import admin
from django.urls import path, include
from . import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('daily.urls')),
    path('sunday/', include('sunday.urls')),
    path('wednesday', include('wednesday.urls')),
    path('api/', include('api_provider.api_urls')),
] 

urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)

