//starts here

prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:280,
    image_format:"png",
    png_quality:90

});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/44TU7K_Fz/model.json",modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded!");
}
function speak(){
 var synth=window.speechSynthesis;
speak_data_1="First prediction is"+prediction_1;
speak_data_2="And second prediction is"+prediction_2;
 var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
 synth.speak(utterthis);
}
//*Ends here*//
//project 112 coding starts here

function check(){
img=document.getElementById("captured_image");
   
classifier.classify(img,gotResult); 
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML=result[0].label;
        document.getElementById("result_emotion_name2").innerHTML=result[1].label;
        prediction_1=result[0].label;
        prediction_2=result[1].label;
        speak();

        if(result[0].label=="amazing"){
document.getElementById(update_emoji).innerHTML="&#128076;";
    }
    if(result[0].label=="Better"){
        document.getElementById(update_emoji).innerHTML="&#128077;";
            }
            if(result[0].label=="Victory"){
                document.getElementById("update_emoji").innerHTML="&#9996;";

            }
            if(result[1].label=="amazing"){
                document.getElementById(update_emoji2).innerHTML="&#128076;";
                    }
                    if(result[1].label=="Better"){
                        document.getElementById(update_emoji2).innerHTML="&#128077;";
                            }
                            if(result[1].label=="Victory"){
                                document.getElementById("update_emoji2").innerHTML="&#9996;";
                                
                            }
}

}

