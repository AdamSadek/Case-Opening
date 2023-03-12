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
  
      // Add class to trigger sliding animation
      itemsList.addClass('active');
  
      // Set timeout to remove class after a certain duration
      setTimeout(function() {
        itemsList.removeClass('active');
        active = false;
  
        // Set timeout to select a random item after a certain duration
        setTimeout(function() {
          var items = itemsList.children();
          var winnerIndex = Math.floor(Math.random() * items.length);
          items.removeClass('winner');
          items.eq(winnerIndex).addClass('winner');
        }, 7000); // Select a random item after 5 seconds
      }, 5000); // Stop sliding after 5 seconds
    }
  
  
  
    // Click event for the Open Case button
    openCaseBtn.on('click', function() {
      shuffle();
      startAnimation();
    });
  
  });
  