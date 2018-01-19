
var applyPage = false;
var uploadDoc;
var hoverPackege;

chrome.tabs.executeScript(null,{code: 'document.body.innerText;'},postConfirmation);

function postConfirmation(results){
    //alert(results[0]);
    for(var i = 0; i < results.length;i++){
        if(results[i].includes("OPTION 1: Apply with an application")){
            applyPage = true;
            uploadDoc = document.getElementById("uploadDocument");
            hoverPackege = document.getElementById("hoverPackege");
            // injectCustomTags();

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
        // file: 'clicker.js'
    });
}

uploadDoc.addEventListener("click", function(){
    alert("upload doc click");
    // chrome.tabs.executeScript({
    //     file: 'clicker.js'
    // });
});
hoverPackege.addEventListener("click",function(){
    alert("click package");
    // chrome.tabs.executeScript({
    //     code:'document.getElementById("packageName").scrollIntoView(true);'
    // });
});
alert("end of file");
// chrome.tabs.executeScript({
//     code: 'console.log("hello")'
// });
// var allH2s = document.getElementsByTagName('h2');
// var length = allH2s.length;
// var applyPage = false;
// alert(length);
// for(var i = 0; i < length; i++){
//     console.log("hello");
//     if(allH2s[i].innerHTML.includes("OPTION 1: Apply with an application")){
//         alert("found");
//         applyPage = true;
//     }
// }



