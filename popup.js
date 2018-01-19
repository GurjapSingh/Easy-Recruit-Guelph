var applyPage = false;
var uploadDoc = document.getElementById("uploadDocument");
var hoverPackage = document.getElementById("hoverPackage");
var hoverResume = document.getElementById("hoverResume");
var createPackage = document.getElementById("createPackage");

var latestCL = document.getElementById("fillLastCL");
var latestRes = document.getElementById("fillLastRes");

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
    },function(results){
        // alert(results[0][0]);
        // latestCL.innerHTML = results[0][0];
        // latestRes.innerHTML = results[0][1];
        latestCL.innerHTML = results[0][0];
        latestRes.innerHTML = results[0][1]
    });

}

uploadDoc.addEventListener("click", function(){
    // alert("upload doc click");
    chrome.tabs.executeScript({
        code: 'document.getElementById("uploadDocument").scrollIntoView(true);'
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




