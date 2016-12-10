$('button').click(function(e){
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "login",
    contentType: "application/json",
    data: JSON.stringify({
      username: $("#username").val(),
      password: $("#password").val()
    }),
    success: function(data){
      console.log('data', data)
    }
  })
});
