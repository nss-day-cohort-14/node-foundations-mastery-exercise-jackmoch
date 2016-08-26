#!/usr/bin/env node

'use strict';

const {
  Transform
} = require('stream')

module.exports = Transform({
  transform(buff, enc, cb) {
    cb(null, `${buff.toString().toUpperCase()}\n`)
  }

  // transform: function(buff, enc, cb) {
  //   cb(null, `${buff.toString().toUpperCase()}\n`)
  // }

})