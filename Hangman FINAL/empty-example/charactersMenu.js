var cm_char_btns = [];
var cm_char_inner_btns = [];
var cm_char_icn = [];
var cm_char_index = -1;
function charactersMenu(){
  this.isVisible = 0;
  this.isClicked = function(){
    if ( cm_char_back_btn.isHovered ){
      this.isVisible = 0;
      game_details_menu.isVisible = 1;
      cm_temp_ind_ = current_User + 1 ;
      if ( cm_char_index == -1 )
        cm_char_index = 0;
      users[current_User].Pic = cm_char_index + 1;
      cm_temp_valueToAdd =
        users[current_User].Pic+','+
        users[current_User].Name+','+
        users[current_User].Score+','+
        users[current_User].challenge1Cat+','+
        users[current_User].challenge1Word+','+
        users[current_User].challenge2Cat+','+
        users[current_User].challenge2Word+','+
        users[current_User].challenge3Cat+','+
        users[current_User].challenge3Word+','+
        users[current_User].challenge1User+','+
        users[current_User].challenge2User+','+
        users[current_User].challenge3User;
        localStorage.setItem("User"+cm_temp_ind_,
            cm_temp_valueToAdd);
        cm_char_index = -1;
    }
    for(var i = 0 ; i < 8 ; i++ ){
      if( cm_char_btns[i].isHovered ){
        if( cm_char_index == i )
          cm_char_index = -1;
        else
          cm_char_index = i;
      }
    }
  }
  this.initialize = function(){
    avatar0 = loadImage("assets/img/avatars/avatar0.png");
    avatar1 = loadImage("assets/img/avatars/avatar1.png");
    avatar2 = loadImage("assets/img/avatars/avatar2.png");
    avatar3 = loadImage("assets/img/avatars/avatar3.png");
    avatar4 = loadImage("assets/img/avatars/avatar4.png");
    avatar5 = loadImage("assets/img/avatars/avatar5.png");
    avatar6 = loadImage("assets/img/avatars/avatar6.png");
    avatar7 = loadImage("assets/img/avatars/avatar7.png");
    avatar8 = loadImage("assets/img/avatars/avatar8.png");

    avatars.push(avatar0);
    avatars.push(avatar1);
    avatars.push(avatar2);
    avatars.push(avatar3);
    avatars.push(avatar4);
    avatars.push(avatar5);
    avatars.push(avatar6);
    avatars.push(avatar7);
    avatars.push(avatar8);

    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
    background_img = loadImage("assets/img/background.png");
    cm_char_back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');

    for(var i = 0 ; i < 8 ; i++ ){
      var tempi = i % 4 ;
      var tempx = 105 + (tempi*350);
      var tempy = ( i < 4 ) ? 90 : 400;

      cm_temp_char = new button(tempx, tempy, 250, 250, 15, 1, '#FFFCED', 100, 90, '#FFFCED', 0, jelle_roman, '' );
      cm_temp_inner = new button(tempx+10, tempy+10, 230, 230, 15, 0, '#e6e2d6',100, 90, '#e6e2d6', 0, jelle_roman, '');
      if(i == 0) {av1_icn = new icon(avatar1, tempx+10, tempy+10, 230, 230);}
      if(i == 1) {av1_icn = new icon(avatar2, tempx+10, tempy+10, 230, 230);}
      if(i == 2) {av1_icn = new icon(avatar3, tempx+10, tempy+10, 230, 230);}
      if(i == 3) {av1_icn = new icon(avatar4, tempx+10, tempy+10, 230, 230);}
      if(i == 4) {av1_icn = new icon(avatar5, tempx+10, tempy+10, 230, 230);}
      if(i == 5) {av1_icn = new icon(avatar6, tempx+10, tempy+10, 230, 230);}
      if(i == 6) {av1_icn = new icon(avatar7, tempx+10, tempy+10, 230, 230);}
      if(i == 7) {av1_icn = new icon(avatar8, tempx+10, tempy+10, 230, 230);}
      cm_char_icn.push(av1_icn);
      cm_char_btns.push(cm_temp_char);
      cm_char_inner_btns.push(cm_temp_inner)
    }

  }
  this.show = function(){
    if(this.isVisible){
      image(background_img,0,0);

      cm_char_back_btn.show();
      cm_char_back_btn._lbl.show();
      for( var i = 0 ; i < cm_char_btns.length ; i++){

        if(i == cm_char_index)
          cm_char_btns[i].color = '#ff6a63';
        else
          cm_char_btns[i].color = '#FFFCED';

        cm_char_btns[i].show();
        cm_char_inner_btns[i].show();
        if (cm_char_btns[i].isHovered)
          cm_char_icn[i].isHovered = 1;
        else
          cm_char_icn[i].isHovered = 0;
        cm_char_icn[i].show();
      }
    }
  }
}
