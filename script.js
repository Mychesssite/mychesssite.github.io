let tableBorder = 2;
var cellSize = 20;
var orientationIsAlbum = document.documentElement.clientWidth>document.documentElement.clientHeight
function randomInt(max)
{
    return Math.floor(Math.random()*max + 0.5);
}
function formatscreen()

{
    orientationIsAlbum?(cellSize = Math.floor(document.documentElement.clientHeight/14.5)):(cellSize = Math.floor(document.documentElement.clientWidth/14.5));
}
/*по расчетам в экран должно влазить не менее 14 клеток подряд
надо будет сделать второй режим, без прокрутки вообще*/

function initialization() {
    const elements = document.querySelectorAll('.cell'); //устанавливаем размер каждой клетки
    elements.forEach(element => {
        element.style.width = cellSize + 'px'; 
        element.style.height = cellSize + 'px'; 
    }); 
    let chessboard = document.getElementById('alll');
    chessboard.style.position = 'absolute';
    chessboard.style.top = 0.25 * cellSize;
    chessboard.style.left = 0.25 * cellSize;
    chessboard = document.getElementById('tableborder');    //настраеваем контейнер div, в который обёрнута таблица для получения красивой границы
    chessboard.style.borderWidth = tableBorder + 'px';
    chessboard.style.transform = 'translate(' + 3 * cellSize + 'px ,' + 3 * cellSize + 'px)';//двигаем таблицу на центр
    //alert("Started");
    chessboard.style.width = 8 * cellSize + 'px';
    chessboard.style.height = 8 * cellSize + 'px';
    let rd = (Math.floor(cellSize / 3)) + 'px';
    chessboard.style.borderRadius = rd;
    let bw= (Math.floor(cellSize / 20)) + 'px';
    if (bw == '0px')  {bw = '1px';};
    //alert(bw);
    chessboard.style.borderWidth = bw;
    let hourss = document.querySelectorAll('.clckrnd');
    hourss.forEach(hr =>{hr.style.borderRadius = rd;
                       hr.style.borderWidth = bw;});
    chessboard = document.getElementById('board');      //настраеваем теперь уже саму таблицу
    chessboard.style.borderRadius = (Math.floor(cellSize/6)) + 'px';
    
    let interfacee = document.getElementById('interface');		//настраеваем интерфейс в целом
    interfacee.style.transform = 'translate(0px,'+ 15 * cellSize + 'px)';
    
    let sendbut = document.getElementById('mydatasendbutton');		//настраеваем кнопку отправки
    sendbut.style.height = Math.floor(1.5*cellSize) + 'px';
    sendbut.style.fontSize = cellSize + 'px';
    sendbut.style.width = Math.floor(cellSize * 5.5)+ 'px';
    sendbut.style.borderRadius = Math.floor(cellSize/1.5) + 'px';
    sendbut.style.padding = bw;
    sendbut.style.borderWidth = bw;
	let colorModeBorder = document.getElementById("colormodeborder");//настраеваем переключатель режимов
    colorModeBorder.style.height = Math.floor(cellSize/1.5) + "px";
	colorModeBorder.style.width = Math.floor(cellSize*1.5) + "px";
	colorModeBorder.style.borderRadius=Math.floor(cellSize/1.5) + "px";
	let colorModeBorderRound = document.getElementById("colormoderound");
	colorModeBorderRound.style.height=Math.floor(cellSize/1.5) + "px";
	colorModeBorderRound.style.width=Math.floor(cellSize/1.5) + "px";
	colorModeBorderRound.style.borderRadius=Math.floor(cellSize/1.5) + "px";
    const elementss = document.querySelectorAll('.interfaceelement');		//для каждого элемента интерфейса размер шрифта как полторы клетки
    elementss.forEach(elementt => {
        elementt.style.fontSize = (Math.floor(cellSize/1.5)) + 'px';
    });
	let colorSelector=document.getElementById("colorSelector"); //настраеваем кнопку выбора цвета 
	colorSelector.style.height=Math.floor(cellSize*0.75) + "px";
	colorSelector.style.width=Math.floor(cellSize*1.5) + "px";
	colorSelector.style.borderRadius=Math.floor(cellSize*0.25) + "px";
	
	
    
    //alert("success");
    
    
}

