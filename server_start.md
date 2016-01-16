# Carpool App


Quickstart
----------

Run the following commands to bootstrap your environment.


```
cd carpool_app
pip install -r requirements.txt
python manage.py db init
python manage.py server
```


Deployment
----------

In your production environment, make sure you have an application.cfg
file in your instance directory.


Shell
-----

To open the interactive shell, run:

    python manage.py shell

By default, you will have access to `app` and `db`.


Running Tests
-------------

To run all tests, run:

    python manage.py test


Migrations
----------

Whenever a database migration needs to be made, run the following commmand:

        python manage.py db migrate

This will generate a new migration script. Then run:

        python manage.py db upgrade

to apply the migration.

For a full migration command reference, run `python manage.py db --help`.
