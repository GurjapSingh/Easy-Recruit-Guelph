var applyPage = false;
var uploadDoc = document.getElementById("uploadDocument");
var createPackage = document.getElementById("createPackage");

var latestCL = document.getElementById("fillLastCL");
var latestRes = document.getElementById("fillLastRes");

chrome.tabs.executeScript(null,{code: 'document.body.innerText;'},postConfirmation);

function postConfirmation(results){
    //alert(results[0]);
    for(var i = 0; i < results.length;i++){
        if(results[i].includes("APPLY WITH AN EXISTING APPLICATION PACKAGE")){
            applyPage = true;

            injectCustomTags();

        }
    }
    if (applyPage == false) {
        var popUpContent = document.getElementById("container");
        popUpContent.innerHTML = "<p>Please go to application page to use controls</p>";

        document.getElementById("latestDocDisplay").innerHTML="";
    }
}
function injectCustomTags(){
    // alert("injectingcustomtags");
    chrome.tabs.executeScript({
        file: 'injectPage.js'
    },function(results){

        latestCL.innerHTML = results[0][0];
        latestRes.innerHTML = results[0][1]
    });

}

uploadDoc.addEventListener("click", function(){
    // alert("upload doc click");
    chrome.tabs.executeScript({
        code: 'document.getElementById("uploadDocument").click();'
    });
});

createPackage.addEventListener("click",function(){
    // alert("click package");
    chrome.tabs.executeScript({
        code:'document.querySelectorAll(\'input[value="Create Package"]\')[0].click();'
    });
});




