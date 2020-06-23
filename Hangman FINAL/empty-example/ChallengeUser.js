var clg_challenge_send = [];

function ChallengeUser(){
  this.isVisible = 0;
  this.isClicked = function(){
    for ( var i = 0 ; i < users.length - 1 ; i++){
      if (clg_challenge_send[i].isHovered){
        this.isVisible = 0;
        challenge_pop_.isVisible = 1;
        challenge_pop_word.isVisible = 1;
        send_idx = get_index(clg_challenge_send[i]._lbl.text);
      }
    }
    if ( clg_back_btn.isHovered ){
      this.isVisible = 0;
      game_details_menu.isVisible = 1;
    }

    else if ( clg_refuse1.isHovered ){
      var temp_index = current_User + 1;
      var temp_value =
      users[current_User].Pic+','+
      users[current_User].Name+','+
      users[current_User].Score+','+
      users[current_User].challenge2Cat+','+
      users[current_User].challenge2Word+','+
      users[current_User].challenge3Cat+','+
      users[current_User].challenge3Word+','+
      'NO'+','+
      'NO'+','+
      users[current_User].challenge2User+','+
      users[current_User].challenge3User+','+
      'NO';
      localStorage.setItem("User"+temp_index,temp_value);
    }
    else if ( clg_refuse2.isHovered ){
      var temp_index = current_User + 1;
      var temp_value =
      users[current_User].Pic+','+
      users[current_User].Name+','+
      users[current_User].Score+','+
      users[current_User].challenge1Cat+','+
      users[current_User].challenge1Word+','+
      users[current_User].challenge3Cat+','+
      users[current_User].challenge3Word+','+
      'NO'+','+
      'NO'+','+
      users[current_User].challenge1User+','+
      users[current_User].challenge3User+','+
      'NO';
      localStorage.setItem("User"+temp_index,temp_value);
    }
    else if ( clg_refuse3.isHovered ){
      var temp_index = current_User + 1;
      var temp_value =
      users[current_User].Pic+','+
      users[current_User].Name+','+
      users[current_User].Score+','+
      users[current_User].challenge1Cat+','+
      users[current_User].challenge1Word+','+
      users[current_User].challenge2Cat+','+
      users[current_User].challenge2Word+','+
      'NO'+','+
      'NO'+','+
      users[current_User].challenge1User+','+
      users[current_User].challenge2User+','+
      'NO';
      localStorage.setItem("User"+temp_index,temp_value);
    }
    else if ( clg_correct1.isHovered ){
      var temp_index = current_User + 1;
      var temp_value =
      users[current_User].Pic+','+
      users[current_User].Name+','+
      users[current_User].Score+','+
      users[current_User].challenge2Cat+','+
      users[current_User].challenge2Word+','+
      users[current_User].challenge3Cat+','+
      users[current_User].challenge3Word+','+
      'NO'+','+
      'NO'+','+
      users[current_User].challenge2User+','+
      users[current_User].challenge3User+','+
      'NO';
      localStorage.setItem("User"+temp_index,temp_value);
      game_page.isVisible = 1;
      challenge_page.isVisible = 0;
      cat_info_lbl.text = "Category : "+ users[current_User].challenge1Cat;
      play_word = users[current_User].challenge1Word ;
      play_progress = "";
      for ( var i = 0 ; i < play_word.length ; i++)
        play_progress += ' _ ';

      play_word = play_word.toUpperCase();
      update_word(' ');
    }
    else if ( clg_correct2.isHovered ){
      var temp_index = current_User + 1;
      var temp_value =
      users[current_User].Pic+','+
      users[current_User].Name+','+
      users[current_User].Score+','+
      users[current_User].challenge1Cat+','+
      users[current_User].challenge1Word+','+
      users[current_User].challenge3Cat+','+
      users[current_User].challenge3Word+','+
      'NO'+','+
      'NO'+','+
      users[current_User].challenge1User+','+
      users[current_User].challenge3User+','+
      'NO';
      localStorage.setItem("User"+temp_index,temp_value);
      game_page.isVisible = 1;
      challenge_page.isVisible = 0;
      play_progress = "";
      cat_info_lbl.text = "Category : "+ users[current_User].challenge2Cat;
      play_word = users[current_User].challenge2Word ;
      for ( var i = 0 ; i < play_word.length ; i++)
        play_progress += ' _ ';

      play_word = play_word.toUpperCase();
      update_word(' ');
    }
    else if ( clg_correct3.isHovered ){
      var temp_index = current_User + 1;
      var temp_value =
      users[current_User].Pic+','+
      users[current_User].Name+','+
      users[current_User].Score+','+
      users[current_User].challenge1Cat+','+
      users[current_User].challenge1Word+','+
      users[current_User].challenge2Cat+','+
      users[current_User].challenge2Word+','+
      'NO'+','+
      'NO'+','+
      users[current_User].challenge1User+','+
      users[current_User].challenge2User+','+
      'NO';
      localStorage.setItem("User"+temp_index,temp_value);
      game_page.isVisible = 1;
      challenge_page.isVisible = 0;
      play_progress = "";
      cat_info_lbl.text = "Category : "+ users[current_User].challenge3Cat;
      play_word = users[current_User].challenge3Word ;
      for ( var i = 0 ; i < play_word.length ; i++)
        play_progress += ' _ ';

      play_word = play_word.toUpperCase();
      update_word(' ');
    }
  }
  this.initialize = function(){

    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
    folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
    folks_light = loadFont("assets/fonts/Folks-Light.ttf");
    folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");
    background_img = loadImage("assets/img/background.png");
    correct_icon = loadImage("assets/Icons/right.png");
    wrong_icon = loadImage("assets/Icons/wrong.png");
    clg_back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');

    clg_mainframe = new button_noHover(918, 176, 417, 511,30 ,1,'#FFFCED');
    clg_challengeuser = new button_noHover(985, 118, 288, 89, 30, 0 , '#009bed' );
    clg_challenge_lbl= new label(1010, 160, '#FFFCED',30 , jelle_roman, 'Challenge User');
    for(var i = 0; i < 5 ; i++){
      var tempy = 241 + (80*i);
      var tempname = '            ----';
      // if ( i <users.length )
      //   tempname = users[i];
      clg_challenge_send.push( new button(975,tempy, 300, 60, 10, 0,'#e6e2d6',1006, tempy+42,'#52425d', 30, jelle_roman,tempname) );
    }

    clg_recieve_mainframe = new button_noHover(261, 174, 417, 511, 30 , 1,'#FFFCED');
    clg_recieve_innerframe = new button_noHover(281, 202, 377, 455, 30, 0,'#e6e2d6');
    clg_recieve_challenge = new button_noHover(320, 116, 288, 89, 30, 0, '#009bed' );
    clg_recieve_lbl= new label(340, 155, '#FFFCED',23, jelle_roman, 'Recieved Challenges');

    clg_recieve_box1 = new button_noHover(411, 230, 219.48, 71.64, 15, 0, '#FFFCED');
    clg_recieve_box1_lbl = new label(470, 268, '#52425d', 30,  jelle_roman, 'khaled');
    clg_recieve_box2 = new button_noHover(411, 380, 219.48, 71.64, 15, 0, '#FFFCED');
    clg_recieve_box2_lbl = new label(470, 418, '#52425d', 30,  jelle_roman, 'khaled');
    clg_recieve_box3 = new button_noHover(411, 530, 219.48, 71.64, 15, 0, '#FFFCED');
    clg_recieve_box3_lbl = new label(470, 568, '#52425d', 30,  jelle_roman, 'khaled');

    clg_correct1 = new button(440, 230+72-25, 75, 53, 10, 1, '#addc00', 450, 300,'#FFFCED',30,jelle_roman, '');
    clg_correct2 = new button(440, 380+72-25, 75, 53, 10, 1, '#addc00', 450, 400,'#FFFCED',30,jelle_roman, '');
    clg_correct3 = new button(440, 530+72-25, 75, 53, 10, 1, '#addc00', 450, 500,'#FFFCED',30,jelle_roman, '');

    clg_refuse1 = new button(455+85, 230+72-25, 75, 53, 10, 1, '#ff6a63', 450, 300,'#FFFCED',30,jelle_roman, '');
    clg_refuse2 = new button(455+85, 380+72-25, 75, 53, 10, 1, '#ff6a63', 450, 400,'#FFFCED',30,jelle_roman, '');
    clg_refuse3 = new button(455+85, 530+72-25, 75, 53, 10, 1, '#ff6a63', 450, 500,'#FFFCED',30,jelle_roman, '');

    correct_icn1 = new icon(correct_icon, 440+17, 230+72-25+7 , 40, 40);
    wrong_icn1 = new icon(wrong_icon, 455+85+22, 230+72-25+11, 29, 29);

    correct_icn2 = new icon(correct_icon, 440+17, 380+72-25+7 , 40, 40);
    wrong_icn2 = new icon(wrong_icon, 455+85+22, 380+72-25+11, 29, 29);

    correct_icn3 = new icon(correct_icon, 440+17, 530+72-25+7 , 40, 40);
    wrong_icn3 = new icon(wrong_icon, 455+85+22, 530+72-25+11, 29, 29);
}
  this.show = function(){
    // 0 1 2 3 4
    if ( this.isVisible ){
      clg_recieve_box1_lbl.text = users[current_User].challenge1User ;
      clg_recieve_box2_lbl.text = users[current_User].challenge2User ;
      clg_recieve_box3_lbl.text = users[current_User].challenge3User ;
      image(background_img,0,0);
      clg_challengeuser.show();
      clg_challenge_lbl.show();
      clg_mainframe.show();
      clg_back_btn.show();
      for( var i = 0  ; i < users.length - 1 ; i++){
        var temp_idx = i;
        if(i >= current_User){
          temp_idx++;
        }
        clg_challenge_send[i].show();
        clg_challenge_send[i]._lbl.text = users[temp_idx].Name;
        clg_challenge_send[i]._lbl.show();
      }
        clg_back_btn._lbl.show();
        clg_recieve_challenge.show();
        clg_recieve_lbl.show();
        clg_recieve_mainframe.show();
        clg_recieve_innerframe.show();

        if ( clg_correct1.isHovered )
          correct_icn1.isHovered = 1;
        else
          correct_icn1.isHovered = 0;

        if ( clg_refuse1.isHovered )
            wrong_icn1.isHovered = 1;
        else
            wrong_icn1.isHovered = 0;

        if ( clg_correct2.isHovered )
            correct_icn2.isHovered = 1;
        else
            correct_icn2.isHovered = 0;

        if ( clg_refuse2.isHovered )
            wrong_icn2.isHovered = 1;
        else
            wrong_icn2.isHovered = 0;

        if ( clg_correct3.isHovered )
            correct_icn3.isHovered = 1;
        else
            correct_icn3.isHovered = 0;

        if ( clg_refuse3.isHovered )
            wrong_icn3.isHovered = 1;
        else
            wrong_icn3.isHovered = 0;

        if (users[current_User].challenge1Cat != 'NO'){
          clg_recieve_box1.show();
          clg_recieve_box1_lbl.show();
          clg_correct1.show();
          clg_refuse1.show();
          fill(0,0,0,25);
          ellipse(345, 265 + 10, 98.5, 98.5);
          stroke('#fffced');
          strokeWeight(6);
          fill('#e6e2d6');
          ellipse(345, 265, 98.5, 98.5);
          wrong_icn1.show();
          correct_icn1.show();
          var recieved_idx = get_index(users[current_User].challenge1User);
          var recieved_pic = users[recieved_idx].Pic;
          image(avatars[parseInt(recieved_pic)],292,212,105,105);
        }

        if (users[current_User].challenge2Cat != 'NO'){
            clg_recieve_box2.show();
            clg_recieve_box2_lbl.show();
            clg_correct2.show();
            clg_refuse2.show();
            fill(0,0,0,25);
            ellipse(345, 415 + 10, 98.5, 98.5);
            stroke('#fffced');
            strokeWeight(6);
            fill('#e6e2d6');
            ellipse(345, 415, 98.5, 98.5);
            wrong_icn2.show();
            correct_icn2.show();
            var recieved_idx = get_index(users[current_User].challenge2User);
            var recieved_pic = users[recieved_idx].Pic;
            image(avatars[parseInt(recieved_pic)],292,212+150,105,105);
        }
        if (users[current_User].challenge3Cat != 'NO'){
          clg_recieve_box3.show();
          clg_recieve_box3_lbl.show();
          clg_correct3.show();
          clg_refuse3.show();
          fill(0,0,0,25);
          ellipse(345, 565 + 10, 98.5, 98.5);
          stroke('#fffced');
          strokeWeight(6);
          fill('#e6e2d6');
          ellipse(345, 565, 98.5, 98.5);
          wrong_icn3.show();
          correct_icn3.show();
          var recieved_idx = get_index(users[current_User].challenge3User);
          var recieved_pic = users[recieved_idx].Pic;
          image(avatars[parseInt(recieved_pic)],292,212+150+150,105,105);
        }
        strokeWeight(0);

    }
  }
}
