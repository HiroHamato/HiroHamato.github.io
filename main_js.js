let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); 

tg.MainButton.text = "Кнопка"; //изменяем текст кнопки 
tg.MainButton.setText("Изменённая кнопка"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let btn = document.getElementById("btn"); //получаем кнопку скрыть/показать 

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
  if (tg.MainButton.isVisible){ //если кнопка показана 
     tg.MainButton.hide() //скрываем кнопку 
  }
  else{ //иначе
     tg.MainButton.show() //показываем 
  }
});


Telegram.WebApp.onEvent('mainButtonClicked', function(){
  tg.sendData("some string that we need to send"); 
  //при клике на основную кнопку отправляем данные в строковом виде
});