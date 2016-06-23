if (document.images) {
				img1 = new Image();
				img2 = new Image();
				img3 = new Image();
                img4 = new Image();

				img1.src = "http://chkry.github.io/AnimalGame/img/goat.png";
				img2.src = "http://chkry.github.io/AnimalGame/img/dog.jpg";
				img3.src = "http://chkry.github.io/AnimalGame/img/cat.jpg";
                img4.src = "http://chkry.github.io/AnimalGame/img/cow.jpg";
                img5.src = "http://chkry.github.io/AnimalGame/img/GuessImage.jpg";
			}


document.getElementById("yesButton").addEventListener("click", chkry);

var ArrayStore = [];

var ScoreArray = [];

var score_value = 0;

var images = ["http://chkry.github.io/AnimalGame/img/goat.png", "http://chkry.github.io/AnimalGame/img/dog.jpg", "http://chkry.github.io/AnimalGame/img/cat.jpg", "http://chkry.github.io/AnimalGame/img/cow.jpg"];

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
    document.getElementById("sourceImage").src = "http://chkry.github.io/AnimalGame/img/GuessImage.jpg";


    var radioChecked = document.getElementsByName("radioGroup");
   for(var i=0;i<radioChecked.length;i++){
       radioChecked[i].checked = false;
   }
    return;
};
