import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import PCNewsImageBlock from './pc_news_image_block'

export default class PCNewsContainer extends React.Component{
    render(){
        const contentStyle = {
            autoplay: true,
            speed: 500,
            slidesToShow: true,
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };

        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...contentStyle}>
                                    <div>
                                        <img src="../../images/1.jpg"/>
                                    </div>
                                    <div>
                                        <img src="../../images/2.jpg"/>
                                    </div>
                                    <div>
                                        <img src="../../images/3.jpg"/>
                                    </div>
                                    <div>
                                        <img src="../../images/4.jpg"/>
                                    </div>
                                </Carousel>
                                <PCNewsImageBlock />
                            </div>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}