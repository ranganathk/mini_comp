var Calci = {
  handleInput : function (input) {
    if (input == "DEL") {
      this.handleDelete();
    } else if (input == "AC") {
      this.preview = "";
      $('.result').empty();
      $('.preview').empty();
    } else if (input == "=") {
      this.findResult();
    } else if (this.operators.indexOf(input) == -1){
      $('.preview').append(input);
      this.preview = $('.preview').html();
    } else {
      var opcheck = this.preview.slice(-1);
      if (this.operators.indexOf(opcheck) == -1 && (opcheck != "-" || opcheck == "")) {
        $('.preview').append(input);
        this.preview = $('.preview').html();
      }
    }
  },
  operators: [".", "+", "-", "X", "/"],
  preview: "",
  handleDelete : function() {
    this.preview = this.preview.slice(0, -1);
    $('.preview').empty();
    $('.preview').append(this.preview);
  },
  findResult : function () {
    $('.result').empty();
    this.preview = this.preview.replace(/X/g, "*");
    var result = eval(this.preview);
    $('.result').append(result);
    this.preview = "";
    $('.preview').empty();
    $('.preview').append(result);
  }
}

$(document).ready(function () {
  $(document).bind('keyup', '0', function() { Calci.handleInput("0"); });
  $(document).bind('keyup', '1', function() { Calci.handleInput("1"); });
  $(document).bind('keyup', '2', function() { Calci.handleInput("2"); });
  $(document).bind('keyup', '3', function() { Calci.handleInput("3"); });
  $(document).bind('keyup', '4', function() { Calci.handleInput("4"); });
  $(document).bind('keyup', '5', function() { Calci.handleInput("5"); });
  $(document).bind('keyup', '6', function() { Calci.handleInput("6"); });
  $(document).bind('keyup', '7', function() { Calci.handleInput("7"); });
  $(document).bind('keyup', '8', function() { Calci.handleInput("8"); });
  $(document).bind('keyup', '9', function() { Calci.handleInput("9"); });
  $(document).bind('keyup', '.', function() { Calci.handleInput("."); });
  $(document).bind('keyup', '+', function() { Calci.handleInput("+"); });
  $(document).bind('keyup', '-', function() { Calci.handleInput("-"); });
  $(document).bind('keyup', 'shift+8', function() { Calci.handleInput("X"); });
  $(document).bind('keyup', '/', function() { Calci.handleInput("/"); });
  $(document).bind('keyup', 'return', function() { Calci.handleInput("="); });
  $(document).bind('keyup', 'backspace', function() { Calci.handleInput("DEL"); });

  $('.key').click(function() {
    var key = $(this).html();
    Calci.handleInput(key);
  })
})




