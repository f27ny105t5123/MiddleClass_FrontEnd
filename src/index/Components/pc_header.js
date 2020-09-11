import React from 'react'
import { Row, Col } from 'antd';
import { Menu } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';

//export default必须有，将模块暴露出来，否则在index.js入口处无法import到这个模块
export default class PCHeader extends React.Component{
    render(){
        //const { current } = this.state;
        constructor(){
            super();
            this.state = {current: "top"}
        }

        return(
            <headers>
                <Row>
                    <Col span={2}>Space</Col>
                    <Col span={4}>
                        <a href="#" class="logo">
                            <img src="../../images/logo.png" />
                            <span>电信</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <HomeOutlined />
                        <Menu selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="top">
                                Navigation One
                            </Menu.Item>
                            <Menu.Item key="app">
                                Navigation Two
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}>Space</Col>
                </Row>
            </headers>
        )
    }
}