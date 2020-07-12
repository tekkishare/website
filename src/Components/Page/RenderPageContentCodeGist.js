import React from "react";

export default class RenderPageContentCodeGist extends React.Component {
  render() {
    return (
      <div>
        <script src={this.props.data.refrence}></script>
      </div>
    );
  }
}
