
function stack(){
  var vars = new setVars();

  setCanvas(vars);

  var can = new CanvasHead(vars);

  window.addEventListener("resize", function(){resizeCanvas(vars);main(vars, can)});

  setTimeout(function(){main(vars, can);},2000);

};
