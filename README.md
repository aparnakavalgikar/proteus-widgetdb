### Synopsis

A RESTful web service that exposes get, put, post over an HTTP interface for in memory data store

### Installation

 git clone https://github.com/aparnakavalgikar/proteus-widgetdb.git

 npm install

### API Reference

GET:    Request: /item/:id
PUT:    Request: /item/:id      Body: { "value" : "abc" }
POST:   Request: /item          Body: { "value" : "xyz" }


* 1.0.0 Initial release
