from faker import Faker
from .models import User
from random import random

fake = Faker()

def user_generator():
    for i in range(20):
        return User(name=fake.name(), email=fake.email(), facebook_id=random.randint(100,10000))



