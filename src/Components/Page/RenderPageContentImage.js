import React from "react";

class RenderPageContentImage extends React.Component {
  render() {
    return (
      <p className="pageContentParagraph">
        <img
          className={
            this.props.data.applySize === true
              ? "pageContentImage"
              : "pageContentImageNoChange"
          }
          src={this.props.data.refrence}
          alt="http://techshare.com"
        />
      </p>
    );
  }
}

export default RenderPageContentImage;
