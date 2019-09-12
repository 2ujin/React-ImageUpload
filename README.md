## 리액트로 이미지 업로드 사이트 만들기 📷

## 기능
* 기본적인 이미지(png)와 움직이는 이미지(gif)를 따로 업로드 한다
* PNG(gif), 500kb 이하인 이미지만 업로드 할 수 있다
* 5개 이상 30개 미만의 이미지가 업로드 된다
* 문제점 : 
- 업로드 한 이미지가 하나씩 밀린다 (..고치는중...) => async, await 사용
- 가로 세로가 408px 인지 확인은 하지만 408px가 아니어도 업로드가 된다..

## 개발일지 🌠
간단한 실행화면과 개발일지
- 스타일 주기 1
![실행화면](https://user-images.githubusercontent.com/42020919/64473126-66bac700-d1a0-11e9-8820-0ee1035ad631.png)  <br>
input 스타일과 button click, hover 스타일 주기 !!
- 스타일 주기 2
![실행화면](https://user-images.githubusercontent.com/42020919/64475336-78aa6300-d1bc-11e9-83c4-bbebba0f9c41.png)  <br>
input focus가 될 때 border 색상이 바뀐다
- 스타일 주기 3
![실행화면](https://user-images.githubusercontent.com/42020919/64475338-8d86f680-d1bc-11e9-9eeb-5505d6cca564.png)  <br>
카테고리 hover시 버튼 배경색 변경과 클릭시 테두리와 글씨색상 변경<br>
- 고쳐야 할 부분
![실행화면](https://user-images.githubusercontent.com/42020919/64475346-c58e3980-d1bc-11e9-8bed-1ff86413c7fb.png)  <br>
이미지 5개이상, 30개미만, 확장자, 가로 길이가 맞는 파일만 업로드 되지만 하나씩 밀린다.......
- 메인화면
![image](https://user-images.githubusercontent.com/42020919/64484377-04b79b80-d24c-11e9-9b86-cd684054e987.png)<br>
글씨 드래그 시 색상 변경

