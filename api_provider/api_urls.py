from rest_framework import routers
from .api_views import FirstRoundViewSet, SecondRoundViewSet, StarballResultViewSet, WednesdayResultViewSet, DailyResultViewSet

# Initialize the router
router = routers.SimpleRouter()
router.register('first-round', FirstRoundViewSet, basename='first-round')
router.register('second-round', SecondRoundViewSet, basename='second-round')
router.register('starball-result', StarballResultViewSet, basename='starball-result')
router.register('wednesday-result', WednesdayResultViewSet, basename='wednesday-result')
router.register('daily-result', DailyResultViewSet, basename='daily-result')

# Resiter the api urls
# router.register(r'users', UserViewSet)
 

# addding the api urls to the urlpatterns
urlpatterns = router.urls