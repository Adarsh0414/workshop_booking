import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "workshop_portal.settings")
django.setup()

from django.contrib.auth.models import User
from workshop_app.models import Profile

for user in User.objects.filter(profile__isnull=True):
    Profile.objects.create(user=user)
    print(f"Profile created for {user.username}")
