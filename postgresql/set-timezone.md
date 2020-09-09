# Set default Postgresql timezone

Get list of timezones:
```
SELECT * FROM pg_timezone_names;
```

Set timezone for current session:
```
set timezone TO 'Europe/Stockholm';
```

Set default timezone for database:
```
ALTER DATABASE postgres SET timezone TO 'Europe/Stockholm';
```
