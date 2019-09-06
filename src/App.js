import React from 'react';
import ImageUploader from 'react-images-upload';
import './App.css';

export default class App extends React.PureComponent {
  render() {
    return (
        <div className="page">
            <ImageUploader style={{ 
              maxWidth: '500px', 
              margin: "20px auto"
            }}
              withIcon={false}
              withPreview={true}
              withLabel={false}
              buttonText='Upload!'
              onChange={this.onDrop}
              imgExtension={['.png', '.gif']}
              fileTypeError={''}
              maxFileSize={500000}
              
              />
        </div>
    );
}

}
