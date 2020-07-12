import React from 'react'

export default class RenderPageContentNormal extends React.Component{

    render(){
        return(
            <p className="pageContentParagraph">
                {this.props.data.content}
            </p>
        )
    }
}