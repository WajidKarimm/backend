from django.urls import path
from .views import home, login, register, detail   # include detail here

urlpatterns = [
    path('', home, name="home"),          
    path('login/', login, name="login"), 
    path('register/', register, name="register"),
    path('detail/', detail, name="detail"),
]
