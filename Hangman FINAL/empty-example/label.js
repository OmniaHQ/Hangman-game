class label{
  constructor(_x, _y, _c, _s, _f, _t){
    this.x = _x;
    this.y = _y;
    this.yLimit = _y - 4 ;
    this.color = _c;
    this.size = _s;
    this.font = _f;
    this.text = _t;
    this.speedY = 0.5;
    this.isHovered = 0;
  }
  show(){
    if ( this.isHovered ){
      if (this.y >= this.yLimit)
        this.y -= this.speedY ;
    }else{
      if (this.y < this.yLimit + 4)
        this.y += this.speedY ;
    }
    textFont(this.font);
    textSize(this.size);
    fill(this.color);
    text(this.text, this.x, this.y);
  }

}
