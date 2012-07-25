/**
 * Created with JetBrains PhpStorm.
 * User: ozangh
 * Date: 7/25/12
 * Time: 3:59 PM
 */

goog.provide('twitter.TwitterWidget.Controller');
goog.require('tart.components.Controller');

/**
 *Twitter Widget's Controller Class.
 *@constructor
 *@extends {tart.components.Controller}
 *
 **/

twitter.TwitterWidget.Controller = function(){
    goog.base(this);
    console.log("controller da oldu panpa!");
};

goog.inherits(twitter.TwitterWidget.Controller, tart.components.Controller);