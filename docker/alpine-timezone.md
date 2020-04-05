# Setting timezone in alpine images

Quite commonly one can set the timezone of a docker image using for example `-e TZ=Europe/Stockholm`.

Alpine images do not install the timezone package as default and you therefore have to include it yourself if you want to be able to set the timezone.

Create a new Dockerfile that installs tzdata, for example:
```
FROM postgres:12.1-alpine
RUN apk add --update \
    tzdata \
```

Build your new container using:
```
docker build . -t postgres-tz
```

You can then set the timezone when starting the container:
```
docker run --name postgres-tz -e TZ=Europe/Stockholm -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres-tz
```

Connect using psql (when using Windows change localhost to your internal network ip, for example 192.168.0.2):
```
docker run -it --rm postgres-tz psql postgres://postgres:password@localhost
```

Check that postgres is using the correct timezone:
```
show timezone;
```

## Sources
* https://www.peterspython.com/en/blog/how-to-set-the-timezone-when-using-the-python-alpine-docker-image
* https://www.grainger.xyz/timezone-in-docker-alpine-not-using-environment-variable-tz