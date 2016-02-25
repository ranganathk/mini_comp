var Calci = {
  handleInput : function (input) {
    if (input == "DEL") {
      this.preview = this.preview.slice(0, -1);
      $('.preview').empty();
      $('.preview').append(this.preview);
    } else if (input == "AC") {
      this.preview = "";
      $('.result').empty();
      $('.preview').empty();
    } else if (input == "=") {
      $('.result').empty();
      this.preview = this.preview.replace(/X/g, "*");
      var result = eval(this.preview);
      $('.result').append(result);
      this.preview = "";
      $('.preview').empty();
      $('.preview').append(result);
    } else {
      $('.preview').append(input);
      this.preview = $('.preview').html();
    }
  },
  operators: [".", "+", "-", "X", "/"],
  preview: ""
}

$(document).ready(function () {
  $('.key').click(function() {
    var key = $(this).html();
    Calci.handleInput(key);
  })
})




