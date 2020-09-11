import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_newscontainer'

//export default必须有，将模块暴露出来，否则在index.js入口处无法import到这个模块
export default class PCIndex extends React.Component{
    render(){
        return(
            <div class="container">
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}