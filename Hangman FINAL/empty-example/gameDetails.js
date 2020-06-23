function gameDetails(){
  this.isVisible = 0;
  this.isClicked = function(){
    console.log('CRICLE');
    if ( circle_plus.isHovered ){
      this.isVisible = 0;
      char_menu.isVisible = 1;
    }
    if ( back_btn.isHovered ){
      this.isVisible = 0;
      main_menu.isVisible = 1;
      if ( sound_state ) audio.play();
    }
    else if ( cat_change_btn.isHovered ){
      this.isVisible = 0;
      cat_change_menu.isVisible = 1;
    }
    else if ( lvl_change_btn.isHovered ){
      this.isVisible = 0;
      level_change_menu.isVisible = 1;
    }
    else if (playwith_btn.isHovered){
      this.isVisible = 0;
      game_page.isVisible = 1;
      play_progress = "" ;
      for ( var i = 0 ; i < play_word.length ; i++)
        play_progress += ' _ ';

      play_word = play_word.toUpperCase();
      update_word(' ');
      audio.pause();
    }
    else if (challenge_btn.isHovered){
      this.isVisible = 0;
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
    playwhite = new button_noHover(408, 380, 690.34, 233.83, 30, 1, '#FFFCED');
    playgrey = new button_noHover(443, 420, 621.4, 162.16, 30, 0, '#e6e2d6');
    game_details_btn = new button_noHover(461, 407, 217, 39, 20, 0, '#addc00');
    game_details_lbl=new label_noHover(490, 432,'#52425d', 19.55, jelle_roman, 'GAME DETAILS');
    cat_change_btn = new button(925, 466, 119, 32, 16, 0, '#addc00', 942, 490, '#52425d', 19.55, jelle_roman, 'CHANGE');
    lvl_change_btn = new button(925, 524, 119, 32, 16, 0, '#addc00', 942, 547, '#52425d', 19.55, jelle_roman, 'CHANGE');
    playwith_btn = new button(494, 646, 537.47, 49.87, 25, 1, '#009bed', 535, 680, '#FFFCED', 30, jelle_roman, 'PLAY WITH THESE SETTINGS');
    challenge_btn = new button(1180, 30, 302.52, 49.06, 24.53, 0,'#ff6a63', 1200, 62, '#FFFCED', 21.38, jelle_roman, 'CHALLENGE A PLAYER');
    back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');


    category_lbl = new label_noHover(471, 492, '#009bed', 24.11,  jelle_roman, 'Category:');
    chosen_cat_lbl = new label_noHover(725, 492, '#52425d', 24.11, jelle_roman, 'Animal');
    level_lbl = new label_noHover(520, 550, '#009bed', 24.11, jelle_roman, 'Level:');
    chosen_lvl_lbl = new label_noHover(730, 550, '#52425d', 24.11, jelle_roman, 'Hard');

    circle_plus = new circle_btn(840, 310, 80, '#e6e2d6', 812, 343, '#009bed', 100,  jelle_roman, '+');
  }
  this.selectWord = function(){
    catWords = [];
    var animal_words = ['fox', 'cat', 'dog', 'lion', 'donkey', 'tiger', 'rabbit', 'elephant', 'monkey', 'camel', 'octopus', 'squirrel', 'chimpanzee', 'goldfish', 'scorpion', 'eagle', 'hawk', 'cheetah', 'raccoon', 'penguin', 'rhinoceros', 'hippopotamus', 'porcupine', 'antelope', 'alligator', 'armadillo', 'hamster', 'sloth', 'hedgehog', 'otter'];
    var sports_words = ['football', 'volleyball', 'handball', 'swimming', 'diving', 'tennis', 'boxing', 'basketball', 'baseball', 'cycling', 'aerobics', 'scubadiving', 'kayaking', 'rafting', 'squash', 'surfing', 'rowing', 'sumo', 'wrestling', 'hockey', 'hurling', 'racquetball', 'skeleton', 'parachuting', 'jogging', 'parkour', 'jockey', 'parasailing', 'MIXED MARTIAL ARTS', 'jiu jitsu'];
    var food_words = ['pizza', 'burger', 'cheese', 'meat', 'chicken', 'pasta', 'bread', 'salad', 'rice', 'fish', 'shrimp', 'sausages', 'oats', 'broccoli', 'cumcumber', 'bacon', 'kebab', 'yogurt', 'cream', 'sushi', 'Pomegranates', 'Quinoa', 'nutella', 'bruschetta', 'croissant', 'macaron', 'zucchini', 'mozzarella', 'mashroom',' papaya'];
    var countries_words = [ 'egypt', 'america', 'england', 'india', 'france', 'germany', 'lebanon', 'syria', 'japan', 'russia', 'belguim', 'australia', 'denmark', 'kenya', 'mexico', 'niger', 'palestine', 'turkey', 'zambia', 'rwanda', 'morocco', 'philippines', 'singapore', 'switzerland', 'vietnam', 'slovenia', 'portugal', 'peru', 'netherlands', 'malaysia'];
    var nature_words = ['earth', 'space', 'air', 'sky', 'plant', 'planet', 'sea', 'lake', 'storm', 'snow', 'mountains', 'ocean', 'river', 'coast', 'island', 'forest', 'desert', 'soil', 'land', 'rock', 'landscape', 'galaxy', 'glacier', 'aquatic', 'leaves', 'hurricane', 'eclipse', 'earthquake', 'volcano', 'organism'];
    var science_words = ['oxygen', 'carbon', 'flask', 'lab', 'energy', 'gravity', 'motion', 'atom', 'tissue', 'biology', 'photosynthesis', 'theory', 'thermometer', 'pipette', 'silicon', 'molecule', 'radiology', 'magnetism', 'geology', 'quantum', 'paleontology', 'polymorphism', 'centrifugal', 'immunology', 'hypothosis', 'herpetology', 'virologist', 'mineralogy', 'ornithology', 'ichthyology'];
    var movies_words = ['homealone', 'iron man', 'avengers', 'batman begins', 'spider man', 'venom', 'the godfather', 'mother', 'deadpool', 'titanic', 'ex machina', 'interstellar', 'insomnia', 'the martian', 'pulp fiction', 'the pianist', 'the breakfast club', 'the departed', 'curse of chucky', 'psycho', 'the shawshank redemption', 'the strangers', 'the silence of the lambs', 'the illusionist', 'chinatown', 'shakespeare in love', 'manchester by the sea', 'nocturnal animals', 'blood diamond', 'donnie darko'];
   catWords.push( animal_words );
   catWords.push( nature_words );
   catWords.push( sports_words );
   catWords.push( science_words );
   catWords.push( food_words );
   catWords.push( countries_words );
   catWords.push( movies_words );
   if(chosenCatInd == 7)
    play_word = catWords[Math.floor(random(0,7))][ Math.floor( random(chosenLevelindex * 10 , (chosenLevelindex * 10) + 10)) ];
   else
    play_word = catWords[chosenCatInd][ Math.floor( random(chosenLevelindex * 10 , (chosenLevelindex * 10) + 10)) ];
  }
  this.show = function(){
    if (this.isVisible){
      chosen_cat_lbl.text = selected_category;
      chosen_lvl_lbl.text = selected_level;
      image(background_img,0,0);
      playwhite.show();
      playgrey.show();
      game_details_btn.show();
      cat_change_btn.show();
      lvl_change_btn.show();
      playwith_btn.show();
      challenge_btn.show();
      back_btn.show();
      chosen_cat_lbl.show();
      chosen_lvl_lbl.show();
      category_lbl.show();
      level_lbl.show();
      game_details_lbl.show();
      playwith_btn._lbl.show();
      cat_change_btn._lbl.show();
      lvl_change_btn._lbl.show();
      challenge_btn._lbl.show();
      back_btn._lbl.show();
      fill('#fffced');
      ellipse(755, 210, 274, 274);
      fill('#e6e2d6');
      ellipse(755, 210, 252, 252);
      if ( parseInt(users[current_User].Pic) == 0 )
        image(avatars[0],648,95,210,210);
      else
        image(avatars[parseInt(users[current_User].Pic)], 605 , 61, 294, 294);
        circle_plus.show();
        circle_plus._lbl.show();
    }
  }
}


/*
// ------------------ OUR VERSION ----------------------
// var playwhite ,playgrey;
// var game_details_btn, cat_change_btn, lvl_change_btn;
// var playwith_btn;
// var back_btn;
// var challenge_btn;
// var folks_bold, folks_heavy, folks_light, folks_normal, jelle_roman;

function gameDetails(){
  this.isVisible = 0;
  this.isClicked = function(){
    if ( back_btn.isHovered ){
      this.isVisible = 0;
      main_menu.isVisible = 1;
    }
    else if ( cat_change_btn.isHovered ){
      this.isVisible = 0;
      cat_change_menu.isVisible = 1;
    }
    else if ( lvl_change_btn.isHovered ){
      this.isVisible = 0;
      level_change_menu.isVisible = 1;
    }
    else if (playwith_btn.isHovered){
      this.isVisible = 0;
      game_page.isVisible = 1;
    }
    else if (challenge_btn.isHovered){
      this.isVisible = 0;
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
    playwhite = new button_noHover(408, 380, 690.34, 233.83, 30, 1, '#FFFCED');
    playgrey = new button_noHover(443, 420, 621.4, 162.16, 30, 0, '#e6e2d6');
    game_details_btn = new button_noHover(461, 407, 217, 39, 20, 0, '#addc00');
    game_details_lbl=new label_noHover(490, 432,'#52425d', 19.55, jelle_roman, 'GAME DETAILS');
    cat_change_btn = new button(925, 466, 119, 32, 16, 0, '#addc00', 942, 490, '#52425d', 19.55, jelle_roman, 'CHANGE');
    lvl_change_btn = new button(925, 524, 119, 32, 16, 0, '#addc00', 942, 547, '#52425d', 19.55, jelle_roman, 'CHANGE');
    playwith_btn = new button(494, 646, 537.47, 49.87, 25, 1, '#009bed', 535, 680, '#FFFCED', 30, jelle_roman, 'PLAY WITH THESE SETTINGS');
    challenge_btn = new button(1180, 30, 302.52, 49.06, 24.53, 0,'#ff6a63', 1200, 62, '#FFFCED', 21.38, jelle_roman, 'CHALLENGE A PLAYER');
    back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');


    category_lbl = new label_noHover(471, 492, '#009bed', 24.11,  jelle_roman, 'Category:');
    chosen_cat_lbl = new label_noHover(725, 492, '#52425d', 24.11, jelle_roman, 'Animal');
    level_lbl = new label_noHover(520, 550, '#009bed', 24.11, jelle_roman, 'Level:');
    chosen_lvl_lbl = new label_noHover(730, 550, '#52425d', 24.11, jelle_roman, 'Hard');

    circle_plus = new circle_btn(840, 310, 80, '#e6e2d6', 812, 343, '#009bed', 100,  jelle_roman, '+');
  }
  this.show = function(){
    if (this.isVisible){
      chosen_cat_lbl.text = selected_category;
      chosen_lvl_lbl.text = selected_level;
      image(background_img,0,0);
      playwhite.show();
      playgrey.show();
      game_details_btn.show();
      cat_change_btn.show();
      lvl_change_btn.show();
      playwith_btn.show();
      challenge_btn.show();
      back_btn.show();


      chosen_cat_lbl.show();
      chosen_lvl_lbl.show();
      category_lbl.show();
      level_lbl.show();
      game_details_lbl.show();
      playwith_btn._lbl.show();
      cat_change_btn._lbl.show();
      lvl_change_btn._lbl.show();
      challenge_btn._lbl.show();
      back_btn._lbl.show();


      fill('#fffced');
      ellipse(755, 210, 274, 274);
      fill('#e6e2d6');
      ellipse(755, 210, 252, 252);

      circle_plus.show();
      circle_plus._lbl.show();

    }
  }
}
*/
