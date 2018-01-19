
var applyPage = false;
uploadDoc = document.getElementById("uploadDocument");
hoverPackage = document.getElementById("hoverPackage");
hoverResume = document.getElementById("hoverResume");
createPackage = document.getElementById("createPackage");

chrome.tabs.executeScript(null,{code: 'document.body.innerText;'},postConfirmation);

function postConfirmation(results){
    //alert(results[0]);
    for(var i = 0; i < results.length;i++){
        if(results[i].includes("OPTION 1: Apply with an application")){
            applyPage = true;

            injectCustomTags();

        }
    }
    if (applyPage == false) {
        var popUpContent = document.getElementById("container");
        popUpContent.innerHTML = "<h2>Please go to application page to use controls</h2>";
    }
}
function injectCustomTags(){
    // alert("injectingcustomtags");
    chrome.tabs.executeScript({
        file: 'clicker.js'
    });
}

uploadDoc.addEventListener("click", function(){
    // alert("upload doc click");
    chrome.tabs.executeScript({
        file: 'clicker.js'
    });
});
hoverPackage.addEventListener("click",function(){
    // alert("click package");
    chrome.tabs.executeScript({
        code:'document.getElementById("packageName").scrollIntoView(true);'
    });
});
hoverResume.addEventListener("click",function(){
    // alert("click package");
    chrome.tabs.executeScript({
        code:'document.getElementById("resumeListStart").scrollIntoView(true);'
    });
});
createPackage.addEventListener("click",function(){
    // alert("click package");
    chrome.tabs.executeScript({
        code:'document.querySelectorAll(\'input[value="Create Package"]\')[0].click();'
    });
});




