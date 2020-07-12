import React from "react";

class RenderPageContentCode extends React.Component {
  render() {
    return (
      <p
        dangerouslySetInnerHTML={{
          __html: this.props.data.content,
        }}
        className="pageCodeParagraph"
      ></p>
    );
  }
}

export default RenderPageContentCode;
