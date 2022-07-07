
from django.contrib import admin
from django.urls import path, include
from . import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import GenericSitemap
from daily.models import DailyResult
admin.site.site_header = 'Tripura Teer'                    # default: "Django Administration"
admin.site.index_title = 'Tripura Teer'                 # default: "Site administration"
admin.site.site_title = 'Tripura Teer' 

info_dic = {"queryset": DailyResult.objects.all(),
"date_field": 'created_at'}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('daily.urls')),
    path('sunday/', include('sunday.urls')),
    path('wednesday/', include('wednesday.urls')),
    path('api/', include('api_provider.api_urls')),
    path('dice/', TemplateView.as_view(template_name="components/dice.html")),
    path('about/', TemplateView.as_view(template_name="frontend/about_page.html"), name="about"),
    path('sitemap.xml', sitemap, {'sitemaps':{
        "daily-result" :  GenericSitemap(info_dic, priority=0.6)}},
     name='django.contrib.sitemaps.views.sitemap')
] 

urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root= settings.STATIC_ROOT)

