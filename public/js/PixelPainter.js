
var pixelPainter = document.getElementById('pixelPainter');

var paintingApp = document.createElement('div');
paintingApp.id = 'paintingApp';
pixelPainter.appendChild(paintingApp);






// var selectedColor;
// var pixelPainter = document.getElementById('pixelPainter');

// //The Grids
// var gridsDiv = document.createElement('div');
// gridsDiv.classList.add("gridsDiv");
// pixelPainter.appendChild(gridsDiv);

// //Color Grid
// var colorGrid = document.createElement('div');
// colorGrid.id = "colorGrid";

// var windowBar = document.createElement('div');
// windowBar.id = "windowBar";
// windowBar.innerHTML = "Pixel Painter"
// gridsDiv.appendChild(windowBar);

// var windowButtons = document.createElement('div');
// windowButtons.id = "windowButtons";
// windowBar.appendChild(windowButtons);

// var minBtn = document.createElement('BUTTON');
// minBtn.classList.add('windowBtns');
// minBtn.id = 'minBtn';
// windowButtons.appendChild(minBtn);

// var maxBtn = document.createElement('BUTTON');
// maxBtn.classList.add('windowBtns');
// maxBtn.id = 'maxBtn';
// windowButtons.appendChild(maxBtn);

// var quitBtn = document.createElement('BUTTON');
// quitBtn.classList.add('windowBtns');
// quitBtn.id = 'quitBtn'
// windowButtons.appendChild(quitBtn);

// quitBtn.addEventListener('click', function() {
//   pixelPainter.removeChild(gridsDiv);
// })

// //Painting Grid
// var paintingGrid = document.createElement('div');
// paintingGrid.id = "paintingGrid";
// gridsDiv.appendChild(paintingGrid);


// var title = document.createElement("div");
// title.id = "title";
// pixelPainter.appendChild(title);

// var broken = document.createElement("IMG");
// broken.setAttribute("src", "http://theinternet.show/broken.gif");
// broken.id = "broken";
// title.appendChild(broken);

// var broken2 = document.createElement("IMG");
// broken2.setAttribute("src", "http://theinternet.show/broken.gif");
// broken2.id = "broken2";
// title.appendChild(broken2);

// var connecting = document.createElement("IMG");
// connecting.setAttribute("src", "http://theinternet.show/connecting.gif");
// connecting.id = "connecting";
// title.appendChild(connecting);

// var pixTitle = document.createElement("h1");
// pixTitle.innerHTML = "Pixel Painter";
// title.appendChild(pixTitle);

// var colorCells = [];

// var colorsArr = ['#fefa43','#fadb50', '#fef972', '#f1d781', '#39720e',
// '#3d7b0f', '#c2f543', '#7ff327', '#a5f52e', '#6bc034', '#7df47b', '#a7e58c',
// '#60a868', '#7bf194', '#79741b', '#487e4f', '#e13233', '#e34e34', '#e88837',
// '#d03b44', '#6a1113', '#8b2d2e', '#bb6433', '#e87c59', '#bf2f44', '#d6907a',
// '#e03f90', '#962b2c','#e470af', '#b55a5b', '#da8080', '#efb4bd', '#ec9c7b',
// '#dd50fa', '#a9337e', '#c175d0', '#c36f8e', '#c46f8f', '#e28074', '#e39f66',
// '#061773', '#371b75', '#0c1e63', '#113cf6', '#682076', '#6e46d9', '#6393e5',
// '#77faf9', '#3b8180', '#3a3c7e', '#51baf6', '#b0d3e0', '#55a9a0', '#91caf4',
// '#adbed8','#685b7f', '#686be5', '#3b6bd7', '#595bc2', '#697786', '#4c7ba9',
// '#367575', '#74d7c8', '#a2a2a2', '#cecfce', '#000000'];

// var urlsArr = ["https://media.giphy.com/media/ZTn3hK0XgHUVa/giphy.gif",
// "https://media.giphy.com/media/Iuno0N5wK2zkc/giphy.gif",
// "https://media.giphy.com/media/BkMjH8hlykeDS/giphy.gif",
// "https://media.giphy.com/media/l41Yvub60fF4OU15C/giphy.gif",
// "https://media.giphy.com/media/VQlbJnrlVYDkY/giphy.gif",
// "https://media.giphy.com/media/hQY6aAY1kM05G/giphy.gif",
// "https://media.giphy.com/media/Iao0dDx3fkKLS/giphy.gif",
// "https://media.giphy.com/media/10nD7q6UjRgbe/giphy.gif",
// "https://media.giphy.com/media/10Rl4clceaqFwc/giphy.gif",
// "https://media.giphy.com/media/fde2UrtVei4Jq/giphy.gif",
// "https://media.giphy.com/media/12hX6pFmVYKgzm/giphy.gif"]

// //erase div
// // var eraseDiv = document.createElement('div');
// // eraseDiv.className = "eraseDiv";
// // colorGrid.appendChild(eraseDiv);

// //Erase Button
// var eraser = document.createElement('IMG');
// eraser.id = "erase";
// eraser.setAttribute('src', 'https://t4.rbxcdn.com/fb60f641efd38c04d7e75afbfe8624cf')
// pixelPainter.appendChild(eraser);
// eraser.addEventListener('click', function(e) {
//     selectedColor = "white";
// })

