class icon {
  constructor(_i, _x, _y, _w, _h){
    this._icon = _i;
    this.x = _x;
    this.y = _y;
    this.yLimit = _y - 4 ;
    this.width = _w;
    this.height = _h;
    this.speedY = 0.5;
    this.isHovered = 0;
  }

  show(){
    if ( this.isHovered && !mouseIsPressed ){
      if (this.y >= this.yLimit)
        this.y -= this.speedY ;
    }else{
      if (this.y < this.yLimit + 4)
        this.y += this.speedY ;
    }
    image(this._icon, this.x, this.y, this.width, this.height);
  }
}
