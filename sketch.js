let camera;
let myfont;
let myimg;
//let newTexture
function preload(){
  myfont = loadFont('./addons/fonts/Futura-BolObl.otf')
  myimg= loadImage("./addons/imgs/space.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(120,120,120,10);
  camera = createCamera();
  //newTexture = createGraphics(400, 200);
  //newTexture.textSize(75)
  //newTexture.background(img)
  //console.log(newTexture)
  angleMode(DEGREES)
}



function draw() {

var dirX= map(mouseX,0,width,0,200)
var dirY= map(mouseY,0,height,0,200)
var rotX= map(rotationX,-180,180,0,180)
var rotY= map(rotationY,-180,180,0,180)
var moveX = Math.floor(sin(rotationZ)*100)
var moveY = Math.floor(cos(rotationZ)*100)
     clear()

ambientLight(200)
  camera.lookAt( moveX,0,moveY )
        camera.setPosition(0,0,0);
    push()
     fill(rotationY,rotationY,0)
      translate(moveX%frameCount,90-rotY%90,moveY%frameCount)
      sphere(20);
    pop()

//colorMode(HSB)


push()
//  fill(frameCount%360,100,100)

//rotateY(moveX)
//rotateZ(rotX)
rotateY(rotationY)
  texture(myimg)
  sphere(1000,200,200)
pop()

//BOXES
colorMode(RGB)

push()
  fill(rotationY,rotationY,0)
  translate(100,50-rotY%90,0)

  box(20);
pop()

push()
  fill(255,255,255)
  translate(50,50-rotY%90,-50)
  ambientLight(100)
  //texture(img)
  //textureWrap(CLAMP);
  normalMaterial()

  box(20);
pop()

push()
  fill(255,0,0)
  translate(0,50-rotY%90,-100)
//  texture(img)

  box(20);
pop()

push()
  fill(255,255,255)
  translate(-50,50-rotY%90,-50)
//  texture(img)

  box(20);
pop()

push()
  fill(255,255,255)
  translate(-100,50-rotY%90,0)
//  texture(img)

  box(20);
pop()


push()
  fill(255,255,255)
  translate(-50,50-rotY%90,50)
//  texture(img)

  box(20);
pop()

push()
  fill(255,255,255)
  translate(0,50-rotY%90,100)
//  texture(img)

  box(20);
pop()


push()
  rotateX(0)
  fill(255,255,255)
  translate(50,50-rotY%90,50)
//  texture(img)

  box(20);
pop()


}


p5.prototype.Picture3D = function(p, picture, depth, size, resolution, bevelled = false) {
    this.picture = picture; // Letter
    this.threshold = 60; // Magic number good for images

    this.create = function() {
        // Create the 2D graphic
        var graphic = p.createGraphics(this.resX, this.resY);

        // Draw the given picture in the corner
        graphic.background(255, 255, 255, 255);
        graphic.image(this.picture, -1, -1, this.resX, this.resY);

        return graphic;
    }

    p5.prototype.Object3D.call(this, p, depth, size, resolution, bevelled, this.threshold);

    // Redefine the resolution as a scaling of the width and height
    this.resX = int(this.picture.width*resolution);
    this.resY = int(this.picture.height*resolution);

    // Create the array using its own "create()" and Object3D's "toArray()"
    this.array = this.toArray(this.create(), 1);
    this.rects = p5.prototype.getRects(this.array, this.bevelled);
}

p5.prototype.createPicture3D = function(picture, depth = 6, size = 10, resolution = 50, bevelled = false) {
    return new p5.prototype.Picture3D(p = this, picture, depth, size, resolution, bevelled = false);
}
