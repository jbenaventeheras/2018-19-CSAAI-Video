function main()
{

  //-- Obtener el elemento de video
  video_1 = document.getElementById("video_1")
  video_1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video_2 = document.getElementById("video_2")
  video_3 = document.getElementById("video_3")
  video_in = document.getElementById("video_in");




  //-- Obtener botones
  plano_1 = document.getElementById("plano_1")
  plano_2 = document.getElementById("plano_2")
  plano_3 = document.getElementById("plano_3")



  //--audio on onmouseover
  video_1.onmouseover = () => {
    video_1.muted=false;
  }
  video_1.onmouseout = () => {
    video_1.muted=true;
  }

  video_2.onmouseover = () => {
    video_2.muted=false;
  }
  video_2.onmouseout = () => {
    video_2.muted=true;
  }

  video_3.onmouseover = () => {
    video_3.muted=false;
  }
  video_3.onmouseout = () => {
    video_3.muted=true;
  }


  //seleccionar video que se pincha
  plano_1.onclick = () => {
     video_in.src  ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
   }

 plano_2.onclick = () => {
    video_in.src  ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  }

  plano_3.onclick = () => {
     video_in.src  ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
   }

 reset.onclick = () => {
    video_in.src  ="BarsAndTone.mp4";
  }




}
