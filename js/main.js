//javaaaaascccccrrrriiiiiipt is awesome.


$(document).ready(function(){
  var gameRepo = "https://api.github.com/repos/ericlathrop/scurry/commits";
  var siteRepo = "https://api.github.com/repos/AlexBezuska/scurrygame.com/commits";
var message = "";

   $.ajax({
        url: gameRepo,
        dataType: 'jsonp',
        success: function(json) {
          
            message = json.data[0].commit.message.replace(".", "");
        
            console.log(json);
            console.log(message);
            $('.commitMessage').text("Now With " + message + "!");
        }
    });
    
});

