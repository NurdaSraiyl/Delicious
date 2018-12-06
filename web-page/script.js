var sketch = function(p){
  p.setup = function(){
    p.createCanvas(400, 400);
  }

  p.draw = function(){
    p.background(0);
    p.fill(255);
    p.noStroke();
    p.rect(p.mouseX-10, p.mouseY-10, 20, 20);
  }
};

new p5(sketch, window.document.getElementById('d'));
