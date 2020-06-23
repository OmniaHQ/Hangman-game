class circle_btn {
  constructor(_x , _y, _r , _c, _xl, _yl, _cl, _sl, _fl, _tl){
    this._lbl = new label(_xl, _yl, _cl, _sl, _fl, _tl);
    this.x = _x;
    this.y = _y;
    this.yLimit = _y - 4 ;
    this.radius = _r;
    this.color = _c;
    this.speedY = 0.5;
    this.isHovered = 0;
  }

  checkHover(){
    if (mouseX >= this.x -(this.radius-20) && mouseX <= this.x+(this.radius-20) && mouseY >= this.y-(this.radius-20) && mouseY <= this.y+(this.radius-20))
      this.isHovered = 1;
    else
      this.isHovered = 0;
  }

  show(){

    this.checkHover();
    if ( this.isHovered ){
      this._lbl.isHovered = 1;
      if (this.y >= this.yLimit)
        this.y -= this.speedY ;
    }else{
      this._lbl.isHovered = 0;
      if (this.y < this.yLimit + 4)
        this.y += this.speedY ;
    }

    fill(0,0,0,25);
    ellipse(this.x,this.y + 7,this.radius,this.radius);
    stroke('#fffced');
    strokeWeight(8);
    fill(this.color);
    ellipse(this.x,this.y ,this.radius,this.radius);
    //strokeWeight(0);
  }
}
