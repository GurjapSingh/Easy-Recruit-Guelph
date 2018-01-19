var divs = document.getElementsByTagName('a');
var length = divs.length;

for(var i = 0; i < length; i++){
    console.log("hello");
    if(divs[i].innerHTML.includes("Upload Document")){
        divs[i].click();
     }
}