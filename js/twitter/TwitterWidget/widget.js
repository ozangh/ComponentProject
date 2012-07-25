/**
 * Created with JetBrains PhpStorm.
 * User: ozangh
 * Date: 7/25/12
 * Time: 3:37 PM
 */

goog.provide('twitter.TwitterWidget.Widget');
goog.require('tart.components.Widget');
goog.require('twitter.TwitterWidget.Controller');


/**
 *
 *@constructor
 *@extends {tart.components.Widget}
 *
 */

twitter.TwitterWidget.Widget = function(){
    goog.base(this);
    console.log('widget oldu');
    this.controller = new twitter.TwitterWidget.Controller();
};

goog.inherits(twitter.TwitterWidget.Widget, tart.components.Widget);