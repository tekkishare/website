import React from "react";

class RenderPageContentImageCenter extends React.Component {
  render() {
    return (
      <p className="pageContentImage">
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

export default RenderPageContentImageCenter;
