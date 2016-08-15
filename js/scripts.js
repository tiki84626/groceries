$(document).ready(function() {
  $("form").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var itemsArray = [];
    var itemsArrayCap = [];
    var count = 1;

    items.forEach(function(item) {
      itemsArray.push($("input#" + item).val());
    });

    itemsArray.map(function() {
      return itemsArray.sort();
    });

    itemsArray.forEach(function(itemArray) {
      itemsArrayCap.push(itemArray.toUpperCase());
    });

    itemsArrayCap.forEach(function(itemArrayCap) {
      $("#groc" + count).text(itemArrayCap);
      count += 1;
    });

    $(".groc-form").hide();
    $(".grocery-list").show();

    event.preventDefault();


  });
});
