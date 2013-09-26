$(function () {

  var list  = [{name: "Moscow", count: 12, content: "<p>description</p>"}, {name: "Amsterdam", count: 25, content: "html"}, {name: "Lisbon", count: 15, content: "html"}, {name: "Berlin", count: 19, content: "html"}, {name: "Madrid", count: 25, content: "html"}];
  var html  = "";
  var cols  = 3;

  // compare function for sort
  function sorting(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  // sort the list
  list.sort(sorting);

  // split the list
  function splitArr(arr, cols) {
    var length = arr.length;
    var output = [];
    var i = 0;

    while (i < length) {
      var size = Math.ceil((length - i) / cols--);
      output.push(arr.slice(i, i + size));
      i += size;
    }

    return output;
  }

  // call split
  list = splitArr(list, cols);

  // loop to fill html with list content
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list[i].length; j++) {
      // check first item
      if (j === 0) {
        html += "<ul>";
      }

      // add item
      html += "<li><a href='#' data-index='" + i + "-" + j + "'>" + list[i][j].name + "</a> (" + list[i][j].count + ")</li>";

      // check last item
      if (j === list[i].length - 1) {
        html += "</ul>";
      }
    }
  }

  // append the list to html
  $(".list-wrapper").html(html);

  // click function for content
  $("a").click(function (e) {
    var _this     = $(this);
    var _index    = _this.data("index");
        _index    = _index.split("-");
    var _content  = list[_index[0]][_index[1]].content;

    // append html content of the item selected
    $(".content").html(_content);

    e.preventDefault();
  });

});