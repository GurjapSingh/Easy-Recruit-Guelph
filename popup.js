// chrome.tabs.executeScript(null, {
//     code: 'var string1 = "Hello, World !"; string1'
// }, function(resultArr) {
//     processString1(resultArr[0]);
// });
//
// function processString1(str1) {
//     alert('String1 = "' + str1 + '"');
// }
var applyPage = false;
var uploadDoc;
chrome.tabs.executeScript(null,{code: 'document.body.innerText;'},function (results){
    // alert(results.length);
    //alert(results[0]);
    for(var i = 0; i < results.length;i++){
        if(results[i].includes("OPTION 1: Apply with an application")){
            applyPage = true;
            uploadDoc = document.getElementById("uploadDocument");

        }
    }
    if (applyPage == false) {
        var popUpContent = document.getElementById("container");
        popUpContent.innerHTML = "<h2>Please go to application page to use controls</h2>";
    }

});

uploadDoc.addEventListener("click", function(){

    chrome.tabs.executeScript({
        file: 'clicker.js'
    });
});
break;
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



