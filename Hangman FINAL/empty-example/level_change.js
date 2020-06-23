function level_change(){
  this.isVisible = 0;
  this.isClicked = function(){
    if(lvl_back_btn.isHovered){
      this.isVisible = 0;
      game_details_menu.isVisible = 1;
    }
    else if ( lvl_easy_btn.isHovered ){
        selected_level = 'Easy';
        chosenLevelindex = 0;
        game_details_menu.selectWord();
        this.isVisible = 0;
        game_details_menu.isVisible = 1;
    }
    else if ( lvl_med_btn.isHovered ){
        selected_level = 'Medium';
        chosenLevelindex = 1;
        game_details_menu.selectWord();
        this.isVisible = 0;
        game_details_menu.isVisible = 1;
    }
    else if ( lvl_hard_btn.isHovered ){
        selected_level = 'Hard';
        chosenLevelindex = 2;
        game_details_menu.selectWord();
        this.isVisible = 0;
        game_details_menu.isVisible = 1;
    }

  }

  this.initialize = function(){
    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
    folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
    folks_light = loadFont("assets/fonts/Folks-Light.ttf");
    folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
    background_img = loadImage("assets/img/background.png");

    lvl_playwhite = new button_noHover(408, 380, 690.34, 233.83, 30, 1, '#FFFCED');
    lvl_playgrey = new button_noHover(443, 420, 621.4, 162.16, 30, 0, '#e6e2d6');
    lvl_game_details_btn = new button_noHover(461, 407, 160, 39, 20, 0, '#addc00');
    lvl_game_details_lbl = new label_noHover(504, 435,'#52425d', 24, jelle_roman, 'LEVEL');
    lvl_back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');
    lvl_circle_plus = new circle_btn(840, 310, 80, '#e6e2d6', 812, 343, '#009bed', 100,  jelle_roman, '+');

    lvl_easy_btn = new button(480-5, 485, 160, 50, 20, 1, '#009bed', 500-5, 520, '#fffced', 30,  jelle_roman, '   Easy');
    lvl_med_btn = new button(480+200-15, 485, 180, 50, 20, 1, '#f39c12', 500+200-9, 520, '#fffced', 30,  jelle_roman, 'Medium');
    lvl_hard_btn  = new button(480+200+200-5, 485, 160, 50, 20, 1, '#e84118', 500+400, 520, '#fffced', 30,  jelle_roman, '  Hard');
  }
  this.show = function(){
    if (this.isVisible){
      image(background_img,0,0);
      lvl_playwhite.show();
      lvl_playgrey.show();
      lvl_game_details_btn.show();
      lvl_back_btn.show();
      lvl_game_details_lbl.show();
      lvl_back_btn._lbl.show();
      fill('#fffced');
      ellipse(755, 210, 274, 274);
      fill('#e6e2d6');
      ellipse(755, 210, 252, 252);
      if ( parseInt(users[current_User].Pic) == 0 )
        image(avatars[0],648,95,210,210);
      else
        image(avatars[parseInt(users[current_User].Pic)], 605 , 61, 294, 294);
      // lvl_circle_plus.show();
      // lvl_circle_plus._lbl.show();

      lvl_easy_btn.show();
      lvl_easy_btn._lbl.show();
      lvl_med_btn.show();
      lvl_med_btn._lbl.show();
      lvl_hard_btn.show();
      lvl_hard_btn._lbl.show();

    }
  }
}
