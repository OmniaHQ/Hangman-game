var shiftx  = 330 ;
function gamePage(){
  this.isVisible = 0;
  this.acceptingInput = 1;
  this.handleKeys = function() {
    if (game_page.acceptingInput){
      key = key.toUpperCase();
      if (checkAccepted(key)){
        game_progress_input += key;
        for(var i = 0 ; i < game_Row1.length ; i++){
          if ( key == game_Row1[i]._lbl.text ){
            game_Row1_visible[i] = 0;
            last_click_frame = frameCount;
            isLastClickRight = update_word(game_Row1[i]._lbl.text);
          }
        }
        for(var i = 0 ; i < game_Row2.length ; i++){
          if ( key == game_Row2[i]._lbl.text ){
            game_Row2_visible[i] = 0;
            last_click_frame = frameCount;
            isLastClickRight = update_word(game_Row2[i]._lbl.text);
          }
        }
        for(var i = 0 ; i < game_Row3.length ; i++){
          if ( key == game_Row3[i]._lbl.text ){
            game_Row3_visible[i] = 0;
            last_click_frame = frameCount;
            isLastClickRight = update_word(game_Row3[i]._lbl.text);
          }
        }
      }
    }
  }
  this.isClicked = function(){
    if ( hint_btn.isHovered ){
      var random_idx = parseInt(random(0,play_word.length)) ;
      if ( hint_count ){
        update_word(play_word[random_idx]);
        hint_count--;

      for ( var i = 0 ; i < game_Row1.length ; i++ )
        if (game_Row1[i]._lbl.text == play_word[random_idx])
          game_Row1_visible[i] = 0;
      for ( var i = 0 ; i < game_Row2.length ; i++ )
        if (game_Row2[i]._lbl.text == play_word[random_idx])
          game_Row2_visible[i] = 0;
      for ( var i = 0 ; i < game_Row3.length ; i++ )
        if (game_Row3[i]._lbl.text == play_word[random_idx])
          game_Row3_visible[i] = 0;
        }
    }
    if(game_back_btn.isHovered){
      this.isVisible = 0;
      game_details_menu.isVisible = 1;
      score_pop_up.isVisible = 0;
      resetGameMode();
    }
  else{
    if (this.acceptingInput){
      for(var i = 0 ; i < game_Row1.length ; i++)
        if(game_Row1[i].isHovered && game_Row1_visible[i]){
          game_Row1_visible[i] = 0, update_word(game_Row1[i]._lbl.text);
          last_click_frame = frameCount;
          isLastClickRight = update_word(game_Row1[i]._lbl.text);
          game_progress_input += game_Row1[i]._lbl.text;
        }
      for(var i = 0 ; i < game_Row2.length ; i++)
        if(game_Row2[i].isHovered && game_Row2_visible[i]){
          game_Row2_visible[i] = 0, update_word(game_Row2[i]._lbl.text);
          last_click_frame = frameCount;
          isLastClickRight = update_word(game_Row2  [i]._lbl.text);
          game_progress_input += game_Row2[i]._lbl.text;
        }
      for(var i = 0 ; i < game_Row3.length ; i++)
        if(game_Row3[i].isHovered && game_Row3_visible[i]){
          game_Row3_visible[i] = 0, update_word(game_Row3[i]._lbl.text);
          last_click_frame = frameCount;
          isLastClickRight = update_word(game_Row3[i]._lbl.text);
          game_progress_input += game_Row3[i]._lbl.text;
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

    male_dead = loadImage("assets/img/male/dead.png");
    male_correct = loadImage("assets/img/male/correct.png");
    male_lose = loadImage("assets/img/male/lose.png");
    male_waiting = loadImage("assets/img/male/Waiting.png");
    male_win = loadImage("assets/img/male/win.png");
    male_wrong = loadImage("assets/img/male/wrong.png");

    sticker_boom = loadImage("assets/img/sticker/boom.png");
    sticker_cool = loadImage("assets/img/sticker/cool.png");
    sticker_hey = loadImage("assets/img/sticker/hey.png");
    sticker_oh = loadImage("assets/img/sticker/oh.png");
    sticker_ok = loadImage("assets/img/sticker/ok.png");
    sticker_oops = loadImage("assets/img/sticker/oops.png");
    sticker_smile = loadImage("assets/img/sticker/smile.png");
    sticker_wow = loadImage("assets/img/sticker/wow.png");

    game_keyboard = new button_noHover(100+shiftx, 467, 643, 234, 30, 1,'#fffced');
    game_text_btn = new button_noHover(160+shiftx, 343, 517, 99, 30, 0,'#ff6a63');
    game_lbl = new label_noHover(210+shiftx+140,390,'#fffced',20,jelle_roman,'_A_');
    background_img = loadImage("assets/img/background.png");
    game_back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');
    lives_lbl = new label(1230,50,'#52425d',35,jelle_roman,'test');
    hints_lbl = new label(1230,150,'#52425d',35,jelle_roman,'Hints :');
    cat_info_lbl = new label(1130,100,'#52425d',35,jelle_roman,'Category : '+cat_names_access[chosenCatInd]);
    game_Row1 = [];
    game_Row1_visible = [];
    game_Row2 = [];
    game_Row2_visible = [];
    game_Row3 = [];
    game_Row3_visible = [];
    qwerty = ['Q','W','E','R','T','Y','U','I','O','P',
              'A','S','D','F','G','H','J','K','L',
              'Z','X','C','V','B','N','M'];


    for(var i = 0 ; i < 10 ; i++ ){
      var temp = 62;
      if( qwerty[i] == 'W' ){
        char = new button(118+(i*temp)+shiftx,498,48,52.32,15,0,'#addc00',126+(i*temp)-3+shiftx,538,'#52425d',36.38,jelle_roman,qwerty[i]);
      }
      else if( qwerty[i] == 'T' || qwerty[i] == 'Y' || qwerty[i] == 'P' || qwerty[i] == 'E' || qwerty[i] == 'R' ){
        char = new button(118+(i*temp)+shiftx, 498, 48, 52.32 ,15 , 0, '#addc00', 126+(i*temp)+3+shiftx, 538, '#52425d', 36.38, jelle_roman,qwerty[i] );
      }
      else if( qwerty[i] == 'I' ){
        char = new button(118+(i*temp)+shiftx, 498, 48, 52.32, 15, 0, '#addc00', 126+(i*temp)+9+shiftx, 538, '#52425d', 36.38, jelle_roman,qwerty[i]);
      }
        else char = new button(118+(i*temp)+shiftx, 498, 48, 52.32, 15, 0, '#addc00', 126+(i*temp)+shiftx, 538, '#52425d', 36.38, jelle_roman,qwerty[i]);
      game_Row1.push(char);
      game_Row1_visible.push(1);
    }

    for(var i=0; i<9; i++)
    {
      var temp = 62;
      if( qwerty[i+10] == 'L' || qwerty[i+10] == 'F' ){
        char = new button(118+(i*temp)+31+shiftx, 498+temp, 48, 52.32, 15, 0, '#addc00', 126+(i*temp)+37+shiftx, 538+temp, '#52425d', 36.38, jelle_roman,qwerty[i+10]);
      }
      else
        char = new button(118+(i*temp)+31+shiftx, 498+temp, 48, 52.32, 15, 0,'#addc00',126+(i*temp)+31+shiftx,538+temp,'#52425d',36.38,jelle_roman,qwerty[i+10]);
      game_Row2.push(char);
      game_Row2_visible.push(1);
    }
    for(var i=0; i<7; i++)
    {
      var temp = 62;
      if(qwerty[i+19]=='M')
      {
        char = new button(118+(i*temp)+91+shiftx,498+(2*temp),48,52.32,15,0,'#addc00',126+(i*temp)+88+shiftx,538+(2*temp),'#52425d',36.38,jelle_roman,qwerty[i+19]);
      }
      else if(qwerty[i+19]=='X')
      {
        char = new button(118+(i*temp)+91+shiftx,498+(2*temp),48,52.32,15,0,'#addc00',126+(i*temp)+95+shiftx,538+(2*temp),'#52425d',36.38,jelle_roman,qwerty[i+19]);
      }
      else if(qwerty[i+19]=='Z'||qwerty[i+19]=='V')
      {
        char = new button(118+(i*temp)+91+shiftx,498+(2*temp),48,52.32,15,0,'#addc00',126+(i*temp)+93+shiftx,538+(2*temp),'#52425d',36.38,jelle_roman,qwerty[i+19]);

      }
      else
        char = new button(118+(i*temp)+91+shiftx,498+(2*temp),48,52.32,15,0,'#addc00',126+(i*temp)+91+shiftx,538+(2*temp),'#52425d',36.38,jelle_roman,qwerty[i+19]);
      game_Row3.push(char);
      game_Row3_visible.push(1);
    }
    hint_btn = new button(1362, 679, 146, 42, 21, 1, '#ff6a63', 1395, 710, '#FFFCED', 30.37, jelle_roman, 'HINT' );
  }
  this.show = function(){
    if (this.isVisible){
      checkLives();
      game_lbl.text = play_progress ;
      image(background_img, 0, 0);
      if ( checkWin() && real_lives_score )
        current_char_state = male_win ;
      else if ( real_lives_score )
        current_char_state = male_waiting ;
      else if (real_lives_score <= 0)
        current_char_state = male_dead ;

      if ( frameCount >= last_click_frame && frameCount < last_click_frame + 60 && isLastClickRight){
        current_char_state =  male_correct ;
        image(sticker_wow,765.5-260+20+80+400,345-160+240-400+80,320,320);
        if ( sound_state ){
          if(!audio_correct_isPlaying){
            audio_correct_isPlaying = 1;
            audio_correct.currentTime = 62.3;
            audio_correct.play();
          }
        }
      }
      if ( frameCount >= last_click_frame && frameCount < last_click_frame + 60 && !isLastClickRight){
        current_char_state = male_lose ;
        image(sticker_oops,765.5-260+20+80+400,345-160+240-400+80,320,320);
        if(!audio_wrong_isPlaying && sound_state){
          audio_wrong_isPlaying = 1;
          audio_wrong.currentTime = 18.9;
          audio_wrong.play();
        }
      }
      if ( audio_correct.currentTime >= 64 ){
        audio_correct.pause();
        audio_correct_isPlaying = 0;
      }
      if ( audio_wrong.currentTime >= 20.4 ){
        audio_wrong.pause();
        audio_wrong_isPlaying = 0;
      }
      image(current_char_state,570,-30,400,400);

      game_back_btn.show();
      game_keyboard.show();
      game_back_btn._lbl.show();
      game_text_btn.show();
      for(var i=0; i<game_Row1.length; i++)
      {
        if (game_Row1_visible[i]){
          game_Row1[i].show();
          game_Row1[i]._lbl.show();
        }
      }
      for(var i=0; i<game_Row2.length; i++)
      {
        if (game_Row2_visible[i]){
          game_Row2[i].show();
          game_Row2[i]._lbl.show();
        }
      }
      for(var i=0; i<game_Row3.length; i++)
      {
        if (game_Row3_visible[i]){
          game_Row3[i].show();
          game_Row3[i]._lbl.show();
        }
      }
      game_lbl.show();
      checkLoseOrWin();
      lives_lbl.text = 'Lives : ' + real_lives_score;
      lives_lbl.show();
      cat_info_lbl.show();
      hint_btn.show();
      hint_btn._lbl.show();
      hints_lbl.text = 'Hints : ' + hint_count ;
      hints_lbl.show();
    }
  }
}
