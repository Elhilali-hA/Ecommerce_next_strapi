import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const TopSection = () => {

  return (
    <div>
        <section className="section-slide">
      
       <Carousel>
      <Carousel.Item>
      <div className="item-slick" style={{backgroundImage: 'url(images/slide-01.jpg)'}}>
        <div className="container h-full ">
          <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div className="" data-appear="fadeInDown" data-delay={0}>
              <span className="ltext-101 cl2 respon2">
                Women Collection 2018
              </span>
            </div>
            <div className="" data-appear="fadeInUp" data-delay={800}>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                NEW SEASON
              </h2>
            </div>
            <div className="" data-appear="zoomIn" data-delay={1600}>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
       
      </Carousel.Item>

      <Carousel.Item>
      <div className="item-slick" style={{backgroundImage: 'url(images/slide-02.jpg)'}}>
        <div className="container h-full">
          <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div className="" data-appear="rollIn" data-delay={0}>
              <span className="ltext-101 cl2 respon2">
                Men New-Season
              </span>
            </div>
            <div className="" data-appear="lightSpeedIn" data-delay={800}>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                Jackets &amp; Coats
              </h2>
            </div>
            <div className="" data-appear="slideInUp" data-delay={1600}>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

        
      </Carousel.Item>

      <Carousel.Item>
      <div className="item-slick" style={{backgroundImage: 'url(images/slide-03.jpg)'}}>
        <div className="container h-full">
          <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div className="" data-appear="rotateInDownLeft" data-delay={0}>
              
              <span className="ltext-101 cl2 respon2">
                Men Collection 2018
              </span>
            </div>
            <div className="" data-appear="rotateInUpRight" data-delay={800}>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                New arrivals
              </h2>
            </div>
            <div className="" data-appear="rotateIn" data-delay={1600}>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
        
      </Carousel.Item>
    </Carousel>


</section>



        
      
    </div>
  )
}

export default TopSection
