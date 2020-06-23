var list_mainframe;
var list_availableplayers;
var list_availableplayers_lbl;
var list_back_btn;

var list_olduser_box = [];
var list_old_lbl = [];
var list_minus_box = [];

var list_newuser_box = [];
var list_new_lbl = [];
var list_plus_box = [];


function userList(){
  this.isVisible = 0;
  this.isClicked = function(){
    for ( var i = 0 ; i < users.length ; i++ ){
      if ( list_olduser_box[i].isHovered ){
        current_User = i;
        main_menu.isVisible = 1;
        this.isVisible = 0;
      }
    }
    if ( list_back_btn.isHovered ){
      main_menu.isVisible = 1;
      this.isVisible = 0;
    }
    else{
      for(var i = users.length ; i < 5 ; i++){
        if(list_plus_box[i].isHovered){
          enter_name.isVisible = 1;
          this.isVisible = 0;
        }
      }
      for(var i = 0 ; i < users.length ; i++){
        if(list_minus_box[i].isHovered){
          users.splice(i,1);
          localStorage.clear();
          for ( var j = 0 ; j < users.length ; j++){
            temp_ind_ = j + 1;
            temp_valueToAdd =
            users[j].Pic+','+
            users[j].Name+','+
            users[j].Score+','+
            users[j].challenge1Cat+','+
            users[j].challenge1Word+','+
            users[j].challenge2Cat+','+
            users[j].challenge2Word+','+
            users[j].challenge3Cat+','+
            users[j].challenge3Word+','+
            users[j].challenge1User+','+
            users[j].challenge2User+','+
            users[j].challenge3User;
            localStorage.setItem("User"+temp_ind_,
                temp_valueToAdd);
          }
          for ( var j = users.length ; j < 5 ; j++)
              list_new_lbl[j].text = '            ----';
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
  mainframe = new button_noHover(551.27, 130.59, 470.72, 576.64,30 ,1,'#FFFCED');
  availableplayers = new button_noHover(625, 65.68, 325.28, 100.1, 30, 0 , '#009bed' );
  availableplayers_lbl = new label(655, 110, '#FFFCED',30 , jelle_roman, 'Available Players');
  list_back_btn = new button(44, 33, 114.94, 47.7, 23.58, 0, '#52425d',72 , 65, '#FFFCED',23 , jelle_roman, 'Back' );
  for(var i = 0; i < 5 ; i++){
    var tempy = 190 + (100*i);
    var tempysign = 242 + (100*i);
    var tempymin = 245 + (100*i);
    var tempname = '            ----';
    if ( i < users.length )
      tempname = users[i];
    list_newuser_box.push( new button_noHover(595.8,tempy, 285.48, 59.43, 10,1 ,'#BAB6B6') );
    list_new_lbl.push( new label_noHover (640, tempy+43,'#52425d' ,24,jelle_roman, tempname) );
    list_plus_box.push( new button(898,tempy,85.5,59.5,10,1,'#ADDC00', 920, tempysign , '#FFFCED', 70 ,jelle_roman,'+' ) );

    list_olduser_box.push( new button(595.8,tempy, 285.48, 59.43, 10,1 ,'#E6E2D6',640, tempy+43,'#52425d' ,24,jelle_roman, tempname) );
    // list_old_lbl.push( new label_noHover (640, tempy+43,'#52425d' ,24,jelle_roman, tempname) );

    list_minus_box.push( new button(898,tempy,85.5,59.5,10,1,'#ff6a63', 922, tempymin , '#FFFCED', 85,jelle_roman,'-' ) );
  }
  }
  this.show = function(){
    if ( this.isVisible ){
      for ( var i = 0 ; i < users.length ; i++ )
        list_olduser_box[i]._lbl.text = users[i].Name;
      image(background_img,0,0);

      list_back_btn.show();
      availableplayers.show();
      mainframe.show();

      for ( var i = 0 ; i < users.length  ; i++ ){
        list_olduser_box[i].show();
        // list_old_lbl[i].show();
        list_olduser_box[i]._lbl.show();
        list_minus_box[i].show();
        list_minus_box[i]._lbl.show();
      }

      for ( var i = users.length ; i < 5 ; i++){
        list_newuser_box[i].show();
        list_new_lbl[i].show();
        list_plus_box[i].show();
        list_plus_box[i]._lbl.show();
      }

      list_back_btn._lbl.show();
      availableplayers_lbl.show();
    }
  }
}
