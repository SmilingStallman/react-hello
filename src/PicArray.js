import React, { Component } from 'react';

//Creates a component with an array of images, then cyles through images, one image per 3 seconds
class PicArray extends Component {
  //Constructor creates time value and starts update method
  constructor(props){
    super(props);
    this.state = {urlList: ['images/stocks/1.jpg',
                        'images/stocks/2.png',
                        'images/stocks/3.jpg',
                        'images/stocks/4.jpg',
                        'images/stocks/5.png',
                        'images/stocks/6.jpg',
                        'images/stocks/7.jpg',
                        'images/stocks/8.png',
                        'images/stocks/9.jpg',
                        'images/stocks/10.png'
                        ],
                   currentIndex: 0,
                   alt: "wojack"
                  };
    this.switchImage();   //starts time when class created
  }

  //incriments this.CurrentIndex by +1 until going to breach array range, then resets to 0
  nextImage(){
    if(this.state.currentIndex >= this.state.urlList.length-1)
      this.setState({currentIndex: 0});
    else
      this.setState({currentIndex: this.state.currentIndex+1});
  }

  //updates image every second
  switchImage(){
        setInterval(()=> this.nextImage(), 3000);
  }

  //Time component with time value that updates every second is rendered
  render() {
        let pic = <div style={{margin: "auto"}}>
                  <img src={this.state.urlList[this.state.currentIndex]} alt="wojack"
                    style={{width:"100%", height: "100%"}}>
                  </img>
                </div>;
        //different image sizes for larger and smaller viewports
        if(document.documentElement.clientWidth > 900){
          pic.props.style.width="30vw";
          pic.props.style.height="30vw";
        }
        else{
          pic.props.style.width="90vw";
          pic.props.style.height="90vw";
        }
        return pic;
  }
}

export default PicArray;
