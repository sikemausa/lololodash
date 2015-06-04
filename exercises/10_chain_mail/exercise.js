'use strict';

var verify = require("../../lib/verify.js");
var _ = require("lodash");

var run = {
    json: [
        'Test', 'Hello', 'World', 'Node', 'JavaScript'
    ],
    expect: [
        'HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED'
    ]
};

var testing = {
    'Check with Elements of "run"-Enviroment': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking with empty Object': {
        input: [],
        shouldbe: []
    }
};

module.exports = verify(testing, run);