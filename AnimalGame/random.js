document.getElementById("yesButton").addEventListener("click", chkry);


var ArrayStore = [];

var ScoreArray = [];

var score_value = 0;

var images = ["http://kindersay.com/files/images/goat.png", "http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23262_entlebucher-mountain-dog-460x290.jpg", "http://animal-dream.com/data_images/cat/cat3.jpg", "http://images.all-free-download.com/images/graphiclarge/cartoon_cow_clip_art_6772.jpg"];

function chkry() {

    var presentImage = document.getElementById("sourceImage").src;
    console.log(presentImage);

    var index = images.indexOf(presentImage);
    console.log(index);

    var prevIndex = images.indexOf(presentImage);

    var storePrevIndex = PushArray(prevIndex);

    if (index == -1) {

        console.log("index in if condition"+index);
        var randomValue = calculate();
        console.log("RandomValue in if condition"+randomValue);
        var imagesrc = images[randomValue];
        console.log(imagesrc);
        document.getElementById("sourceImage").src = imagesrc;

        var radioValue = handlingRadios()

        console.log("the radio Value is in if condition :" +radioValue);
        if(radioValue == randomValue){
            score_value += 1;
            setScore(score_value);
        }

        var finalScore = ScoreArray[ScoreArray.length-1];
        if(finalScore>0){
            document.getElementById("scoreValue").innerHTML = finalScore;
        }else{
            document.getElementById("scoreValue").innerHTML = 0;
        }



    } else {


        console.log("index in else condition"+index);

        do{
            var randomValue = calculate();
        }while(index == randomValue)
        console.log("RandomValue in else condition"+randomValue);

        var imagesrc = images[randomValue];
        document.getElementById("sourceImage").src = imagesrc;


        var radioValue = handlingRadios()
        console.log("the radio Value is in else condition :" +radioValue);



        if(radioValue == randomValue){
            score_value += 1;
            setScore(score_value);
        }



        var finalScore = ScoreArray[ScoreArray.length-1];
        if(finalScore>0){
            document.getElementById("scoreValue").innerHTML = finalScore;
        }else{
            document.getElementById("scoreValue").innerHTML = 0;
        }




        if(ArrayStore.length >= 10){
            document.getElementById("yesButton").disabled = true;
            document.getElementById("yesButton").innerHTML = "GAME OVER";
        }
    }




}

function calculate() {
        var random = Math.random() * 4;
        var random = Math.floor(random)
    return random;

}



function setScore(score_value){

    ScoreArray.push(score_value);
    console.log("the score array : "+ScoreArray);
}

// Storing Values in array

function PushArray(prevIndex){

    ArrayStore.push(prevIndex)
    console.log(ArrayStore);
}





//Storing values in array end

//document.getElementById("noButton").addEventListener("click", NoClicked);
//
//function NoClicked(){
//
//    var prevIndex = ArrayStore[ArrayStore.length-1];
//    var imagesrc = images[prevIndex];
//
//    document.getElementById("sourceImage").src = imagesrc;
//
//
//}



function handlingRadios(){
    console.log("handlingRadios Triggered");
var rad = document.radioGroup.myRadios;
var prev = null;
for(var i = 0; i < rad.length; i++) {

    if(rad[i].checked){
        return rad[i].value;
        }
    };
    };



//function handlingRadios(){
//    console.log("handlingRadios Triggered");
//var rad = document.radioGroup.myRadios;
//var prev = null;
//for(var i = 0; i < rad.length; i++) {
//    rad[i].onclick = function() {
//        (prev)? console.log(prev.value):null;
//        if(this !== prev) {
//            prev = this;
//        }
//        return this.value;
//        };
//    }
//};




document.getElementById("noButton").addEventListener("click", resetButton);

function resetButton(){
    document.getElementById("scoreValue").innerHTML = "0";
    document.getElementById("yesButton").disabled = false;
    document.getElementById("yesButton").innerHTML = "NEXT";
    ArrayStore.splice(0,ArrayStore.length);
    score_value = 0;
    ScoreArray.splice(0,ScoreArray.length);
    return;
};
