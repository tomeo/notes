# Output full object from nodejs

Using `util.inspect`:
```
const util = require('util');
console.log(util.inspect(myObject, {showHidden: false, depth: null}));
// alternative
console.log(util.inspect(myObject, false, null, true /* enable colors */));
```

Using `JSON.stringify`:
```
console.log(JSON.stringify(myObject, null, 4));
```

Using `console.dir`:
```
console.dir(myObject, { depth: null }); // `depth: null` ensures unlimited recursion
```

## Sources
* https://nodejs.org/api/console.html#console_console_dir_obj_options
* https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object