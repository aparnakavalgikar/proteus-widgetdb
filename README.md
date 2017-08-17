Synopsis

A RESTful web service that exposes get, put, post over an HTTP interface for in memory data store

Motivation

Installation

 git clone https://github.com/aparnakavalgikar/proteus-widgetdb.git

 npm install

API Reference

GET:    Request: /item/:id
PUT:    Request: /item/:id      Body: { "value" : "abc" }
POST:   Request: /item          Body: { "value" : "xyz" }

License
* 1.0.0 Initial release
