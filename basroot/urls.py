#******************
MAINTENANCE = True
#******************

from django.urls import path, include

from django.contrib import admin

from django.conf.urls import url

admin.autodiscover()

import blog.views

# ADMIN TITLE
admin.site.site_header = 'Greederboard.'

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path("", blog.views.projects, name="projects"),
    path("admin/", admin.site.urls),
    path("blog/", include("blog.urls")),
    path("musica/", blog.views.musica, name="musica"),
    path("mysterybox/", blog.views.mysterybox, name="mysterybox"),
    path("404/", blog.views.page404, name="page404"),
    path("home/", blog.views.home, name="home"),
    path("about/", blog.views.about, name="about"),
    path("projects/", blog.views.projects, name="projects"),
]

#Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]

# MAINTENANCE MODE
if MAINTENANCE == True:
    urlpatterns = [
        path("admin/", admin.site.urls),
        # path("", blog.views.maintenance, name="maintenance"),
        path("404/", blog.views.page404, name="page404"),
        path("beta/", blog.views.beta, name="beta"),
        path('dash/', blog.views.dash, name="dash"),
        path('', blog.views.dash, name="dash")
    ]

# FAVICON
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView

urlpatterns += [ 
    # ... other url patterns ...
    url(r'^favicon.ico$',
        RedirectView.as_view( # the redirecting function
            url=staticfiles_storage.url('images/favicon.ico'), # converts the static directory + our favicon into a URL
        ),
        name="favicon" # name of our view
    ),
]