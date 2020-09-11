import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

//export default必须有，将模块暴露出来，否则在index.js入口处无法import到这个模块
export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
            </div>
        )
    }
}