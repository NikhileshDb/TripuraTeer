from rest_framework import routers
from .api_views import FirstRoundViewSet, SecondRoundViewSet, SundayResultViewSet, WednesdayResultViewSet

# Initialize the router
router = routers.SimpleRouter()
router.register('first-round', FirstRoundViewSet, basename='first-round')
router.register('second-round', SecondRoundViewSet, basename='second-round')
router.register('sunday-result', SundayResultViewSet, basename='sunday-result')
router.register('wednesday-result', WednesdayResultViewSet, basename='wednesday-result')

# Resiter the api urls
# router.register(r'users', UserViewSet)
 

# addding the api urls to the urlpatterns
urlpatterns = router.urls