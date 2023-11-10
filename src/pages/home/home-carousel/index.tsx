import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '560px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

import './carousel.module.scss';


const HomeCarousel: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img style={{ maxWidth: '100%', maxHeight: '140%', objectFit: 'contain' }} src="https://sadesign.vn/wp-content/uploads/2021/04/chup-anh-giay-dep.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img style={{ maxWidth: '100%', maxHeight: '140%', objectFit: 'contain' }} src="https://www.elleman.vn/wp-content/uploads/2018/08/13/gi%C3%A0y-sneakers-2-elle-man-8.jpg" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img style={{ maxWidth: '100%', maxHeight: '140%', objectFit: 'contain' }} src="https://anhdep123.com/wp-content/uploads/2021/01/anh-giay-adidas.jpg" alt="" />
      </h3>
    </div>
  </Carousel>
);

export default HomeCarousel;