
var packageName = "";
populatePackageName(); // populates what to name package
injectUploadButton(); // adds an id to upload document butotn to simulate click later
injectPackageName(); // adds the package name to the package name input field
injectCoverLetterName(); // adds id to navigate to first cover letter (this is the latest cover letter)
injectResumeStart(); // adds id to navigate to latest resume
injectTranscriptSelect(); // selects the transcript

function populatePackageName(){
    var foundID = false;

    var tags = document.querySelectorAll("h1,strong,td");
    for (var i = 0; i < tags.length; i++) {
        if (foundID == false && tags[i].innerHTML.includes("Job ID")){
            packageName = tags[i].innerHTML.split(":")[1].trim() + " ";
            foundID = true;
        }
        else if (tags[i].tagName.toLowerCase() == "strong" && tags[i].innerHTML.includes("Organization:")){
            console.log(tags[i+1]);
            packageName += tags[i+1].innerHTML.trim()
            break;
        }
    }
}
function injectUploadButton(){
    var divs = document.getElementsByTagName('a');
    var length = divs.length;

    for(var i = 0; i < length; i++){
        // console.log("hello");
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
            var name = document.getElementById("name");
            console.log(name);
            name.value = packageName;
            break;
        }
    }
}
function injectCoverLetterName(){
    var tags = document.querySelectorAll("strong,a,input");
    for(var i = 0; i < tags.length;i++){
        if (tags[i].innerHTML.includes("Cover Letter") && tags[i+1].innerHTML.includes("Clear Selection")) {
            tags[i].setAttribute('id','packageName');
            // console.log(tags[i+2]);
            if(tags[i+2].getAttribute('type') == "radio"){
                tags[i+2].checked = true;
            }
            break;
        }
    }
}
function injectResumeStart()
{
    var tags = document.querySelectorAll("strong,a,input");
    for(var i = 0; i < tags.length;i++){
        if (tags[i].innerHTML.includes("Resume") && tags[i+1].innerHTML.includes("Clear Selection")) {
            tags[i].setAttribute('id','resumeListStart');
            // console.log(tags[i+2]);
            if(tags[i+2].getAttribute('type') == "radio"){
                tags[i+2].checked = true;
            }
            break;
        }
    }
}
function injectTranscriptSelect(){
    var tags = document.querySelectorAll("strong,a,input");
    for(var i = 0; i < tags.length;i++){
        if (tags[i].innerHTML.includes("Transcript") && tags[i+1].innerHTML.includes("Clear Selection")) {
            // tags[i].setAttribute('id','transcript');
            // console.log(tags[i+2]);
            if(tags[i+2].getAttribute('type') == "radio"){
                tags[i+2].checked = true;
            }
            break;
        }
    }
}
