import React from 'react';
import './App.css';
export default class App extends React.PureComponent {

  constructor() {
    super();
    var color1 = '#ffffff';
    var color2 = '#f2f2f2';

    this.displayData_img= [];
    this.displayData_gif = [];
    
    this.state = {
      showdata : this.displayData_img,  
      showdata2 : this.displayData_gif,
      width: 0,
      postVal : "",
      showMe : true,
      showMe1 : false,
      color: color2,
      colorr : color1,  
      counter : 0,
      file : "",
    }
    this.appendData = this.appendData.bind(this);
    this.appendData_gif = this.appendData_gif.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_gif = this.handleChange_gif.bind(this);
    
  };

  appendData(){
    if(this.state.postVal!=""){
      this.displayData_img.push(<div id="display-data"><img src={this.state.postVal} id="image"></img></div>);
    }
    this.setState({
       showdata : this.displayData,
      //  showdata2 : this.displayData_gif,
       postVal : ""
    });
  }

  handleChange(e) { // 파일 업로드시 저장
    var style = document.getElementById('meme');
    var file_extension = document.getElementById('file').value;
    file_extension = file_extension.slice(file_extension.indexOf(".") + 1).toLowerCase();

    const file = e.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    var _URL = window.URL || window.webkitURL;
    var img = new Image();

    img.src = _URL.createObjectURL(file);

    for(var i = 0; i < this.displayData_img.length-1; i++){

    }

    reader.onload = function(e){  
     this.setState({
       postVal :reader.result,
       file : file,
       width : img.width,
     }); 
     img.onload = function(e) {
      const width = this.width;
      const height = this.height;
      
      if(width==408 && height==408 && file_extension=='png' && file.size<=512000){
        style.style.visibility = "visible";
      }
      else if(file_extension!='png'){
        alert('png 파일만 가능합니다!');
        style.style.visibility = "hidden";
      }
      else if(file.size>=512000){
        alert('용량이 너무 큽니다 ㅠㅠ');
        style.style.visibility = "hidden";
      }
      else if(width!=408 && height!=408){
        alert('408px * 408px 사이즈만 가능합니다!');
        style.style.visibility = "hidden";
      }
      else{
        style.style.visibility = "hidden";
      }
    }
    }.bind(this); 
  }

  appendData_gif() {
    if(this.state.postVal!=""){
      this.displayData_gif.push(<div id="display-data"><img src={this.state.postVal} id="image"></img></div>);
    }
    this.setState({
       showdata2 : this.displayData_gif,
       postVal : ""
    });
  }

