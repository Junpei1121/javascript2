$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({
      'background-color': 'blue',
      'height' : '300px',
      'width' : '300px'
    });
  });
  $('.box1').mouseout(function(){
    $('.box1').css({
      'background-color': 'red',
      'height' : '200px',
      'width' : '200px'
    });
  });
});