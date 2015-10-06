define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert) {
    registerSuite({
        name: 'hello',

        greet: function () {
            assert.strictEqual(1,1);
            return this.remote.get(require.toUrl('http://www.google.com')).waitForCondition('ready', 5000);
        }
    });
});
