# Remove duplicate lines from file

## If ordering is not important

```
sort -u not_unique > unique
```

## If ordering is important
This loads entire file into memory and is therefore not suitable for large files.

```
awk ' !x[$0]++' not_unique > unique
```

## Documentation
* http://man7.org/linux/man-pages/man1/sort.1.html
* http://www.unixcl.com/2008/03/remove-duplicates-without-sorting-file.html