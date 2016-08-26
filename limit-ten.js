#!/usr/bin/env node

'use strict';

const es = require('event-stream')
let counter = 0

module.exports = (es.map(function(line, cb) {
  if (counter < 10) {
    counter++
    cb(null, line)
  }
  cb()
}))