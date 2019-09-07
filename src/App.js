import React from 'react';
import './App.css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class App extends React.PureComponent {

  constructor() {
    super();
    
    this.displayData = [];

    this.state = {
      showdata : this.displayData,
      postVal : ""
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

  render() {
    return (
      <main className="image-upload">
        <img src="https://studio.stipop.io/static/images/logo-pink.svg" className="title" />
        <img src="https://studio.stipop.io/static/images/tag-studio.png" className="studio"/>
          <div className="page"> 
            <div id="info">
                
            </div>
              <div id="mainContainer">
                <div id="img-box">
                  <input ref="file" type="file" className="button" onChange={this.appendData}/>
                <div> 
                  {this.displayData}
                </div>
                </div>
            </div>
          </div> 
      </main>
    );
  }
  }
