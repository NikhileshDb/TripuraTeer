
from django.contrib import admin
from django.urls import path, include
from . import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

admin.site.site_header = 'Tripura Teer'                    # default: "Django Administration"
admin.site.index_title = 'Tripura Teer'                 # default: "Site administration"
admin.site.site_title = 'Tripura Teer' 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('daily.urls')),
    path('sunday/', include('sunday.urls')),
    path('wednesday/', include('wednesday.urls')),
    path('api/', include('api_provider.api_urls')),
    path('dice/', TemplateView.as_view(template_name="components/dice.html")),
    path('about/', TemplateView.as_view(template_name="frontend/about_page.html"), name="about"),
] 

urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)

