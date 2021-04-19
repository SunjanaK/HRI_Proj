$('.search-input').focus(function(){
    $(this).parent().addClass('focus');
  }).blur(function(){
    $(this).parent().removeClass('focus');
  })

  document.getElementById("form").addEventListener("submit", function() {
    alert("test");
    let code = document.getElementById("code").value;
    
    switch(code) {
      case "x":
        window.open("welcome.html");
        break;
      case "y":
        window.open("main.html");
        break;
    }
  });

  