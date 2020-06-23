class button {
  constructor(_x , _y, _w , _h, _r, _f, _c, _xlbl, _ylbl, _clbl, _slbl, _flbl, _tlbl){
    this._lbl = new label(_xlbl, _ylbl, _clbl, _slbl, _flbl, _tlbl);
    this.x = _x;
    this.y = _y;
    this.yLimit = _y - 4 ;
    this.width = _w;
    this.height = _h;
    this.border_radius = _r;
    this.shadowed = _f;
    this.color = _c;
    this.speedY = 0.5;
    this.isHovered = 0;
  }

  checkHover(){
    if (mouseX >= this.x && mouseX <= this.x+this.width && mouseY >= this.y && mouseY <= this.y+this.height)
      this.isHovered = 1;
    else
      this.isHovered = 0;
  }

  show(){
    this.checkHover();
    if ( (this.isHovered && !mouseIsPressed) ){
      this._lbl.isHovered = 1;
      if (this.y >= this.yLimit)
        this.y -= this.speedY ;
    }else{
      this._lbl.isHovered = 0;
      if (this.y < this.yLimit + 4)
        this.y += this.speedY ;
    }
    if ( this.shadowed ){
      fill(0,0,0,25);
      strokeWeight(0);
      rect(this.x,this.y + 10,this.width,this.height ,this.border_radius);
    }
    fill(this.color);
    strokeWeight(0);
    rect(this.x,this.y,this.width,this.height ,this.border_radius);
  }
}
