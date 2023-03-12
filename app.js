$(document).ready(function() {

    // Define variables
    var itemsList = $('.items-list');
    var openCaseBtn = $('#open-case-btn');
    var active = false;
  
    // Function to shuffle the items in the list
    function shuffle() {
      for (var i = itemsList.children().length; i >= 0; i--) {
        itemsList.append(itemsList.children().eq(Math.random() * i | 0));
      }
    }
  
    // Function to start the animation
    function startAnimation() {
      if (active) {
        return;
      }
      active = true;
      itemsList.addClass('active');
      setTimeout(function() {
        itemsList.removeClass('active');
        active = false;
      }, 5000);
    }
  
    // Click event for the Open Case button
    openCaseBtn.on('click', function() {
      shuffle();
      startAnimation();
    });
  
  });
  