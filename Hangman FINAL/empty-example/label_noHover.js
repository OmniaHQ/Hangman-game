class label_noHover{
  constructor(_x, _y, _c, _s, _f, _t){
    this.x = _x;
    this.y = _y;
    this.color = _c;
    this.size = _s;
    this.font = _f;
    this.text = _t;

  }
  show(){
    textFont(this.font);
    textSize(this.size);
    fill(this.color);
    text(this.text, this.x, this.y);
  }

}
