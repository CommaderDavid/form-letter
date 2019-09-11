$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var mainNameInput = $("input#mainName").val();

    $(".mainName").text(mainNameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
