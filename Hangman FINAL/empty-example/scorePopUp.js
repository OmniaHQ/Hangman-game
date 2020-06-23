function scorePopUp (){

  this.isVisible = 0 ;
  this.isClicked = function() {
    if(score_pop_exit.isHovered)
      score_pop_up.isVisible = 0;
  }
  this.winOrLose = 'LOSE';
  this.initialize = function(){
    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
    folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
    folks_light = loadFont("assets/fonts/Folks-Light.ttf");
    folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
    lose_img = loadImage("assets/img/download.png");
    win_img = loadImage("assets/img/win.png");
    background_img = loadImage("assets/img/background.png");

    score_pop_rect = new button_noHover(765.5-260, 345 - 160, 520, 320, 20, 0, '#FFFCED');
    score_pop_inner_rect = new button_noHover(765.5-260+10, 345-160+10, 500, 300, 20, 0, '#E6E2D6');
    score_pop_exit =  new button(765.5-260+520-45-10,345 - 160+10,45,45,10,1,'#ff6a63', 765.5-260+520-87-10+20+40-10+3, 345-160+70-40+15 , '#FFFCED', 45,jelle_roman,'x' ) ;
  }
  this.show = function(){
    if(this.isVisible){
      // image(background_img,0,0);
      // score_pop_rect.show();
      // score_pop_inner_rect.show();
      if ( this.winOrLose == 'LOSE' )
        image(lose_img,765.5-260+20+80,345-160+240,320,320);
      else
        image(win_img,765.5-260+20+80+400,345-160+240-400,320,320);
      // score_pop_exit.show();
      // score_pop_exit._lbl.show();
  }
}

}
