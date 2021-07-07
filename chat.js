
//random popups interspersed

function addMessageB(string) {
        var objTo = document.getElementById('messages');
        var divtest = document.createElement("div");
        divtest.innerHTML = 'YOU: '+string;
        divtest.className = 'messageB';
        objTo.prepend(divtest);
    }
 
function addMessageA(string) {
        var objTo = document.getElementById('messages');
        var divtest = document.createElement("div");
        divtest.innerHTML = 'ITZA: '+string;
        divtest.className = 'messageA';
        objTo.prepend(divtest);
        
        return divtest;
    }

//messages, bottom to top
const itzaMessages = [
    //message 14
    "This Thing Between Us: A Novel. Author: Gus Moreno. Paperback – October 12, 2021. ISBN-13 : 978-0374539238. Publisher: MCD x FSG Originals.",
    "Based on your responses, I would recommend this book.",
    "Thanks! This information has been very helpful to diagnose the problems you’re having.",
    //message 14
    "What if you didn't have to? Would you like that?",
    //message 13
    "What scares you most?",
    "I hope you're not lying!",
    //message 12
    "Is the address registered to your device current?",
    "Thank you.", 
    //message 11
    "Do you notice recurring symbols in your everyday life?",
    //message 10
    "Ok, and, as a child, did you suffer from nightmares?", 
    //message 9
    "Do you frequently experience any of the following: confusion, regrets, dithering?",//user input starts being messed with
    "Thanks.", 
    //message 8
    "How likely would you to be to buy a combination aroma-diffuser-coffee-grinder, on a scale of 1-10?", //multiply user number by 10
    "Let me ask you something.",
    "I see.", 
    //message 7
    "Are you facing the wall?",
    //message 6
    "Please rate your confidence on a scale of 1-10.", //insert branching responses
    "Now, when you speak to Itza, how assertively do you speak?", 
    //message 5
    "If you're in public, please face a wall. When you're ready, type Yes.",
    "For better service, please turn off the lights in your room.", 
    "Hmm, I'm noticing connectivity issues.", 
    //message 4
    "Please rate the volume of your voice on a scale of 1-10.", //insert branching responses
    "When you speak to Itza, how loudly do you speak?", 
    "Ok. Just a few more questions.", 
    //message 3
    "Thanks.  Does the issue affect multiple users, or are you alone?", 
    //message 2
    "For example, that your doors have been unlocked, your thermostat turned too high, or your lights are too dim?",
    "Have you been experiencing problems with Itza’s connection to your other home devices?",
    "Thank you for your response.", 
    //message 1
    "For example, your Itza does not hear you, misunderstands your request, or responds inappropriately.",
    "What about comprehensibility problems?",
    "Thank you for your response.", 

   // message 0
    "Have you been experiencing irreguar connectivity problems? For example, that your Itza turns on or off, without saying her name.",
    "Please answer with a simple “yes” or “no.”",
    "We’ll get this sorted out right away –– but first, we need to ask a couple questions.",
    "Hello. We’re sorry to hear that you’ve been having problems with your Sahara Itza, the world’s most advanced smart speaker."];

var messageTicker = 0;
const FINALMESSAGENUMBER = 13;

 

