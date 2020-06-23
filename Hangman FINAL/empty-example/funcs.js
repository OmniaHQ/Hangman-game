function funcs(){
  this.loadFuncs = function(){
    resetGameMode = function() {
      for(var i = 0 ; i < game_Row1.length ; i++)
        game_Row1_visible[i] = 1;
      for(var i = 0 ; i < game_Row2.length ; i++)
        game_Row2_visible[i] = 1;
      for(var i = 0 ; i < game_Row3.length ; i++)
        game_Row3_visible[i] = 1;
      if(chosenCatInd == 7)
        play_word = catWords[Math.floor(random(0,7))][ Math.floor( random(chosenLevelindex * 10 , (chosenLevelindex * 10) + 10)) ];
      else
        play_word = catWords[chosenCatInd][ Math.floor( random(chosenLevelindex * 10 , (chosenLevelindex * 10) + 10)) ];
      play_progress = "" ;
      for ( var i = 0 ; i < play_word.length ; i++)
        play_progress += ' _ ';
      play_word = play_word.toUpperCase();
      update_word(' ');
      game_page.acceptingInput = 1;
      showWinOnce = 0;
      showloseOnce = 0;
      game_progress_input = "";
    }
    updateUserInfo = function() {
      tempusers = [];
      key = "User";
      tempadd = 0;
      for ( var i = 0 ; i < localStorage.length ; i++ ){
        tempadd = i+1;
        var tempuserlist = localStorage.getItem("User"+tempadd).split(',');
        tempobject = {
          Pic:tempuserlist[0],
          Name:tempuserlist[1],
          Score:tempuserlist[2],
          challenge1Cat:tempuserlist[3],
          challenge1Word:tempuserlist[4],
          challenge2Cat:tempuserlist[5],
          challenge2Word:tempuserlist[6],
          challenge3Cat:tempuserlist[7],
          challenge3Word:tempuserlist[8],
          challenge1User:tempuserlist[9],
          challenge2User:tempuserlist[10],
          challenge3User:tempuserlist[11]};
        tempusers.push(tempobject);
      }
      return tempusers;
    }
    checkWin = function(){
      for ( var i = 0 ; i < play_progress.length ; i++)
        if (play_progress[i] == '_')
          return false;
      return true;
    }
    checkLoseOrWin = function() {
      if ( checkWin() ){
        score_pop_up.winOrLose = 'WIN';

        if ( !showWinOnce ){
          var temp_setup = current_User + 1;
          var temp_valueToAdd_ =
          users[current_User].Pic+','+
          users[current_User].Name+','+
          (parseInt(users[current_User].Score) + 50 * (chosenLevelindex + 1 )).toString()+','+
          users[current_User].challenge1Cat+','+
          users[current_User].challenge1Word+','+
          users[current_User].challenge2Cat+','+
          users[current_User].challenge2Word+','+
          users[current_User].challenge3Cat+','+
          users[current_User].challenge3Word+','+
          users[current_User].challenge1User+','+
          users[current_User].challenge2User+','+
          users[current_User].challenge3User;
          localStorage.setItem("User"+temp_setup,temp_valueToAdd_);
          showWinOnce = 1;
          score_pop_up.isVisible = 1;
        }
        game_page.acceptingInput = 0;
      }
      if ( real_lives_score <= 0){
        score_pop_up.winOrLose = 'LOSE';
        if ( !showloseOnce ){
          for( var i = 0 ; i < play_word.length ; i++)
            update_word(play_word[i]);
          showloseOnce = 1;
          score_pop_up.isVisible = 1;
        }
        game_page.acceptingInput = 0;
      }
    }
    checkLives = function(){
      var tempminuslives = 0;
      // for(var i = 0 ; i < game_Row1.length ; i++)
      //   if (game_Row1_visible[i] == 0 && play_word.search(game_Row1[i]._lbl.text) == -1)
      //     tempminuslives++;
      // for(var i = 0 ; i < game_Row2.length ; i++)
      //   if (game_Row2_visible[i] == 0 && play_word.search(game_Row1[i]._lbl.text) == -1)
      //     tempminuslives++;
      // for(var i = 0 ; i < game_Row3.length ; i++)
      //   if (game_Row3_visible[i] == 0 && play_word.search(game_Row1[i]._lbl.text) == -1)
      //     tempminuslives++;
      for ( var i  = 0 ; i < game_progress_input.length ; i++ )
        if ( play_word.search(game_progress_input[i]) == -1 )
          tempminuslives++;
      realminus = tempminuslives;
      real_lives_score = total_lives - realminus;
    }
    update_word = function(_char){
      var update_flag = 0;
      for( var i = 0, cnt = 1 ; i < play_word.length ; i++ , cnt += 3) {
        if ( play_word[i] == _char  ){
          play_progress = play_progress.slice(0, cnt) + _char + play_progress.slice(cnt+1 , play_progress.length);
          update_flag = 1;
        }
      }
      return update_flag ;
    }
    checkAccepted = function(chr){
      for ( var i = 0 ; i < acceptedChars.length ; i++ ){
        if (chr == acceptedChars[i])
        return true;
      }
      return false;
    }
    challenge_num = function(chk){
      if ( users[chk].challenge1Cat == 'NO' ) return 1;
      if ( users[chk].challenge2Cat == 'NO' ) return 2;
      if ( users[chk].challenge3Cat == 'NO' ) return 3;
    }
    get_index = function(name){
      for ( var i = 0 ; i < users.length ; i++ ){
        if (users[i].Name == name )
          return i;
      }
    }
  }
}
