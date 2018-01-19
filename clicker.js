injectUploadButton();
injectPackageName();

function injectUploadButton(){
    var divs = document.getElementsByTagName('a');
    var length = divs.length;

    for(var i = 0; i < length; i++){
        console.log("hello");
        if(divs[i].innerHTML.includes("Upload Document")){
            divs[i].setAttribute('id','uploadDocument');
            break;
            //click();
         }
    }
}
function injectPackageName(){
    var h2s = document.getElementsByTagName('h2');
    for(var i = 0; i < h2s.length;i++){
        if(h2s[i].innerHTML.includes("STEP 2: NAME YOUR APPLICATION PACKAGE")){
            h2s[i].setAttribute('id','packageName');
            break;
        }
    }
}
