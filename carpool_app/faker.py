from faker import Faker
from random import random

fake = Faker()

def user_generator():
    user_list = []
    for i in range(10):
        user_list.append({"name": fake.name_male(), "email": "test@test.com", "facebook_id": random.randint(100,10000),
                "gender": "male"})
    for i in range(10):
        user_list.append({"name": fake.name_female(), "email": "test@test.com", "facebook_id": random.randint(100,10000),
                "gender": "female"})

    return user_list

