$('.search-input').focus(function(){
    $(this).parent().addClass('focus');
  }).blur(function(){
    $(this).parent().removeClass('focus');
  })

  document.getElementById("submit-btn").addEventListener("click", function() {
    window.open("welcome.html");
  });