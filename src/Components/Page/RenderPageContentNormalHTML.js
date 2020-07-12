import React from 'react'

class RenderPageContentNormalHTML extends React.Component{
    render(){
        return(
            <p dangerouslySetInnerHTML={{
                __html: this.props.data.content
            }} className="pageContentParagraph">
            </p>
        )
    }
}

export default RenderPageContentNormalHTML;