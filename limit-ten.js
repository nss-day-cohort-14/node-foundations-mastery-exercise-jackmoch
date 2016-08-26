#!/usr/bin/env node

'use strict';

const es = require('event-stream')
let array = []

module.exports = (es.map(function(line, cb) {
  if (array.length < 10) {
    array.push(line)
    cb(null, line)
  }
  cb()
}))