function positioning()/*позиционирование клеток*/
    {
    const coords = [        /*массив координат. первая строка это 12 или 0 часов и далее по стрелке. записаны координаты центра клетки в системе координат, где единичный отрезок это 1 клетка, а поле имеет размерность 14*14 клеток, координаты цетнра доски на поле 7,7 .левого верхнего угла 3,3*/
        7, 0.5,
        10, 1.5,
        12.5, 4,
        13.5, 7,
        12.5, 10,
        10, 12.5,
        7, 13.5,
        4, 12.5,
        1.5, 10,
        0.5, 7,
        1.5, 4,
        4, 1.5
    ];
    const hrs = document.querySelectorAll(".clckrnd");
    let i = 0;
    //alert("started");
    hrs.forEach(tmp => {
            tmp.style.position = 'absolute';
            tmp.style.left = cellSize *(coords[i]-0.5); /*условно если i = 2 то это 3 часа тоггда его координаты это coords[6] и coords[7], так как 0 часов это первый элемент массива */
            tmp.style.top = cellSize *(coords[i+1]-0.5);
            //let msg = cellSize *(coords[i]-0.5)+' and ' + cellSize *(coords[i+1]-0.5);
            //alert(msg);
            i++;
            i++;
        });
    }

/*function coloring() {
    let blackk = document.querySelectorAll('.blackk');
    blackk.forEach(cell => {
        cell.style.backgroundColor = 'rgb(255,176,46)';
    });
}*/

window.onload = function() {
    formatscreen();
    //coloring();
    initialization();
    //alert('init');
    positioning();
    //alert('posistioned');
	
	
	
	
    let elements = document.querySelectorAll('.cell');/*при нажатии на элемент с классом cell ему присваивается или убирается класс active*/
    elements.forEach(element => {
        element.onclick = function() {
            element.classList.toggle('active');
			/* let colorValue = document.getElementById();*/ //начало создания возможности цветной раскраски
        };
    });
    let colorModeOn = false;
    document.getElementById("colormodeborder").onclick = function()/*анимация переключателя режима цвета или не цвета*/
    {
       //moving switcher + starting animation
        let colorModeRound = document.getElementById("colormoderound");
		colorModeRound.classList.toggle('inactive');
        colorModeRound.classList.toggle('active');
		
        document.getElementById("colormodeborder").classList.toggle('inactive');
         document.getElementById("colormodeborder").classList.toggle('active');
		 //if is needed change color of text and background of text
	 if(colorModeOn === false)
	 {
      let [redd, greenn, bluee] = [105+randomInt(150), 105 + randomInt(150), 105 + randomInt(150)]; 
	  let rnd = randomInt(3);
	  if (rnd == 1) 	document.getElementById("colormodeborderlabel").style.color = "rgb("+ (255) + ", " + (greenn-105) + ", " + (bluee-105) + ")";
	  else if(rnd == 2) 	document.getElementById("colormodeborderlabel").style.color = "rgb("+ (redd-105) + ", " + (255) + ", " + (bluee-105) + ")";
	  else		document.getElementById("colormodeborderlabel").style.color = "rgb("+ (redd-105) + ", " + (greenn-105) + ", " + (255) + ")";
      document.getElementById("colormodeborderlabel").style.backgroundColor = "rgb("+ bluee + ", " + redd + ", " + greenn + ")";
	 }
	 else
	 {
		 document.getElementById("colormodeborderlabel").style.color = "rgb(0,0,0)";
		 document.getElementById("colormodeborderlabel").style.backgroundColor = "rgb(255,255,255)";
	 }
	colorModeOn = !colorModeOn;
    };
      /*var formData = new FormData();

  // добавить к пересылке ещё пару ключ - значение
  formData.append("plain", "success");

  // отослать
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.send(formData);
  alert("data sent");*/
};
















