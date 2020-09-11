import React from 'react'
import { Row, Col } from 'antd';

export default class MobileFooter extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                        &copy;&nbsp;&nbsp;&nbsp; Powered by AnhuiTelecom -- 2020. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}