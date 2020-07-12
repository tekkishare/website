import React from "react";

export default class RenderPageContentLink extends React.Component {
  render() {
    var urlRef =
      this.props.data.refrence.length > 0 ? this.props.data.refrence : "#";
    return (
      <p className="pageContentParagraph">
        <a href={urlRef}>
          {this.props.data.content.length > 0
            ? this.props.data.content
            : this.props.data.refrence}
        </a>
      </p>
    );
  }
}
