var background_img, logo_img;
var play_icon, exit_icon;
var folks_bold, folks_heavy, folks_light, folks_normal, jelle_roman;
var play_btn, changeuser_btn, usertab_btn, exit_btn, description_btn;
var _lbl1, username_lbl, best_lbl, changeplayer_lbl, play_lbl, exit_lbl, description_lbl;
var play_icn, exit_icn;
var playwhite ,playgrey;
var game_details_btn, cat_change_btn, lvl_change_btn;
var playwith_btn;
var back_btn;
var challenge_btn;
var selected_category = 'Random';
var selected_level = 'Easy';
var cat_category_btn = [];
var acceptedChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                     'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ',
                     '0','1','2','3','4','5','6','7','8','9'];
var pop_input_name = '';
var play_progress = '';
var total_lives = 5;
var realminus = 0;
var real_lives_score = 0;
var showloseOnce = 0;
var showWinOnce = 0;
var usersFilePath = 'file://C:/Users/Khaled Mohamed/Desktop/Hangman 23-12/userListText.txt';
var users = [];
var current_User = 0;

var chosenCatInd = 7, chosenLevelindex = 0;
var play_word = 'KHALEDKHALED';
var audio = new Audio('mahrgan.mp3');

var idx_challengeCat = -1;

var send_idx = 0;
var last_click_frame ;
var isLastClickRight = 0;

var avatars = [];

var game_progress_input = "";
var audio_correct = new Audio ("assets/sounds/test.mp3");
var audio_correct_isPlaying = 0;
var audio_wrong = new Audio ("assets/sounds/lose.mp3");
var audio_wrong_isPlaying = 0;
var audio_click = new Audio ("assets/sounds/click1.mp3");

var sound_state = 1;

var hint_count = 3 ;
function setup() {
  createCanvas(1531, 748);
  cat_change_menu = new categoryChangePanel();
  user_list_menu = new userList();
  game_details_menu = new gameDetails();
  main_menu = new mainMenu();
  level_change_menu = new level_change();
  game_page = new gamePage();
  enter_name = new PopUp();
  description_ = new description();
  load_functions = new funcs();
  score_pop_up = new scorePopUp();
  challenge_page = new ChallengeUser();
  challenge_pop_ = new challenge_pop();
  challenge_pop_word = new wordEnterPopUp();
  char_menu = new charactersMenu();

  char_menu.initialize();
  load_functions.loadFuncs();
  challenge_page.initialize();
  description_.initialize();
  enter_name.initialize();
  game_page.initialize();
  user_list_menu.initialize();
  level_change_menu.initialize();
  game_details_menu.initialize();
  main_menu.initialize();
  cat_change_menu.initialize();
  score_pop_up.initialize();
  challenge_pop_.initialize();
  challenge_pop_word.initialize();

  game_details_menu.selectWord();
    //audio.play();
}
function draw() {
    if ( audio_click.currentTime >= 5.5){
      audio_click.currentTime = 4.5;
      audio_click.pause();
    }
    if ( !sound_state ){
      audio.currentTime = 0;
      audio.pause();
    }
    users = updateUserInfo();
    checkLives();
    cat_change_menu.show();
    game_details_menu.show();
    main_menu.show();
    level_change_menu.show();
    user_list_menu.show();
    game_page.show();
    enter_name.show();
    description_.show();
    score_pop_up.show();
    challenge_page.show();
    challenge_pop_word.show();
    challenge_pop_ .show();
    char_menu.show();
}
function mouseClicked(){
  if ( !game_page.isVisible && sound_state ){
    audio_click.currentTime = 4.8;
    audio_click.play();
  }
  if ( cat_change_menu.isVisible )
    cat_change_menu.isClicked();
  else if (game_details_menu.isVisible)
    game_details_menu.isClicked();
  else if ( main_menu.isVisible )
    main_menu.isClicked();
  else if(level_change_menu.isVisible)
    level_change_menu.isClicked();
  else if (user_list_menu.isVisible)
    user_list_menu.isClicked();
  else if(game_page.isVisible)
    game_page.isClicked();
  else if (enter_name.isVisible)
    enter_name.isClicked();
  else if (description_.isVisible)
    description_.isClicked();
  else if (challenge_page.isVisible)
    challenge_page.isClicked();
  else if(challenge_pop_word.isVisible)
    challenge_pop_word.isClicked();
  if(challenge_pop_.isVisible)
    challenge_pop_.isClicked();
  if(char_menu.isVisible)
    char_menu.isClicked();
  return false;
}
function keyPressed(){
  if ( game_page.isVisible )
    game_page.handleKeys();
  if ( enter_name.isVisible )
    enter_name.handleKeys();
  if ( challenge_pop_word.isVisible )
    challenge_pop_word.handleKeys();
}
