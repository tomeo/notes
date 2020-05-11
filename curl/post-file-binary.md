# POSTing binary
When reading from a file, `-d` will strip out carriage return and newlines. Use `--data-binary` if you want curl to read and use the given file in binary exactly as given.

`-i` includes the HTTP response headers in the output.

## Command
```
curl -i -XPOST --data-binary @filename http://example.com/
``` 

### Set Content-Type 
Curl will default to `Content-Type: application/x-www-form-urlencoded`.
```
curl -i -H "Content-Type: your/contentyype" -XPOST --data-binary @filename http://example.com/
``` 


## Documentation
* https://ec.haxx.se/http/http-post#posting-binary
* https://curl.haxx.se/docs/manpage.html#-i