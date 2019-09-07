import React from 'react';
import './App.css';

export default class App extends React.PureComponent {
  
  constructor() {
    super();
    var color1 = '#ffffff';
    var color2 = '#f2f2f2';

    this.displayData = [];
    this.state = {
      showdata : this.displayData,
      postVal : "",
      showMe : true,
      showMe1 : false,
      color: color2,
      colorr : color1
    }
    this.appendData = this.appendData.bind(this);
  };
  

appendData=event => {
  const file = event.target.files[0];
  const reader = new FileReader();
  const url = reader.readAsDataURL(file);

  reader.onload = function (e) {
    this.setState({
        imgSrc: [reader.result]
    })
  }.bind(this);

  console.log(this.state.imgSrc); // 첫 값은 undefinded가 나온다 ..
  this.displayData.push(<div id="display-data"><img src={this.state.imgSrc}></img></div>);
  }
click(){
  var color1 = '#ffffff';
  var color2 = '#f2f2f2';
  this.setState({
    showMe: false,
    showMe1: true,
    color: color1,
    colorr: color2
  })
}
click2(){
  var color1 = '#ffffff';
  var color2 = '#f2f2f2';
  this.setState({
    showMe: true,
    showMe1: false, 
    color: color2,
    colorr: color1
  })
}
  render() {
 

    return (
      <main className="image-upload">
        <img src="https://studio.stipop.io/static/images/logo-pink.svg" className="title" />
        <img src="https://studio.stipop.io/static/images/tag-studio.png" className="studio"/>
          <div className="page"> 
            <div id="change_div">
              <div style={{background: this.state.color, boxShadow: '9px -3px 9px -3px rgba(202, 202, 202, 0.637)'}} id="sticker" onClick={()=>this.click()}>움직이는!</div>
              <div style={{background: this.state.colorr, boxShadow: '-3px -3px 9px -3px rgba(202, 202, 202, 0.637)'}} id="move_sticker" onClick={()=>this.click2()}>스티커</div>
            </div>
            <div id = "main">
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
                  <code>2 - 5 개의 키워드를 써주세요. 쉼표를 사용하여 키워드를 구분해주세요.</code></td>
                </tr>
                <tr>
                  <td>언어</td>
                  <td><input type="text" id="input" list="language"></input></td>
                  <datalist id="language">
                    <option value="컴퓨터공학과"></option>
                    <option value="영어영문과"></option>
                    <option value="경영학과"></option>
                    <option value="사회체육과"></option>
                  </datalist>
                </tr>
              </table>
            </div>
            {this.state.showMe? // 사진 업로드 
              <div id="mainContainer">
                <div id="img-box">
                  그냥 사진사진사진 업로드 <br></br>
                  <input ref="file" type="file" className="button" onChange={this.appendData}/>
                <div id="show_image"> 
                  {this.displayData}
                </div>
                </div>
            </div>
            :null}
            {this.state.showMe1? // gif 업로드
              <div id="mainContainer2"> 
              <div id="gif-box">
              여긴 움짤 업로드드드 <br></br>
                  <input ref="file" type="file" className="button" onChange={this.appendData}/>
                <div id="show_image"> 
                  {this.displayData2}
                </div>
                </div>
              </div>
            :null}
          </div> 
          </div>
      </main>
    );
  }
  }
