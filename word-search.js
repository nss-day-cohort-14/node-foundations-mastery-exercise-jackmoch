#!/usr/bin/env node

'use strict';

const {
  createReadStream
} = require('fs')
const es = require('event-stream')
const limit = require('./limit-ten')
let [, , args] = process.argv;
const readStream = process.stdin.isTTY ? createReadStream('/usr/share/dict/words') : process.stdin

readStream
  .pipe(es.split('\n'))
  .pipe(es.map(function(line, cb) {
    if (line.toUpperCase().startsWith(args.toUpperCase())) {
      let match = line + '\n'
      cb(null, match)
    }
    cb()
  }))
  .pipe(limit)
  .pipe(process.stdout)

if (!args) {
  process.stdout.write('Usage: program req1\n') + process.exit(1)
}