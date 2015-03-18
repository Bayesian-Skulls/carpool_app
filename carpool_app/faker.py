from faker import Faker
from random import random

fake = Faker()

def user_generator():
    user_list = []
    for i in range(10):
        mname = fake.name_male()
        user_list.append({"name": mname, "email": mname + "@carpool.com", "facebook_id": random.randint(100,10000),
                "gender": "male"})
    for i in range(10):
        fname = fake.name_female()
        user_list.append({"name": fname, "email": fname + "@carpool.com", "facebook_id": random.randint(100,10000),
                "gender": "female"})

    return user_list

