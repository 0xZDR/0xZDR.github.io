$( "#demo" ).hide();

$( "#toggle_demo" ).click(
  function() {
    if ($( "#demo" ).is(":hidden")) {
      $("#demo").show();
    }
    else {
      $("#demo").hide();
    }
  }
);
