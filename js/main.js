//javaaaaascccccrrrriiiiiipt is awesome.


$(document).ready(function(){
  var githubURL = "https://api.github.com/repos/ericlathrop/scurry/commits";
var message = "";

    $.ajax({
        url: githubURL,
        dataType: 'jsonp',
        success: function(json) {
          
            message = json.data[0].commit.message.replace(".", "");
        
            console.log(json);
            console.log(message);
            $('.commitMessage').text("Now With " + message + "!");
        }
    });
    
});

