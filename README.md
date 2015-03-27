# RID*EO*
The crowded roadways need a hero! 
http://rideo.wrong-question.com/#/
## Description

RID*EO* Mission:

To promote all forms of ridesharing, connect communities, and provide a safe efficient service that can be used by
any and all demographics.  

At the heart of our application is a unique 'clustering’ algorithm that allows users to simply input three data points- 
(Home address, Work address, Time for use) and receive a number of carpool options to choose from.  Our goal is to 
strip away any pretense about ridesharing and connect like minded individuals that share a desire to move their community 
forward!

## Main Features
Here are just a few of the things that RID*EO* does well:

 - We have a carpool class that will connect users by way of calenders and common driving times:

```
class Carpool(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    driver_accepted = db.Column(db.Boolean)
    passenger_accepted = db.Column(db.Boolean)
    driver_calendar_id = db.Column(db.Integer,
                                   db.ForeignKey('calendar.id'),
                                   nullable=False)
    passenger_calendar_id = db.Column(db.Integer, db.ForeignKey('calendar.id'),
                                      nullable=False)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.id'))
    driver_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    passenger_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    @property
    def users(self):
        user1 = Calendar.query.filter(
            Calendar.id == self.driver_calendar_id).first().user_id
        user2 = Calendar.query.filter(
            Calendar.id == self.passenger_calendar_id).first().user_id
        return [user1, user2]

    @property
    def details(self):
        driver_arrival_time = Calendar.query.filter(
            Calendar.id == self.driver_calendar_id).first().arrival_datetime
        driver_depart_time = Calendar.query.filter(
            Calendar.id == self.driver_calendar_id).first().departure_datetime
        passenger_arrival_time = Calendar.query.filter(
            Calendar.id == self.passenger_calendar_id).first().arrival_datetime
        passenger_depart_time = Calendar.query.filter(
            Calendar.id == self.passenger_calendar_id).first().\
                departure_datetime
        driver = User.query.filter(User.id == self.driver_id).first().to_dict()
        passenger = User.query.filter(User.id == self.passenger_id).\
            first().to_dict()
        return {"driver":
                    {
                    "info": driver,
                    "arrival": driver_arrival_time,
                    "departure": driver_depart_time
                    },
                "passenger":
                    {
                    "info": passenger,
                    "arrival": passenger_arrival_time,
                    "departure": passenger_depart_time
                    }
                }

    def to_dict(self):
        return {"id": self.id,
                "driver_accepted": self.driver_accepted,
                "passenger_accepted": self.passenger_accepted,
                "driver_calendar_id": self.driver_calendar_id,
                "passenger_calendar_id": self.passenger_calendar_id,
                "vehicle_id": self.vehicle_id,
                "driver_id": self.driver_id,
                "passenger_id": self.passenger_id
                }
```
  - We have a function that searches for the best gas prices near your current carpool route:
  
```
def get_gas_prices(driver_id):
    driver = User.query.filter_by(id=driver_id).first()
    driver_lat = driver.latitude
    driver_lon = driver.longitude
    api_call_url = "http://devapi.mygasfeed.com/stations/radius/{}/{}/5/" \
               "reg/Price/{}.json".format(driver_lat, driver_lon, current_app.config["MYGASFEEDAPI"])
    request = url.urlopen(api_call_url).read().decode("utf-8")
    request = json.loads(request)
    '''request is now a dictionary'''
    stations = request["stations"]
    '''stations is a list of dicts'''
    prices = [station["reg_price"] for station in stations]
    prices = [i for i in prices if i !="N/A"]
    average_price = round(st.mean([float(price) for price in prices]), 2)
    return average_price

```
 
  - We also have a beautiful user interface with some pretty nifty uses of html/css/javascript:
  
```

```




### Install Requirements  

```
pip install -r requirements.txt
```

## Additional Resources

* 
* 



## Contributing
This is an open source project, and we would love any insight on how to improve our work!

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 

## Credits

1. http://www.carbonrally.com/
2. http://www.1800234ride.com/
3. http://www.simplesteps.org/
4. http://www.epa.gov/
5. http://www.statisticbrain.com/carpool-statistics/

## License

This project is licensed under the terms of the MIT license.
The MIT License (MIT)

Copyright (c) 2015 Bayesian-Skulls

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>


