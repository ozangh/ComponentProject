/**
 * Created with JetBrains PhpStorm.
 * User: ozangh
 * Date: 7/25/12
 * Time: 3:16 PM
 */

goog.provide('twitter.Bootstrapper');
goog.require('twitter.TwitterWidget.Widget');

twitter.Bootstrapper = function(){
    console.log('naber');
    new twitter.TwitterWidget.Widget();
};