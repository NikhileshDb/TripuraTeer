from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticSiteMap(Sitemap):
    changefreq = "daily"
    priority = 0.5

    def items(self):
        return ['daily_home', 'd_prev_hist', 'start_ball_previous', 'privacy-policy', 'about']

    def location(self, item):
        return reverse(item)