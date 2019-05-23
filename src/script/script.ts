 var items:any = [];
$.getJSON("script/ALL.json", function (data) {
  items = data.singers;
    var rightList:any = _.template("<li><%-title %></li>"),
        leftList:any = _.template("<li><%-name %></li>"),
        right:any = document.querySelector('.wrapper-right-list');
  right.innerHTML = rightList(items[0]);
    var left:any = document.querySelector('.wrapper-left-list');
  left.innerHTML = leftList(items[0]);
});
var a : string = 'hello World',
    x :number = 123,
    xx :any = 'dct xnj eujlyj';



