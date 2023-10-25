previsão1 = "";
previsão2 = "";
Webcam.set({
    width:350,
    height:300,
imageFormat: 'png',
pngQuality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function tirarFoto(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = 
    '<img id="captured_image" src="' + data_uri + '"/>';
});
}
console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-QfcsURVi/model.json', modelLoaded);
function modelLoaded(){
console.log("Modelo Carregado!!!");
}
function speak(){
var synth = window.speechSynthesis;
speakData1 = "A primeira previsão e" + previsão1;
speakData2 = "A segunda previsão e" + previsão2;
var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2)
synth.speak(utterThis);
}
function check(){
 img = document.getElementById("captured_image");
 classifier.classify(img, gotResult);
}
function gotResult(error, results){
if (error){
console.error(error);
}
else{
console.log(results);
document.getElementById("resultName").innerHTML = results[0].label;
document.getElementById("resultName2").innerHTML = results[1].label;
previsão1 = results[0].label;
previsão2 = results[1].label;
speak();
if (results[0].label == "tranquilo"){
document.getElementById("updateGesto").innerHTML = "&#129305;"
}
if (results[0].label == "legal"){
    document.getElementById("updateGesto").innerHTML = "&#128077;"
    }
    if (results[0].label == "vitoria"){
        document.getElementById("updateGesto").innerHTML = "&#9996;"
        }
       // previsao2--->
        if (results[1].label == "tranquilo"){
            document.getElementById("updateGesto2").innerHTML = "&#129305;"
            }
            if (results[1].label == "legal"){
                document.getElementById("updateGesto2").innerHTML = "&#128077;"
                }
                if (results[1].label == "vitoria"){
                    document.getElementById("updateGesto2").innerHTML = "&#9996;"
                    }
}
}






























































