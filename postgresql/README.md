# Postgresql

## Create instance

See `docker/alpine-timezone`.
```
docker run --name postgres-tz -e TZ=Europe/Stockholm -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres-tz
```

## Connect to instance
```
docker run -it --rm postgres psql postgres://username:password@hostname/db_name
```

## Drop schema cascade
```
DROP SCHEMA schema_name CASCADE;
```

## Set search_path
```
SET search_path to schema_name;
```

## Disk usage for tables in schema
```
SELECT nspname || '.' || relname AS "relation",
    pg_size_pretty(pg_relation_size(C.oid)) AS "size"
  FROM pg_class C
  LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
  WHERE nspname IN ('schema name')
  ORDER BY pg_relation_size(C.oid) DESC
  LIMIT 20;
```