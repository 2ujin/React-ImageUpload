import React from 'react';
import './App.css';

export default class App extends React.PureComponent {
  
  constructor() {
    super();
    var color1 = '#F9F9F9';
    var color2 = '#cfcfcf';

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
  var color1 = '#F9F9F9';
  var color2 = '#cfcfcf';
  this.setState({
    showMe: false,
    showMe1: true,
    color: color1,
    colorr: color2
  })
}
click2(){
  var color1 = '#F9F9F9';
  var color2 = '#cfcfcf';
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
            띠로링
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
