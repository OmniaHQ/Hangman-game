class button_noHover {
  constructor(_x , _y, _w , _h, _r, _f, _c){
    this.x = _x;
    this.y = _y;
    this.width = _w;
    this.height = _h;
    this.border_radius = _r;
    this.shadowed = _f;
    this.color = _c;
  }
  show(){
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