  handleChange_gif(e) { // 파일 업로드시 저장
    var style = document.getElementById('meme');
    var file_extension = document.getElementById('file').value;
    file_extension = file_extension.slice(file_extension.indexOf(".") + 1).toLowerCase();

    const file = e.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    var _URL = window.URL || window.webkitURL;
    var img = new Image();

    img.src = _URL.createObjectURL(file);

    reader.onload = function(e){  
     this.setState({
       postVal :reader.result,
       file : file,
     }); 
     img.onload = function(e) {
      const width = this.width;
      const height = this.height;

      if(width==408 && height==408 && file_extension=='gif' && file.size<=512000){
        style.style.visibility = "visible";
      }
      else if(file_extension!='gif'){
        alert('gif 파일만 가능합니다!');
        style.style.visibility = "hidden";
      }
      else if(file.size>=512000){
        alert('용량이 너무 큽니다 ㅠㅠ');
        style.style.visibility = "hidden";
      }
      else if(width!=408 && height!=408){
        alert('408px * 408px 사이즈만 가능합니다!');
        style.style.visibility = "hidden";
      }
      else{
        style.style.visibility = "hidden";
      }
    }
    }.bind(this); 
  }

click(){ //스티커
  var color1 = '#ffffff';
  var color2 = '#f2f2f2';
  this.setState({
    showMe: false,
    showMe1: true,
    color: color1,
    colorr: color2
  })
}
click2(){ //움직이는 스티커
  var color1 = '#ffffff';
  var color2 = '#f2f2f2';
  this.setState({
    showMe: true,
    showMe1: false, 
    color: color2,
    colorr: color1
  })
}

see_guide(){ //작성 가이드 이동
  window.location.assign('https://studio.stipop.io/howtocreate');
}

submit(){ // 제출 버튼
  if(this.state.counter+1 < 5){
    alert("최소 5개 선택해주세요!");
  }
  if(this.state.counter+1 > 30){
    alert("등록 숫자를 넘어섰습니다!");

  }
}

cancel_upload(){ // 업로드 취소 버튼
  alert("업로드 창을 닫으시겠습니까? 닫으시면 작성한 내용이 지워집니다.");
}
  render() {
    return (
      <main className="image-upload">
        <img src="https://studio.stipop.io/static/images/logo-pink.svg" className="title" />
        <img src="https://studio.stipop.io/static/images/tag-studio.png" className="studio"/>
        <button type="button" id="cancle_upload" onClick={()=>this.cancel_upload()}>업로드 취소 X</button>
          <div className="page"> 
          {/* '스티커', '움직이는 스티커' 버튼 */}
            <div id="change_div"> 
              <div style={{background: this.state.color, boxShadow: '9px -3px 9px -3px rgba(202, 202, 202, 0.637)'}} id="sticker" onClick={()=>this.click()}>움직이는 스티커</div>
              <div style={{background: this.state.colorr, boxShadow: '-3px -3px 9px -3px rgba(202, 202, 202, 0.637)'}} id="move_sticker" onClick={()=>this.click2()}>스티커</div>
            </div>
            {/* 본문 - info(스티커 정보)와 upload(스티커 업로드) 부분으로 구성  */}
            <div id="main">
            <div id="info">
              <table>
                <tr>
                  <td>스티커 이름<br></br></td>
                  <td><input type="text" id="input"></input><br></br>
                  <code>스티커 이름은 50자 이내여야하며 글자와 숫자만 사용할 수 있습니다.</code>
                  </td>
                </tr>
                <tr>
                  <td>캐릭터 명</td>
                  <td><input type="text" id="input"></input><br></br>
                  <code>영숫자만 사용하여 문자 이름 쓰기.</code></td>
                </tr>
                <tr>
                  <td>카테고리</td>
                  <td align="left" valign="middle"><button id="btn">Animation/Cartoon</button><button>Animals</button><button>Celebrity</button><button>Food/Drink</button>
                  <br></br><button id="btn">Gag</button><button>Holloween</button><button>People</button><button>Pharase</button><button>Romance</button>
                  <br></br><button id="btn">Sports</button><button>Etc.</button>
                  </td>
                </tr>
                <tr>
                  <td>키워드</td>
                  <td><input type="text" id="input"></input><br></br>
                  <code>2-5 개의 키워드를 써주세요. 쉼표를 사용하여 키워드를 구분해주세요.</code></td>
                </tr>
                <tr>
                  <td>언어</td>
                  <td><input type="text" id="input" list="language"></input></td>
                  <datalist id="language">
                    <option value="English"></option>
                    <option value="French"></option>
                    <option value="Korean"></option>
                    <option value="Czech"></option>
                  </datalist>
                </tr>
              </table>
            </div>
            {this.state.showMe? // png 업로드 
              <div id="UploadSticker">
                <h4>파일</h4><button type="button" id="create" onClick={()=>this.see_guide()}>창작 가이드 보기</button><br></br>
                <p>PNG, 500kb 이하 408 x 408 px, 최소 5개 최대 30개 스티커</p>
                <p id="p2">메인 스티커는 스티커를 모두 업로드 한 후에 메인 스티커 칸으로 드래그 해주세요.</p>
                <div id ="img-box">
                  {/* 파일 업로드 */}
                  <input type="file" id="file" onChange={this.handleChange}></input><br></br>                  
                  <input type="submit" id="meme" onClick={this.appendData} value="클릭"/>
                <div id="show_image"> 
                  {this.displayData_img}
                </div>
                </div>
                <button id="submit" onClick={()=>this.submit()}>제출하기</button>
            </div>
            :null}
            {this.state.showMe1? // gif 업로드
              <div id="UploadGif">
                <h4>파일</h4><button type="button" id="create" onClick={()=>this.see_guide()}>창작 가이드 보기</button><br></br>
                <p>움직이는 스티커: GIF, 500kb 이하, 408 x 408 px</p>
                <p id="p2">메인 스티커는 스티커를 모두 업로드 한 후에 메인 스티커 칸으로 드래그 해주세요.</p> 
                <div id="gif-box">
                  {/* 파일 업로드 */}
                  <input type="file" id="file" onChange={this.handleChange_gif}></input><br></br>
                  <input type="submit" id="meme" className="button" onClick={this.appendData_gif} value="클릭"/>
                <div id="show_image"> 
                  {this.displayData_gif}
                </div>  
                </div>
                <button id="submit" onClick={()=>this.submit()}>제출하기</button>
              </div>
            :null}
          </div> 
          </div>
      </main>
    );
  }
  }