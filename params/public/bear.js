$('button').click(function(){
  var x = Math.round(Math.random() * 500);
  var y = Math.round(Math.random() * 500);
  $('div').append('<img class="bear" src="http://placebear.com/' + x  + '/' + y + '">' );
});
