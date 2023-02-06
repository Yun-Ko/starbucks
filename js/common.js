const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function ( ) {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder','');
});

//날짜 정보 불러오기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //new js 생성자 함수를 실행함. date() 날짜 정보를 가지고 있는 js 객체. getFullYear() 연도 정보를 가지고 오는 메소드.