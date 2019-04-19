var canvas = document.querySelector('#canv');
var ctx = canvas.getContext('2d');

var xCoord = document.getElementById('xCoord');
var yCoord = document.getElementById('yCoord');

var Color = document.getElementById('color');
//var Color_1 = '#000000';

var getCoordinates = function (evt) {
	let arr = {};
	let x = evt.offsetX;
	let y = evt.offsetY;

	xCoord.innerText = x;
	yCoord.innerText = y;
};

var system = {
	currentTool : '',
	currentColor : document.querySelector('#color').value,
	brushSize : 5
};

var renderSystem = function (obj, elem, action) { 
	//obj -> change
	obj[elem] = action; 
	console.log(system);
};

var mainColor = function (){
	console.log(Color.value);
	Color_1 = Color.value;
	renderSystem (system, 'currentColor', Color_1);
}

var switchTool = function (el) {
	if (el.id == 'brush') {
		console.log ('brush');
		return 'brush'
	} else if (el.id == 'circle') {
		console.log ('circle');
		return 'circle'
	} else if (el.id == 'circle_full') {
		console.log ('circle_full');
		return 'circle_full'
	}
};

var switchSize = function (list) {
	return list.value
};

var clicker = function (evt) {
	if (evt.target.classList.contains('toolButton') == true) {
		//console.log (`Выбран инструмент ${evt.target.id}`);
		//switchTool(evt.target);
		console.log(system);
		renderSystem (system, 'currentTool', switchTool (evt.target));
	} else if (evt.target.id == 'sizeSelect') {
		renderSystem (system, 'brushSize', switchSize(evt.target));
	 } //else if (evt.target.id == 'color') {
	// 	renderSystem (system, 'currentColor', Color_1);

	// 	//console.log (`Выбран инструмент color`);
	// }
};



var startDraw = function (evt) {
	//зафиксировать нач коорд
	//начать процесс рисования
	if (system.currentTool == 'brush') {
		draw (evt);
		//draw_circle(evt);
	}
	if(system.currentTool == 'circle'){
		draw_circle(evt);
	}
	if(system.currentTool == 'circle_full'){
		draw_circle_full(evt);
	}
	
};

var endDraw = function (evt) {
	console.log('end');
	canvas.onmousemove = null;
};

var draw = function (evt) {
	canvas.onmousemove = function (evt) {
		ctx.fillStyle = system.currentColor;
		ctx.fillRect (xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
	}
};


var draw_circle = function (evt) {
	canvas.onclick = function(evt) {
		if(system.currentTool == 'circle'){
			ctx.beginPath ();
			ctx.strokeStyle = system.currentColor;
			ctx.arc (xCoord.innerText, yCoord.innerText, system.brushSize, 0, Math.PI * 2, false);
			ctx.stroke ();
		}
	}
}

var draw_circle_full = function(evt) {
	canvas.onmousemove = function(evt) {
		ctx.beginPath ();
		ctx.fillStyle = system.currentColor;
		ctx.arc (xCoord.innerText, yCoord.innerText, system.brushSize, 0, Math.PI * 2, false);
		ctx.fill ();
	}
}

Color.addEventListener ('input', mainColor);
canvas.addEventListener ('mousemove', getCoordinates);
canvas.addEventListener ('mousedown', startDraw);
canvas.addEventListener ('mouseup', endDraw);
window.addEventListener ('click', clicker);




//ctx.fillRect (x0, y0, width(px), height(px));

// ctx.fillRect (0, 0, 100, 100);

// ctx.fillStyle = 'white';
// ctx.fillRect (50, 50, 100, 100);

//ctx.fillStyle = '#7700ff';
//ctx.fillRect (200, 200, 100, 100);

// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.fillStyle = 'blue';

// ctx.moveTo (100, 100);
// ctx.lineTo (300, 300);
// ctx.moveTo (100, 100);
// ctx.lineTo (300, 100);
// ctx.moveTo (300, 100);
// ctx.lineTo (300, 300);

// ctx.rect (40,100, 50, 50);
// ctx.fill ();
// ctx.stroke ();



//canvas.addEventListener ('click', function (evt) {console.log (evt)} );



