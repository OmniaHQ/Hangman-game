wordpop_input_name = '';
var _shifty = 140;
var _shiftx = -30;
var anothershity = 10;
var anothershitx = 20;
function wordEnterPopUp (){

  this.isVisible = 0 ;
  this.handleKeys = function(){
      if ( key == 'Enter' && wordpop_input_name != '' && wordpop_input_name.length <= 14){

      }
      if ( wordpop_input_name.length < 14 && checkAccepted(key)){
          wordpop_input_name += key;
      }
      if (key == 'Backspace')
        wordpop_input_name = wordpop_input_name.slice(0,wordpop_input_name.length - 1 );
  }
  this.isClicked  = function() {
    if(wordpop_add_btn.isHovered  && wordpop_input_name.length <= 14){
      if( challenge_num(send_idx) == 1) {
        users[send_idx].challenge1Cat = cat_names_access[idx_challengeCat];
        users[send_idx].challenge1Word = wordpop_input_name;
        users[send_idx].challenge1User = users[current_User].Name ;
      }
      else if( challenge_num(send_idx) == 2) {
        users[send_idx].challenge2Cat = cat_names_access[idx_challengeCat];
        users[send_idx].challenge2Word = wordpop_input_name;
        users[send_idx].challenge2User = users[current_User].Name ;
      }
      else if( challenge_num(send_idx) == 3) {
        users[send_idx].challenge3Cat = cat_names_access[idx_challengeCat];
        users[send_idx].challenge3Word = wordpop_input_name;
        users[send_idx].challenge3User = users[current_User].Name ;
      }
      temp_valueToAdd =
      users[send_idx].Pic+','+
      users[send_idx].Name+','+
      users[send_idx].Score+','+
      users[send_idx].challenge1Cat+','+
      users[send_idx].challenge1Word+','+
      users[send_idx].challenge2Cat+','+
      users[send_idx].challenge2Word+','+
      users[send_idx].challenge3Cat+','+
      users[send_idx].challenge3Word+','+
      users[send_idx].challenge1User+','+
      users[send_idx].challenge2User+','+
      users[send_idx].challenge3User;

      temp_ind_ = send_idx + 1 ;
      localStorage.setItem("User"+temp_ind_,
          temp_valueToAdd);
      wordpop_input_name = '';
      challenge_pop_.isVisible = 0;
      challenge_pop_word.isVisible = 0;
      challenge_page.isVisible = 1;
    }
    if ( wordpop_back_btn.isHovered ){
      challenge_pop_.isVisible = 0;
      challenge_pop_word.isVisible = 0;
      challenge_page.isVisible = 1;
    }
  }
  this.initialize = function(){
    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
    folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
    folks_light = loadFont("assets/fonts/Folks-Light.ttf");
    folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
    background_img = loadImage("assets/img/background.png");

    wordpop_enter_rect = new button_noHover(408, 275+120, 690.34, 233.83, 30, 1, '#FFFCED');
    wordpop_innerenter_rect = new button_noHover(765.5-300+10+_shiftx, 375-100+10+_shifty, 621.4, 162.16+16, 30, 0, '#E6E2D6');
    wordpop_enter_name = new button_noHover(565+_shiftx+anothershitx, 310+_shifty+anothershity, 400, 70, 10,0 , '#919191');
    wordpop_add_btn = new button(710+_shiftx+anothershitx, 400+_shifty+anothershity, 120, 35, 10, 0, '#addc00', 732+_shiftx+anothershitx, 426+_shifty+anothershity, '#52425d', 20, jelle_roman, 'Submit');
    wordpop_name_lbl = new label(615+_shiftx+anothershitx, 355+_shifty+anothershity, '#FFFCED', 28, jelle_roman, '');
    wordpop_note_lbl = new label(855+_shiftx+anothershitx, 450+_shifty+anothershity, '#FF6a63', 13  , jelle_roman, 'Name Shouldn\'t Exceed 14');
    wordpop_note2_lbl = new label(855+_shiftx+anothershitx+16, 450+_shifty+anothershity-20, '#FF6a63', 20  , jelle_roman, '"Enter The Word"');
    wordpop_back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');

  }
  this.show = function(){
    if(this.isVisible){
      image(background_img,0,0);
      wordpop_name_lbl.text = wordpop_input_name;
      wordpop_enter_rect.show();
      wordpop_innerenter_rect.show();
      wordpop_enter_name.show();
      wordpop_add_btn.show();
      wordpop_add_btn._lbl.show();
      if (wordpop_input_name.length >= 14 ){
        wordpop_note_lbl.show();
      }
      wordpop_name_lbl.show();
      wordpop_note2_lbl.show();
      wordpop_back_btn.show();
      wordpop_back_btn._lbl.show();
    }
  }
}
