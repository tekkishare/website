import React from 'react'

export default class RenderPageContentBoldHeading extends React.Component{
    render(){
        return(
            <p className="pageContentParagraphBoldHeading">{this.props.data.content}</p>
        )
    }
}