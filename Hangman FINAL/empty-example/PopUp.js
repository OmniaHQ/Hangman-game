function PopUp (){

  this.isVisible = 0 ;
  this.handleKeys = function(){

      if ( key == 'Enter' && pop_input_name != '' && pop_input_name.length <= 14){
        enter_name.isVisible = 0;
        user_list_menu.isVisible = 1;
        temp_ind = localStorage.length + 1;
        temp_text = '0,';
        temp_text += pop_input_name;
        temp_text += ",0,NO,NO,NO,NO,NO,NO,NOUSER,NOUSER,NOUSER";
        localStorage.setItem("User"+temp_ind,temp_text);
        pop_input_name = '';
      }
      if ( pop_input_name.length < 14 && checkAccepted(key)){
          pop_input_name += key;
      }
      if (key == 'Backspace')
        pop_input_name = pop_input_name.slice(0,pop_input_name.length - 1 );
  }
  this.isClicked = function() {
    if(pop_add_btn.isHovered  && pop_input_name.length <= 14){

      enter_name.isVisible = 0;
      user_list_menu.isVisible = 1;
      temp_ind = localStorage.length + 1;
      temp_text = '0,';
      temp_text += pop_input_name;
      temp_text += ",0,NO,NO,NO,NO,NO,NO,NOUSER,NOUSER,NOUSER";
      localStorage.setItem("User"+temp_ind,temp_text);
      pop_input_name = '';
    }
    else if(pop_back_btn.isHovered){
      enter_name.isVisible = 0;
      user_list_menu.isVisible = 1;
    }
  }
  this.initialize = function(){
    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
folks_light = loadFont("assets/fonts/Folks-Light.ttf");
folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
background_img = loadImage("assets/img/background.png");

pop_enter_rect = new button_noHover(465.5, 275, 600, 200, 20, 0, '#FFFCED');
pop_innerenter_rect = new button_noHover(765.5-300+10, 375-100+10, 580, 180, 20, 0, '#E6E2D6');
pop_availableplayers = new button_noHover(600, 218, 325.28, 100.1, 30, 0 , '#009bed' );
pop_availableplayers_lbl = new label(630, 260, '#FFFCED',30 , jelle_roman, 'Enter Your Name');
pop_enter_name = new button_noHover(565, 310, 400, 70, 10,0 , '#919191');
pop_add_btn = new button(710, 400, 120, 35, 10, 1, '#addc00', 732, 426, '#52425d', 20, jelle_roman, 'Submit');
pop_name_lbl = new label(615, 355, '#FFFCED', 28, jelle_roman, '');
pop_note_lbl = new label(855, 450, '#FF6a63', 13  , jelle_roman, 'Name Shouldn\'t Exceed 14');
pop_back_btn = new button(44, 33, 114.94, 47.7, 23.58, 0, '#52425d',72 , 65, '#FFFCED',23 , jelle_roman, 'Back' );

  }
  this.show = function(){
    if(this.isVisible){
      image(background_img,0,0);
    pop_name_lbl.text = pop_input_name;
    pop_back_btn.show();
    pop_back_btn._lbl.show();
                pop_availableplayers.show();
                pop_availableplayers_lbl.show();
                pop_enter_rect.show();
                pop_innerenter_rect.show();
                pop_enter_name.show();
                pop_add_btn.show();
                pop_add_btn._lbl.show();
                pop_name_lbl.show();
                if (pop_input_name.length >= 14 ){
                  pop_note_lbl.show();
                }
  }
}

}
