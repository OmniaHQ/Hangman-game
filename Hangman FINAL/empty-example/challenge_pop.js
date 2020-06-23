var cp_categorynames = [' Animals','  Nature','  Sports','Science','    Food','Countries',' Movies','Random'];
var cat_names_access = ['Animals','Nature','Sports','Science','Food','Countries','Movies','Random'];
var cp_cat_category_btn = [];
var shifty = -250;
function challenge_pop(){

  this.isVisible = 0;
  this.isClicked = function(){
    for ( var i = 0 ; i < 8 ; i++ ){
      if ( cp_cat_category_btn[i].isHovered ){
        if(idx_challengeCat == i)
          idx_challengeCat = -1;
        else
          idx_challengeCat = i;
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

    cp_cat_playwhite = new button_noHover(408, 380+shifty, 690.34, 233.83, 30, 1, '#FFFCED');
    cp_cat_playgrey = new button_noHover(443, 420+shifty, 621.4, 162.16, 30, 0, '#e6e2d6');
    cp_cat_game_details_btn = new button_noHover(461, 407+shifty, 217, 39, 20, 0, '#addc00');
    cp_cat_game_details_lbl = new label_noHover(500, 435+shifty,'#52425d', 23, jelle_roman, 'CATEGORY');
    cp_cat_back_btn = new button(47, 30+shifty, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62+shifty, '#FFFCED', 21.38, jelle_roman, 'BACK');

    for ( var i = 0 ; i < 8 ; i++ ){
      var tempi = i % 4 ;
      var tempx = 479 + (tempi*120) + (tempi*20);
      var tempy = ( i < 4 ) ? 460 : 520;
      var tempxlbl = 495 + (tempi*141) ;
      var tempylbl = ( i < 4 ) ? 482 : 542;
      var tempcolor = '#009bed';
      var tempname = cp_categorynames[i];
      if ( i == 5 ) tempxlbl -= 5;
      // if ( i == 7 ) tempcolor = '#ff6a63';
      var cp_tempcat = new button(tempx,tempy+shifty,119,33,16.5,1,tempcolor,tempxlbl, tempylbl+shifty, '#FFFCED', 19, jelle_roman, tempname);
      cp_cat_category_btn.push(cp_tempcat);
    }
  }

  this.show = function(){
    if (this.isVisible){
      // image(background_img,0,0);
      cp_cat_playwhite.show();
      cp_cat_playgrey.show();
      cp_cat_game_details_btn.show();
      //cp_cat_back_btn.show();
      cp_cat_game_details_lbl.show();
      //cp_cat_back_btn._lbl.show();

      for ( var i = 0 ; i < cp_cat_category_btn.length ; i++ ){
        // if (cp_cat_category_btn[i].isClicked){new button(tempx,tempy+shifty,119,33,16.5,1,'#ff6a63',tempxlbl, tempylbl+shifty, '#FFFCED', 19, jelle_roman, tempname);}
        if( i == idx_challengeCat )
          cp_cat_category_btn[i].color = '#ff6a63';
        else
          cp_cat_category_btn[i].color = '#009bed';
        cp_cat_category_btn[i].show();
        cp_cat_category_btn[i]._lbl.show();

        if ( idx_challengeCat == -1 && wordpop_add_btn.isHovered){
          word_pop = new label (690, 180, '#ff6a63', 30, jelle_roman, '!!!' );
          word_pop.show();
        }
      }
    }
  }
}
