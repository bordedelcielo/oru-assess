function adblockBlocking_True() {
    console.log('True');
    document.getElementById('fallback').innerHTML = 
    "Please disable your adblocker to show the virtual tour here. Alternatively, please click 'Launch Virtual Tour' below. Search tours by 'Oral Roberts University to find our tour.'";
    var thumbContainer = document.getElementById("fallback2");
    var thumbnail = document.createElement("img");
    thumbnail.onload=function() {
      thumbContainer.appendChild(thumbnail);
    }
    thumbnail.src = "https://i.pinimg.com/736x/94/fe/11/94fe11f0b2206afb6eb44275857d61e1.jpg";
    thumbnail.href = "https://www.youvisit.com/#/vte/";
    console.log(thumbnail.href)

    var x = document.getElementById("a");
    x.style.display = "none";

    var a = document.createElement('a');
    var linkText = document.createTextNode("Launch Virtual Tour");
    a.appendChild(linkText);
    a.title = "Virtual Tour";
    a.href = "https://www.youvisit.com/#/vte/?data-platform=v&amp;data-link-type=immersive&amp;data-inst=62666&amp;data-image-width=100%&amp;data-image-height=100%&amp;";
    document.getElementById('fallback3').appendChild(a);
    console.log(a);
  };

function adblockBlocking_False() {
    console.log('False');
    return False
};

window.addEventListener("load", function(){
    try{
        var iframe = document.createElement("iframe");
        iframe.height = "1px";
        iframe.width = "1px";
        iframe.id = "ads-test-iframe";
        iframe.src = "http://qnimate.com/ads.html";
        
        document.body.appendChild(iframe);
        
        setTimeout(function(){
            try{
                var iframe = document.getElementById("ads-test-iframe");
                if(iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0){
                    if(adblockBlocking_True != undefined){
                        adblockBlocking_True();
                    }
                }
                else{
                    if(adblockBlocking_False != undefined){
                        adblockBlocking_False();
                    }
                }
                document.body.removeChild(iframe);
            }
            catch(e){
	            console.log(e);
            }
        }, 100);
    }
    catch(e){
	    console.log(e);
    }
}, false);