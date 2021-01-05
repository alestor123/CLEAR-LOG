#!/usr/bin/env node

var clearLog = require('./App'),
options = require('minimist')(process.argv.slice(2)),
cron = options.t || options.time || '*/5 * * * *';
if(options.s || options.s) clearLog(cron) , console.log('Started clear log cron input : '+cron)