$(document).ready(function(){

    $( function() {
        var handle = $( "#custom-handle" );
        $( "#slider" ).slider({
            min: 10,
            max: 300,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value ); 
          },
          stop: function(event, ui){
            clearInterval(beat);
            bpm=ui.value;
            if (detenido==false){
                comenzar();
            }          
          }
        });
      } );
    
});

var beat;
var playButton = document.querySelector("#play");
var detenido=true;
var bpm=10;

//var divTempo = document.querySelector("#tempo");
window.addEventListener('keyup',function(event){
  if(event.keyCode==32){
    if(playButton.disabled==false){
      comenzar();
    }else{
      detener(); 
    }
  };
});
function comenzar(){ 
   // divTempo.innerHTML=bpm;
    playButton.disabled=true;  
    if(detenido==true){
      click();
    }
    detenido=false;
    
    beat = setInterval(function(){
        click();     
    }, (60/bpm)*1000);
    
}

function click(){
    let click = new Wad({source : './assets/audio/Claves.wav'});
    click.play();
    
}

function detener(){
    clearInterval(beat);
    playButton.disabled=false;
    detenido=true;
}





