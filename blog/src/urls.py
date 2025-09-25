from django.urls import path,include
from .views import *

urlpatterns = [
    path('', home , name="home")     # Routes from your app "src"
    path('login', login, name="login"),
    path('register', register, name="register")
        
]