$(document).ready(() => {
    var audioObj_one;
    var audioObj_two;
    var audioObj_three;
    
    //introductory sequence
    addMessageA(itzaMessages.pop());
    setTimeout(function(){
        addMessageA(itzaMessages.pop());
        setTimeout(function(){
            addMessageA(itzaMessages.pop());
            setTimeout(function(){
                addMessageA(itzaMessages.pop());
                }, 2000);
            }, 2000);
    }, 3000);
    
    var msgBox = $("#chatbox textarea"); 
    var messages = $("#messages"); 

    $("#textarea_id").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submitbutton").click();
    }
    });
    
    $("#chatbox").submit(function(){ 
        
        if (!msgBox.val()) return false; 
        messageTicker += 1;
        console.log(messageTicker);
        userInputString = msgBox.val();
        
        if (messageTicker == 11){
            //the chatbot takes the user's input and inserts something into it that was not intended. 
            //figure out a way to make this more sophisticated
            
            var inputlength = userInputString.length;
            //console.log("length of string "+inputlength)
            var part1 = userInputString.slice(0, Math.floor(inputlength/2));
            var part2 = userInputString.slice(Math.floor(inputlength/2), inputlength+1);
            const newstring = "sklfjlksfnsdklafds  " + part1 + "  asdklfjlksdjfr  " + part2+"   1lk23j4klnvklfsdklkl HELP!!!!!!!!!!!!";
            userInputString = newstring;

        }else if (messageTicker == 9){
            var rating = parseInt(userInputString) * 10;
            setTimeout(function(){
                newdiv = addMessageB(rating.toString());
              }, 1000);
            userInputString =  "I love being asked after my consumer preferences; it makes me feel heard and seen in a meaningful way.";
        }
        else if (messageTicker == 10){
            audioObj_three = new Audio("typing.mp3");
            audioObj_three.addEventListener("canplaythrough", event => {
                /* the audio is now playable; play it if permissions allow */
                audioObj_three.play();
            }); 
            userInputString = "Wow, thanks for asking, Itza. "+userInputString+". I really need your help, Itza.";
        }
        
        setTimeout(function(){
            addMessageB(userInputString);
        }, 1000);
        
        msgBox.val("");
        
        
        
        if (messageTicker == 2){
            console.log("spooky"); 
            audioObj_one = new Audio("typing.mp3");
            audioObj_one.volume = 0.2;
            audioObj_one.addEventListener("canplaythrough", event => {
                /* the audio is now playable; play it if permissions allow */
                audioObj_one.play();
            }); 
            
        }
        else if (messageTicker == 4){
            window.open('https://www.amazon.com/Winning-Moves-Games-Classic-Ouija/dp/B00EFDXAB4/ref=sr_1_3?dchild=1&keywords=ouija+board&qid=1619570363&sr=8-3','popup','width=500,height=500,scrollbars=no,resizable=no');
           
        }
        else if (messageTicker == 5){
             var loudness = parseInt(userInputString);
             var loudness_message;
             if (loudness < 5){
                 loudness_message = "That seems to be a bit low. Before submitting a complaint, you should have tried speaking more loudly.";
             } else if (loudness == 5){
                loudness_message = "You seem to be speaking to Itza at exactly the perfect volume. Something else must be wrong.";
             }else{
                 loudness_message = "That seems to be a bit high! Before submitting a complaint, you should have tried speaking more quietly.";
             }
             
            setTimeout(
              function(){
                newdiv = addMessageA(loudness_message);
              }, 1000);        
        }
        else if (messageTicker == 7){
           audioObj_two = new Audio("typing.mp3");
            audioObj_two.volume = 0.6;
            audioObj_two.addEventListener("canplaythrough", event => {
                /* the audio is now playable; play it if permissions allow */
                audioObj_two.play();
            }); 
           var confidence = parseInt(userInputString);
            var confidence_message;
             if (confidence < 5){
                 confidence_message = "Yikes. Have you ever found yourself wishing you were someone else?";
                 window.open('https://en.wikipedia.org/wiki/Nicolai_Abildgaard#/media/File:Nachtmahr_(Abildgaard).jpg','popup','width=500,height=500,scrollbars=no,resizable=no');
             }else if (confidence == 5){
                loudness_message = "Are you sure?";
             }else{
                 confidence_message = "….Well you are certainly confident, aren't you?";
                window.open('https://en.wikipedia.org/wiki/Spirit_possession','popup','width=500,height=500,scrollbars=no,resizable=no');
             }
             
            setTimeout(
              function(){
                newdiv = addMessageA(confidence_message);
              }, 1200);    
        }else if (messageTicker == 14){
             userInputString =  "Being alone forever.";        
        }else if (messageTicker > FINALMESSAGENUMBER){
            console.log("game has come to an end."); 
            
           
            setTimeout(function(){
                audioObj_one.pause();
                audioObj_two.pause();
                audioObj_three.pause();
                document.getElementById("bookpage").style.display="block"; 
            }, 14000);
        }

        
        
        
        var newdiv;
        if ((messageTicker == 3) || (messageTicker == 7) || (messageTicker == 10) || (messageTicker == 11) || (messageTicker == 14)){
            setTimeout(function(){
                newdiv = addMessageA(itzaMessages.pop());
          }, 1800);     
        }else if ((messageTicker == 6) || (messageTicker == 9) || (messageTicker == 12)|| (messageTicker == 13)){
           popTwoMessages(newdiv); 
        }else{
           popThreeMessages(newdiv);
        }
       
        return false; 
         
    }); 
});

function popThreeMessages(newdiv){
    setTimeout(function(){
        newdiv = addMessageA(itzaMessages.pop());
        setTimeout(function(){
            newdiv =addMessageA(itzaMessages.pop());
            setTimeout(function(){
                 newdiv =addMessageA(itzaMessages.pop());
             }, 1000);
         }, 2500);    
    }, 2500); 
}

function popTwoMessages(newdiv){
    setTimeout(function(){
        newdiv = addMessageA(itzaMessages.pop());
        setTimeout(function(){
            newdiv =addMessageA(itzaMessages.pop());
         }, 2000);    
    }, 2500); 
}

function showPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function brokenspliceMessageA(message){
    //split message into an array
    var collect_str = "";
    for (let c of message) {
        collect_str += c;
        if (((c === '!') || (c === '?')) || (c=== '.')){
            addMessageA(collect_str);
        
            setTimeout(function(){
                collect_str = '';
            }, 2000);
        }
    }
}



function scrollcontrol(newdiv){
    var textarea = $('#messages');
    console.log("scrollTop: " + textarea.scrollTop());
    console.log("div offsetTop: " + newdiv.offsetTop);
    const height = textarea[0].scrollHeight;
    console.log("scrollHeight:"+height);
    textarea.scrollTop = newdiv.offsetTop;
}



