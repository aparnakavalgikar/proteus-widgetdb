
RESTful API for Widget DB
=========

## Synopsis

A RESTful web service that exposes get, put, post over an HTTP interface for in memory data store


## Installation
```shell
    git clone https://github.com/aparnakavalgikar/proteus-widgetdb.git
    npm install
```

## API Reference

| Type | Request | Body | Response | Description
| --- | --- | --- | --- | --- |
| GET |  http://\<hostname\>:\<port\>/item/:id | --- | Success: {"value": "xyz"}, Error: Not Found | Get an item value for given id |
| PUT |  http://\<hostname\>:\<port\>/item/:id | Success: {"value": "abc"}, Error: Not Found  | { "id" : "\<id\>" } | Update an item value for given id |
| POST |  http://\<hostname\>:\<port\>/item | Success: {"value": "xyz"}, Error: Not Found  | { "id" : "\<generated id\>" } | Post a new item for given id |


## Version
* 1.0.0 Initial release