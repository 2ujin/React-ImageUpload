import React from 'react';
import ImagesUploader  from 'react-images-upload';
import './App.css';

export default class App extends React.PureComponent {
  state = {
    counter : 0
  }
  ondrop= (e) => {
		this.setState({
      counter : this.state.counter + 1
    });
  }      
  render() {
    return (
      <main className="image-upload">
          <img src="https://studio.stipop.io/static/images/logo-pink.svg" className="title" />
          <img src="https://studio.stipop.io/static/images/tag-studio.png" className="studio"/>
          <div className="page">
            <div className="info">정보다</div>
            <ImagesUploader className="imageuploader"
              withIcon={false}
              withPreview={true}
              withLabel={false}
              buttonText='Upload!'
              onChange={this.onDrop}
              imgExtension={['.png', '.gif']}
              fileTypeError={'png와 gif로 올려주세요 :-)'}
              fileSizeError={'500kb 이하로 올려주세요 :-)'}
              maxFileSize={500000}
              color={'#142435'}
              onChange={this.ondrop}
              singleImage={true}
              />
              {this.state.counter}
        </div>
        </main>
    );

}

}
