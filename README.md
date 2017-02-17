# FluidCal Plug-in

(WIP) Import tasks from a trello board's checklists

This codebase forked from [Snoozer](https://github.com/adrienjoly/snoozer), which was written thanks to the following resources:
- [gRPC Basics: Node.js](http://www.grpc.io/docs/tutorials/basic/node.html)
- [Google Calendar Quickstart with Node.js](https://developers.google.com/google-apps/calendar/quickstart/nodejs)

## Prerequisites

- `node`: This requires Node 0.12.x or greater.

## Setup

Before running, don't forget to:

1. generate an *app key* and *token* from [Trello](https://trello.com/app-key),
2. and set the corresponding environment variables: `TRELLO_KEY` and `TRELLO_TOKEN`.

<!--
1. create an app and web client auth on Google's Developer Console;   
2. and set the corresponding environment variables: `GCAL_CLIENT_ID`, `GCAL_CLIENT_SECRET` and `GCAL_REDIRECT_URL`
-->

Type the following commands to start the server (HTTP+GRPC):

```sh
$ npm install
$ npm start
$ open http://localhost:3000
``` 

## Run tests

```sh
$ npm test        # => tests the Google Calendar API
$ npm run client  # => tests the plugin's gRPC API
```
