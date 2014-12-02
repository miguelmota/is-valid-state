var test = require('tape');
var isValidState = require('../is-valid-state');

test('is valid state', function (t) {
  t.plan(5);

  t.equal(isValidState('CA'), true);
  t.equal(isValidState('ca'), false);
  t.equal(isValidState('ca', {caseInsensitive: true}), true);
  t.equal(isValidState('FZ'), false);
  t.equal(isValidState('AZ'), true);
});
