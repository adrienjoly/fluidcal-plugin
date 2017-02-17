# FluidCal Plug-in

(WIP) Import tasks from a trello board's checklists

This codebase forked from [Snoozer](https://github.com/adrienjoly/snoozer), which was written thanks to the following resources:
- [gRPC Basics: Node.js](http://www.grpc.io/docs/tutorials/basic/node.html)
- [Google Calendar Quickstart with Node.js](https://developers.google.com/google-apps/calendar/quickstart/nodejs)

## Prerequisites

- `node`: This requires Node 0.12.x or greater.

## Setup

<!--
Before running, don't forget to:

1. create an app and web client auth on Google's Developer Console;   
2. and set the corresponding environment variables: `GCAL_CLIENT_ID`, `GCAL_CLIENT_SECRET` and `GCAL_REDIRECT_URL`
-->

Type the following commands to start the server:

```sh
$ npm install
$ npm start
```

Instead of starting the gRPC server, you can use the HTTP/REST server by running:

```sh
$ node server-http.js
$ open http://localhost:3000
``` 

## Run tests

```sh
$ npm test        # => tests the Google Calendar API
$ npm run client  # => tests the Snoozer's gRPC API
```
