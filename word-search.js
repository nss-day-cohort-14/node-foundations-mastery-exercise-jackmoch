#!/usr/bin/env node

'use strict';

const {
  createReadStream
} = require('fs')
const es = require('event-stream')
const {
  Transform
} = require('stream')
const limit = require('./limit-ten')
let [, , args] = process.argv;
const toUpperCase = require('./toUpperCase')
const readStream = createReadStream('/usr/share/dict/words')
let newData

readStream
  .pipe(es.split('\n'))
  .pipe(es.map(function(line, cb) {
    if (line.toUpperCase().startsWith(args.toUpperCase())) {
      let match = line + '\n'
      cb(null, match)
    }
    cb()
  }))
  .pipe(process.stdout)