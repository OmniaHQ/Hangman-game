// var folks_bold, folks_heavy, folks_light, folks_normal, jelle_roman;
// var cat_category_btn = [];
var categoryNames = [' Animals','  Nature','  Sports','Science','    Food','Countries',' Movies','Random'];
function categoryChangePanel(){
  this.isVisible = 0;
  this.isClicked = function(){
    if ( cat_back_btn.isHovered ){
      this.isVisible = 0;
      game_details_menu.isVisible = 1;
    }
    else{
      for ( var i = 0 ; i < 8 ; i++){
        if ( cat_category_btn[i].isHovered ){
          selected_category = cat_category_btn[i]._lbl.text;
          chosenCatInd = i;
          game_details_menu.selectWord();
          this.isVisible = 0;
          game_details_menu.isVisible = 1;
          cat_info_lbl.text = "Category : "+ cat_names_access[chosenCatInd];
        }
      }
    }
  }

  this.initialize = function(){
    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
    folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
    folks_light = loadFont("assets/fonts/Folks-Light.ttf");
    folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
    background_img = loadImage("assets/img/background.png");

    cat_playwhite = new button_noHover(408, 380, 690.34, 233.83, 30, 1, '#FFFCED');
    cat_playgrey = new button_noHover(443, 420, 621.4, 162.16, 30, 0, '#e6e2d6');
    cat_game_details_btn = new button_noHover(461, 407, 217, 39, 20, 0, '#addc00');
    cat_game_details_lbl = new label_noHover(500, 435,'#52425d', 23, jelle_roman, 'CATEGORY');
    cat_back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');
    cat_circle_plus = new circle_btn(840, 310, 80, '#e6e2d6', 812, 343, '#009bed', 100,  jelle_roman, '+');

    for ( var i = 0 ; i < 8 ; i++ ){
      var tempi = i % 4 ;
      var tempx = 479 + (tempi*120) + (tempi*20);
      var tempy = ( i < 4 ) ? 460 : 520;
      var tempxlbl = 495 + (tempi*141) ;
      var tempylbl = ( i < 4 ) ? 482 : 542;
      var tempcolor = '#009bed';
      var tempname = categoryNames[i];
      if ( i == 5 ) tempxlbl -= 5;
      if ( i == 7 ) tempcolor = '#ff6a63';
      var tempcat = new button(tempx,tempy,119,33,16.5,1,tempcolor,tempxlbl, tempylbl, '#FFFCED', 19, jelle_roman, tempname);
      cat_category_btn.push(tempcat);
    }
  }
  this.show = function(){
    if (this.isVisible){
      image(background_img,0,0);
      cat_playwhite.show();
      cat_playgrey.show();
      cat_game_details_btn.show();
      cat_back_btn.show();
      cat_game_details_lbl.show();
      cat_back_btn._lbl.show();
      fill('#fffced');
      ellipse(755, 210, 274, 274);
      fill('#e6e2d6');
      ellipse(755, 210, 252, 252);
      if ( parseInt(users[current_User].Pic) == 0 )
        image(avatars[0],648,95,210,210);
      else
        image(avatars[parseInt(users[current_User].Pic)], 605 , 61, 294, 294);
      // cat_circle_plus.show();
      // cat_circle_plus._lbl.show();

      for ( var i = 0 ; i < cat_category_btn.length ; i++ ){
        cat_category_btn[i].show();
        cat_category_btn[i]._lbl.show();
      }
    }
  }
}
