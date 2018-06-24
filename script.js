$(document).ready(function() {
    
    var click = 1;
    var marginLeft = 0;
    var ContentWidth = $(".brand").length;

    $(".slide_right").click(function () { 
      
      if (click <= ContentWidth ){
        
      marginLeft = marginLeft - 180;

      $(".brans-slide").css({ "margin-left": marginLeft + "px" })
      }
      click++;
    });

    $(".slide_left").click(function () {

      if (click >= 1) {
        click--;
       
        if(click == 0)
          {
            click = 2;
          }

        if (marginLeft < 0) {
          if (click == 2) {
            $(".brans-slide").css({ "margin-left": "30px" }, 1000)
          }

          else {
            if (click >= 1)
            {
              marginLeft = marginLeft + 180;
              $(".brans-slide").css({ "margin-left": marginLeft + "px" })
            }

          }

        }

      }

    });
});