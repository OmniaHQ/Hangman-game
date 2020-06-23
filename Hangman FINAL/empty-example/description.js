var background_img;
var back_btn;
var folks_bold, folks_heavy, folks_light, folks_normal, jelle_roman;
function description(){
  this.isVisible=0;
  this.isClicked = function() {
    if(desc_back_btn.isHovered){
      description_.isVisible = 0;
      main_menu.isVisible = 1;
    }
  }
  this.initialize=function(){
    folks_bold = loadFont("assets/fonts/Folks-Bold.ttf");
    folks_heavy = loadFont("assets/fonts/Folks-Heavy.ttf");
    folks_light = loadFont("assets/fonts/Folks-Light.ttf");
    folks_normal = loadFont("assets/fonts/Folks-Normal.ttf");
    jelle_roman = loadFont("assets/fonts/Jellee-Roman.otf");

    background_img = loadImage("assets/img/background.png");

    desc_btn= new button_noHover(510, 70, 500, 90, 20, 0, '#009bed');
    desc_btn_lbl= new label(610, 120,'#FFFCED', 40, jelle_roman, 'DESCRIPTION');
    desc_back_btn = new button(47, 30, 118.27, 49.06, 24.53, 0,'#52425d', 75, 62, '#FFFCED', 21.38, jelle_roman, 'BACK');
    desc_text= new label_noHover(410,190,'#52425d',23,jelle_roman,'Hangman is a word guessing game where the player attempts\n\n to build a missing word by guessing one letter at a time.\n\nThe game ends; either by guessing the word correctly, \n\nor when the number of limited incorrect guesses ends.\n\n The player has the optionality to :\n\n1.choose the level of the game; easy,meduim, or hard.\n\n2.challenge anoher player by giving him a word to guess.\n\n Different high level characters are unlocked,\n\n whenever the player reaches a certain score!');
  }
  this.show = function(){
    if(this.isVisible){
      image(background_img, 0, 0);

      desc_btn.show();
      fill(0,0,0,25);
      strokeWeight(0);
      rect(360, 140+20, 800, 550, 20);
      fill('#e6e2d6');
      stroke('#FFFCED')
      strokeWeight(15);
      rect(360, 140, 800, 550, 20);
      strokeWeight(0);

      desc_btn_lbl.show();

      desc_back_btn.show();
      desc_back_btn._lbl.show();
      desc_text.show();
      }
    }
  }
