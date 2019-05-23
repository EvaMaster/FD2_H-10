"use strict";

var items = [];
$.getJSON("script/ALL.json", function (data) {
  items = data.singers;

  var rightList = _.template("<li><%-title %></li>"),
      leftList = _.template("<li><%-name %></li>"),
      right = document.querySelector('.wrapper-right-list');

  right.innerHTML = rightList(items[0]);
  var left = document.querySelector('.wrapper-left-list');
  left.innerHTML = leftList(items[0]);
});
var a = 'hello World',
    x = 123,
    xx = 'dct xnj eujlyj';