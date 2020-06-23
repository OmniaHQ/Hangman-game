// var background_img, logo_img;
// var play_icon, exit_icon;
// var folks_bold, folks_heavy, folks_light, folks_normal, jelle_roman;
// var play_btn, changeuser_btn, usertab_btn, exit_btn, description_btn;
// var _lbl1, username_lbl, best_lbl, changeplayer_lbl, play_lbl, exit_lbl, description_lbl;
// var play_icn, exit_icn;
function mainMenu() {
  this.isVisible = 1;
  this.isClicked = function() {
    if (sound_on.isHovered){
      sound_state = 1;
      audio.currentTime = 0;
      //audio.play();
    }
    if (sound_off.isHovered)
      sound_state = 0;
    if (exit_btn.isHovered) {
      window.close();
    }
    else if (play_btn.isHovered) {
       if(users.length != 0){
         game_details_menu.isVisible = 1;
         this.isVisible = 0;
         audio.currentTime = 0;
         audio.pause();
       }
    }
    else if ( changeuser_btn.isHovered ){
      this.isVisible = 0;
      user_list_menu.isVisible = 1;
    }
    else if(description_btn.isHovered){
      description_.isVisible = 1;
      this.isVisible = 0;
    }
  }
  this.initialize = function() {
    background_img = loadImage("assets/img/background.png");
    logo_img = loadImage("assets/img/Logo.png");
    play_icon = loadImage("assets/Icons/play.png");
    exit_icon = loadImage("assets/Icons/exit.png");
    soundon_icon = loadImage("assets/Icons/soundwhite.png");
    soundoff_icon = loadImage("assets/Icons/mutewhite.png");
    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
    folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
    folks_light = loadFont("assets/fonts/Folks-Light.ttf");
    folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
    play_btn = new button(630, 640, 290, 47, 23.5, 1, '#009bed', 745 + 10, 620 + 55, '#FFFCED', 34, folks_bold, 'PLAY');
    changeuser_btn = new button(630.52, 455.71, 285.65, 46.62, 23.5, 1, '#addc00', 680, 487, '#52425d', 25, folks_bold, 'CHANGE PLAYER');
    usertab_btn = new button_noHover(589, 313, 366, 172, 15, 1, '#e6e2d6');
    exit_btn = new button(1362, 679, 146, 42, 21, 1, '#ff6a63', 1421, 710, '#FFFCED', 30.37, folks_bold, 'EXIT');
    description_btn = new button(630.52, 550, 285.65, 46.62, 23.5, 1, '#addc00', 700, 583, '#52425d', 25, folks_bold, 'DESCRIPTION');

    _lbl = new label_noHover(668, 268, '#52425d', 32.58, folks_bold, 'Current Player');
    // 665
    // 430
    username_lbl = new label_noHover(665, 385, '#52425d', 60, folks_bold, 'No User');
    best_lbl = new label_noHover(690, 430, '#FF6A63', 34.46, folks_bold, 'BEST : -');

    play_icn = new icon(play_icon, 700 + 10, 587 + 55, 40, 40);
    exit_icn = new icon(exit_icon, 1380, 685, 29, 29);

    soundon_icn = new icon(soundon_icon, 1400+15-10+5, 60, 29, 29);
    soundoff_icn = new icon(soundoff_icon, 1320+20+10, 60, 29, 29);

    sound_on = new button(1400,50,50,50,20,0,'#ADDC00',680,487,'#52425d',25,folks_bold,'');
    sound_off = new button(1338,50,50,50,20,0,'#ADDC00',680,487,'#52425d',25,folks_bold,'');
  }
  this.show = function() {

    if (this.isVisible) {
      if ( !users.length ){
        username_lbl.text = 'No User';
        best_lbl.text = "BEST : - ";
      }
      if ( users.length != 0)
        username_lbl.text = users[current_User].Name;
      if ( users.length != 0)
        best_lbl.text = "BEST : "+ users[current_User].Score;
      image(background_img, 0, 0);
      image(logo_img, 524, 54);


      exit_btn.show();
      usertab_btn.show();
      changeuser_btn.show();
      play_btn.show();
      description_btn.show();


      exit_btn._lbl.show();
      changeuser_btn._lbl.show();
      play_btn._lbl.show();
      description_btn._lbl.show();

      _lbl.show();
      username_lbl.show();
      best_lbl.show();

      if (sound_off.isHovered)
        soundoff_icn.isHovered = 1;
      else
        soundoff_icn.isHovered = 0;

      if (sound_on.isHovered)
        soundon_icn.isHovered = 1;
      else
        soundon_icn.isHovered = 0;

      if (play_btn.isHovered)
        play_icn.isHovered = 1;
      else
        play_icn.isHovered = 0;
      play_icn.show();

      if (exit_btn.isHovered)
        exit_icn.isHovered = 1;
      else
        exit_icn.isHovered = 0;
      exit_icn.show();
      if ( sound_state ){
        sound_on.color = '#ff6a63';
        sound_off.color = '#addc00';
      }else {
        sound_off.color = '#ff6a63';
        sound_on.color = '#addc00';
      }
      sound_on.show();
      sound_off.show();
      soundon_icn.show();
      soundoff_icn.show();

      if ( users.length == 0 && play_btn.isHovered){
        make_user_lbl = new label (900, 450, '#ff6a63', 30, jelle_roman, '!!!' );
         make_user_lbl.show();
      }
    }

  }
}
