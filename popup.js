$(function () {
  $("#btnsave").click(function () {
    var name = $("#txt_name").val();
    window.open("https://" + name, "_blank");
  });
});
