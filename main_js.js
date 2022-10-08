let tg = window.Telegram.WebApp;

tg.expand(); 

tg.MainButton.text = "Кнопка"; 
tg.MainButton.setText("КНОПКА"); 
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.setParams({"color": "#143F6B"});

let res = document.getElementById("result");
let btn = document.getElementById("btn");
let SendBtn = document.getElementById("btn1");
let inp = document.getElementById("input");

btn.addEventListener('click', function(){
  if (tg.MainButton.isVisible){ 
     tg.MainButton.hide()
  }
  else{ //иначе
     tg.MainButton.show()
  }
});

let DataToSend="";

inp.addEventListener('input',function(e){
  DataToSend = e.target.value;
  res.textContent = DataToSend;
})

SendBtn.addEventListener('click', function(){
  tg.sendData("было написано: "+DataToSend);
  DataToSend="";
  res.textContent="Отправлено!";
  inp.value="";
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
  tg.sendData("был тыкнут батон"); 
});
