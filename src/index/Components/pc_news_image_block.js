import React from 'react'
import { Card, Row, Col } from 'antd';

export default class PCNewsImageBlock extends React.Component{
    render(){
        const { Meta } = Card;
        return(
            <div class="topNewsList">
                <Row>
                    <Card
                        hoverable
                        class="topNewsListCard1"
                        style={{ width: 100 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>

                    <Card
                        hoverable
                        class="topNewsListCard2"
                        style={{ width: 100 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>

                    <Card
                        hoverable
                        class="topNewsListCard3"
                        style={{ width: 100 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Row>
            </div>
        )
    }
}