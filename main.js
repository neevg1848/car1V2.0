canvas = document.getElementsById("myCanvas");
ctx = canvas.getContext("2d");
//Car1's Characteristics
width1 = 120;
height1 = 70;
image1 = "car.png";
x1 = 10;
y1 = 10;
//Car2's Characteristics
width2 = 120;
height2 = 70;
image2 = "sports-car.png";
x2 = 10;
y2 = 100;
//background image
back_img = "racing.jpg";


function add(){
    imgTag = new Image();
    imgTag.onload = back_img;
    imgTag.src = image1;

    car1 = new Image();
    car1.onload = uploadCar1;
    car1.src=image1;

    car2 = new Image();
    car2.onload = uploadCar2;
    car2.src=image1;
}

function uploadBCG(){
    ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1, x1, y1, width1, height1);
}
function uploadCar2(){
    ctx.drawImage(car2, x2, y2, width2, height2);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    pressedKey = e.keyCode;
    console.log(pressedKey);
    if(pressedKey == "38"){
        car1_up();
        console.log("Going UP");
    }

    if(pressedKey == "40"){
        car1_down();
        console.log("Going DOWN");
    }

    if(pressedKey == "37"){
        car1_left();
        console.log("Going LEFT");
    }

    if(pressedKey == "39"){
        car1_right();
        console.log("Going RIGHT");
    }

    if(pressedKey == "87"){
        car2_up();
        console.log("Going 2 UP: W");
    }

    if(pressedKey == "83"){
        car2_down();
        console.log("Going 2 DOWN: S");
    }

    if(pressedKey == "65"){
        car2_left();
        console.log("Going 2 LEFT: A");
    }

    if(pressedKey == "68"){
        car2_right();
        console.log("Going 2 RIGHT: D");
    }
}

