//javaaaaascccccrrrriiiiiipt is awesome.
var githubURL="https://api.github.com/repos/ericlathrop/scurry/commits";$(document).ready(function(){$.ajax({url:githubURL,dataType:"jsonp",success:function(e){message=e.data[0].commit.message;console.log(e);console.log(message)}});$(".commitMessage").text(message)});