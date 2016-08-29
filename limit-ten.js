#!/usr/bin/env node

'use strict';

const es = require('event-stream')
let counter = 0

module.exports = (es.map(function(line, cb) {
  counter++
  counter < 10 ? cb(null, line) : process.exit(1)
}))