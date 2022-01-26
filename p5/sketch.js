let camera;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255,255,125);
  camera = createCamera();
  angleMode(DEGREES)
}



function draw() {
var dirX= map(mouseX,0,width,0,200)
var dirY= map(mouseY,0,height,0,200)
var rotX= map(rotationX,-180,180,0,200)
var rotY= map(rotationY,-180,180,0,200)

        background(0);
push()
        camera.lookAt(100, 0, 0);
        camera.setPosition(0,0,0);

        //console.log(frameCount%360)
pop()


push()
fill(255,255,0)
translate(100,0,0)
box(20);
pop()

push()
fill(255,255,0)
translate(100,0,50)
box(20);
pop()

push()
fill(255,255,0)
translate(100,0,-50)
box(20);
pop()


push()
fill(255,0,0)
translate(0,0,-100)
box(20);
pop()


push()
fill(255,255,255)
translate(0,0,100)
box(20);
pop()



}
