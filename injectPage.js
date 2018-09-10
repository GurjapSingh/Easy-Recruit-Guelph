
var packageName = "";
openCustomizeApplicationPackage()
populatePackageName(); // populates what to name package
injectUploadButton(); // adds an id to upload document butotn to simulate click later
injectPackageName(); // adds the package name to the package name input field
injectCoverLetterName(); // adds id to navigate to first cover letter (this is the latest cover letter)
injectResumeStart(); // adds id to navigate to latest resume
injectTranscriptSelect(); // selects the transcript
// 
var latestCoverLetter;
var latestResume;

function openCustomizeApplicationPackage(){
    createPackageButton = document.querySelectorAll('input[value="customPkg"]')[0]
    if (createPackageButton.checked == false){
        createPackageButton.click();
    }
}
// populates what to name package
function populatePackageName(){
    var foundID = false;

    var tags = document.querySelectorAll("div.span6");
    for (var i = 0; i < tags.length; i++) {
        if (foundID == false && tags[i].innerHTML.includes("Job ID")){
            packageName = tags[i].innerHTML.split(":")[1].split(" ")[0].trim()
            // console.log("next: "+tags[i].children[1].innerHTML)
            packageName += " " + tags[i].children[1].innerHTML.split("-")[0].trim()
            // console.log(packageName)
            foundID = true;
        }
        
    }
}

// adds an id to upload document butotn to simulate click later
function injectUploadButton(){
    var divs = document.getElementsByTagName('a');
    var length = divs.length;

    for(var i = 0; i < length; i++){
        // console.log("hello");
        if(divs[i].innerHTML.includes("upload a new document")){
            console.log("injected")
            divs[i].setAttribute('id','uploadDocument');
            break;
            //click();
         }
    }
}

// adds the package name to the package name input field
function injectPackageName(){
    var packageField = document.getElementById("packageName")
    if (packageField != null) {
        packageField.value = packageName
    }
    // var h2s = document.getElementsByTagName('h2');
    // for(var i = 0; i < h2s.length;i++){
    //     if(h2s[i].innerHTML.includes("STEP 2: NAME YOUR APPLICATION PACKAGE")){
    //         h2s[i].setAttribute('id','packageName');
    //         var name = document.getElementById("name");
    //         console.log(name);
    //         name.value = packageName;
    //         break;
    //     }
    // }
}
function injectCoverLetterName(){
    var tags = document.getElementById("requiredInPackage1");
    if (tags != null){
        tags.selectedIndex = 1

        coverLetterInfo = tags.options[1].text
        splitCoverLetterInfo = coverLetterInfo.split("(Date created:")
        latestCoverLetter = splitCoverLetterInfo[0].trim() + ", "+ splitCoverLetterInfo[1].replace(")","")
    }
    // var tags = document.querySelectorAll("strong,a,input");
    // for(var i = 0; i < tags.length;i++){
    //     if (tags[i].innerHTML.includes("Cover Letter") && tags[i+1].innerHTML.includes("Clear Selection")) {
    //         tags[i].setAttribute('id','packageName');
    //         // console.log(tags[i+2]);
    //         if(tags[i+2].getAttribute('type') == "radio"){
    //             tags[i+2].checked = true;
    //         }
    //         break;
    //     }
    // }
}
function injectResumeStart()
{
    var tags = document.getElementById("requiredInPackage2");
    if (tags != null){
        tags.selectedIndex = 1
        latestResume = tags.options[1].text
        resumeInfo = tags.options[1].text

        splitResumeInfo = resumeInfo.split("(Date created:")
        latestResume = splitResumeInfo[0].trim() + ", "+ splitResumeInfo[1].replace(")","")
    }
    // var tags = document.querySelectorAll("strong,a,input");
    // for(var i = 0; i < tags.length;i++){
    //     if (tags[i].innerHTML.includes("Resume") && tags[i+1].innerHTML.includes("Clear Selection")) {
    //         tags[i].setAttribute('id','resumeListStart');
    //         // console.log(tags[i+2]);
    //         if(tags[i+2].getAttribute('type') == "radio"){
    //             tags[i+2].checked = true;
    //         }
    //         break;
    //     }
    // }
}
function injectTranscriptSelect(){
    var tags = document.getElementById("requiredInPackage3");
    if (tags != null){
        tags.selectedIndex = 1
    }
}

var package = [latestCoverLetter,latestResume];
package;