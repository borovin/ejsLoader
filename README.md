# ejsLoader
Systemjs plugin for load and compile lodash templates

# Install

```
bower install borovin/ejsLoader
```

# Use 

```
System.config({
    meta: {
        '*.ejs': {
            loader: 'bower_components/ejsLoader/index.js'
        }
    }
})
```
