// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script'); //script 태그 요소를 생성한다는 메소드로 tag 변수를 정의함.

tag.src = "https://www.youtube.com/iframe_api"; //script 태그의 src 속성을 iframeAPI로 연결함.
var firstScriptTag = document.getElementsByTagName('script')[0];  
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // firstScriptTag 객체의 parentNode 속성에 isertBefore 메소드를 실행함.

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() //youtube를 제어해주는 Js라이브러리가 찾고자 하는 함수 이름이므로 변경하면 안 됨.
{new YT.Player //YT 객체에 player 메소드
  ('player',  //// HTML의 id 값이 player인 요소를 말함. <div id="player"></div>
  { videoId: 'yJsaWxfkH2g', //최초 재생할 유튜브 영상 ID
    playerVars:{ //옵션으로 객체데이터 할당함.
      autoplay:true, //자동 재생 유뮤
      loop:true,// 반복재생 유뮤
      playlist:'yJsaWxfkH2g' //반복 재생할 유튜브 영상 ID목록
    },
    events:{ //옵션으로 객체데이터 할당함.
      onReady: //익명함수를 데이터로 하고 있는 onReady 메소드가 실행되면,
      function(event){event.target.mute()} //음소거. event 매개 변수, target 속성, mute() 메소드 실행.
    }
  }   
  )
};
