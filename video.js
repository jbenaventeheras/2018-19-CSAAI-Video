function main()
{

  //-- Obtener el elemento de video
  video_1 = document.getElementById("video_1")
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
//////////////////////
var count = 0,
      clk_time = [0,0,0],
      count = 0,
      actual = 1;

  setInterval(function(){
    clk_time[2]++;
    count++;
    if(clk_time[2] > 60) {

        clk_time[2] = 0;
        clk_time[1]++;
    }
    if(clk_time[1] > 60) {

        clk_time[1] = 0;
        clk_time[0]++;
    }

    clock.innerHTML = clk_time[0] + ":" + clk_time[1] + ":" + clk_time[2];
  },1000);



}
