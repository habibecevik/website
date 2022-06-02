var point=0;
var arr = ["180 derece","basit kesir","otuz iki bin beş","456.905","elli dört bin beş yüz kırk sekiz","bileşik kesir","60","1000","195","100"]; 
var pointArr= [0,0,0,0,0,0,0,0,0,0];
function control(qn,ans){
  alert(qn + ".cevabınız alınmıştır!" + ans);
  var par_id = document.getElementById("qp"+ qn);
  if(arr[qn-1]== ans){ 
    par_id.style.backgroundColor = "#1de807";
    if(pointArr[qn-1]== 0){
      
    point += 10;
     }
    pointArr[qn-1] =1;
      }
  else{  
    par_id.style.backgroundColor = "#f01c11";
    if(pointArr[qn-1]==1){
      
      point -= 10;
    }
    pointArr[qn-1] =0;
  }
  document.getElementById("point").innerHTML = "PUAN: " +point;
}

function control1(qn,ans){
  alert(qn + ". soruya cevap verildi: " + ans);
  var par_id = document.getElementById("qp" + qn);
  if (arr[qn-1] == ans){ // cevap doğru ise
    par_id.style.backgroundColor = "#5cfa91";
    if(pointArr[qn-1]==0){
      point += 10;
    }
    pointArr[qn-1] = 1;
  }
  else{ // cevap yanlış ise
    par_id.style.backgroundColor = "#FF0000";
    if(pointArr[qn-1]==1){
      point -= 10;
    }
    pointArr[qn-1] = 0;
  }
  document.getElementById("point").innerHTML = "Puan: " + point;

}


var time_id = document.getElementById("time");
var seconds = 1200;
function intervalBaslat() {
  alert("Sınavınız Başlamıştır.")
t_int = setInterval(timer,1200);
}
  function intervalDurdur() {
  clearInterval(t_int);
}

function intervalBitir(){
  alert("Sınavınız Bitmiştir. Puanınız: " + point)
  clearTimeout(t_int);
  time_id.innerHTML = "Süre: 00:00";
}

function timer(){
  if(seconds <=0){
    time_id.innerHTML = "Süre: --:--";
  }
  else{
    var m
    var s = seconds;
    if(m<10){
      m = "0" + m;
    }
    if(s<10){
      s = "0" + s;
    }
    time_id.innerHTML = "Süre: " + ":" + s;
    seconds--;
  }

}