// //clear div
// // var clearDiv = document.createElement('div');
// // clearDiv.className = "clearDiv";
// // colorGrid.appendChild(clearDiv);

//  //Clear Button
// var recycleBin = document.createElement('IMG');
// recycleBin.id = "recycleBin";
// recycleBin.setAttribute("src", "http://www.it.uom.gr/project/intro/conwin/mwin8/95desktop5.gif")
// pixelPainter.appendChild(recycleBin);

// recycleBin.addEventListener('click', function(e) {
// var toBeCleared = document.getElementsByClassName("paintGridCells");
//   for(var z = 0; z < toBeCleared.length; ++z){
//     toBeCleared[z].style.backgroundColor = "white";
//   }
// })


// var folder = document.createElement('IMG');
// folder.id = "folder";
// folder.setAttribute("src", "http://posthtml.org/img/folder2.png")
// pixelPainter.appendChild(folder);

// var folder2 = document.createElement('IMG');
// folder2.id = "folder2";
// folder2.setAttribute("src", "http://posthtml.org/img/folder2.png")
// pixelPainter.appendChild(folder2);

// var folder3 = document.createElement('IMG');
// folder3.id = "folder3";
// folder3.setAttribute("src", "http://posthtml.org/img/folder2.png")
// pixelPainter.appendChild(folder3);

// folder.addEventListener("click", changeBg);
// folder2.addEventListener("click", changeBg);
// folder3.addEventListener("click", changeBg);

// var navBar = document.createElement('div');
// navBar.id = 'navBar';
// pixelPainter.appendChild(navBar);

// var startButton = document.createElement('IMG');
// startButton.id = 'startButton';
// startButton.setAttribute('src', 'https://cdn0.vox-cdn.com/thumbor/0csUNOsUAMfelAMe6KEFaSRB8zs=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6028879/win95s.0.gif')
// navBar.appendChild(startButton);

// startButton.addEventListener('click', function() {
//   if(colorGrid.classList.contains('clicked')) {
//     startButton.setAttribute('src', 'https://cdn0.vox-cdn.com/thumbor/0csUNOsUAMfelAMe6KEFaSRB8zs=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6028879/win95s.0.gif')
//     navBar.removeChild(colorGrid);
//     colorGrid.classList.remove("clicked");
//   } else {
//     colorGrid.classList.add("clicked");
//     startButton.setAttribute('src', 'assets/images/clicked-start.png')
//     navBar.appendChild(colorGrid);
//   }
// })

// var timeDiv = document.createElement('span')
// timeDiv.id = "time";
// navBar.appendChild(timeDiv);




// function changeBg() {
//   var item = urlsArr[Math.floor(Math.random()*urlsArr.length)];
//   document.body.style.backgroundImage = "url(" + item + ")";
// }

// var timespan = Date.now();

// //need to fix time
// function msToTime(duration) {
//     var milliseconds = parseInt((duration%1000)/100)
//         , seconds = parseInt((duration/1000)%60)
//         , minutes = parseInt((duration/(1000*60))%60)
//         , hours = parseInt((duration/(1000*60*60))%24);

//     hours +=14; //hawaii timezone
//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;


//     return hours + ":" + minutes;
// }


// timeDiv.innerHTML = msToTime(timespan);



// function createColorDiv(numRows, numCell) {

//   for(var i = 0; i< numRows; i++) {
//     var row = document.createElement('div');
//     colorGrid.appendChild(row);
//     for(var x = 0; x < numCell; x++) {
//       var colorCounter = 0
//       var cell = document.createElement('div');
//       row.appendChild(cell);
//       cell.classList.add('colors');
//       cell.style.border = "thin solid black"
//       cell.style.display = "inline-block";
//       cell.style.height = '15px';
//       cell.style.width = '15px';
//       colorCells.push(cell);
//     }
//   }
// }

// var clicked = false;

// function paintCellMousedown () {
//   this.style.backgroundColor = selectedColor;
//   clicked = true;
// }

// function paintCellMouseup() {
//   clicked = false;
// }

// function paintCellMouseover() {
//   if(clicked) {
//     this.style.backgroundColor = selectedColor;
//   }
// }

//   function createPaintDiv(numRows, numCell) {

//     for(var i = 0; i< numRows; i++) {
//       var row = document.createElement('div');
//       paintingGrid.appendChild(row);
//       for(var x = 0; x < numCell; x++) {
//         cell = document.createElement('div');
//         row.appendChild(cell);

//         cell.style.backgroundColor = 'white';
//         cell.classList.add('paintGridCells');
//         cell.id = "div" + x;
//         cell.style.backgroundColor = 'white';
//         cell.style.border = "thin solid black"
//         cell.style.display = "inline-block";
//         cell.style.height = '10px';
//         cell.style.width = '10px';
//         cell.addEventListener("mousedown", paintCellMousedown)
//         cell.addEventListener("mouseup", paintCellMouseup)
//         cell.addEventListener("mouseover", paintCellMouseover)
//       }
//     }
//   }



// createColorDiv(11,6);
// createPaintDiv(35,45);

// for(var i = 0; i < colorCells.length; ++i) {
//   colorCells[i].style.backgroundColor = colorsArr[i];
//   colorCells[i].id = colorsArr[i];
//   colorCells[i].addEventListener('click', function(e) {
//     selectedColor = e.currentTarget.id
//   })
// }







