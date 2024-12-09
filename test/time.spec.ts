import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

const timeController = require('../src/controllers/time.controller');

describe('TimeController', () => {
  test('No timezone', () => {
    assert.doesNotThrow(() => timeController.getTime(null));
    var result = timeController.getTime(null);
    assert.match(result, /currentTime/);
    assert.doesNotMatch(result, /adjustedTime/);
  });

  test('CST timezone', () => {
    assert.doesNotThrow(() => timeController.getTime('CST'));
    var result = timeController.getTime('CST');
    assert.match(result, /currentTime/);
    assert.match(result, /adjustedTime/);
  });

  test('HST timezone', () => {
    assert.doesNotThrow(() => timeController.getTime('HST'));
    var result = timeController.getTime('HST');
    assert.match(result, /currentTime/);
    assert.match(result, /adjustedTime/);
  });

  test('Invalid timezone', () => {
    assert.throws(() => timeController.getTime('ZZT'));
  });
});

