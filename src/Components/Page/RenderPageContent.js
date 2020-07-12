import React from "react";
import RenderPageContentNormalHTML from "./RenderPageContentNormalHTML";
import RenderPageContentNormal from "./RenderPageContentNormal";
import RenderPageContentImage from "./RenderPageContentImage";
import RenderPageContentBoldHeading from "./RenderPageContentBoldHeading";
import RenderPageContentLink from "./RenderPageContentLink";
import RenderPageContentCodeGist from "./RenderPageContentCodeGist";
import RenderPageContentCode from "./RenderPageContentCode";
import RenderPageContentImageCenter from "./RenderPageContentImageCenter";

class RenderPageContent extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.style.toUpperCase() === "NORMALHTML" ? (
          <RenderPageContentNormalHTML data={this.props.data} />
        ) : this.props.data.style.toUpperCase() === "NORMAL" ? (
          <RenderPageContentNormal data={this.props.data} />
        ) : this.props.data.style.toUpperCase() === "LINK" ? (
          <RenderPageContentLink data={this.props.data} />
        ) : this.props.data.style.toUpperCase() === "BOLDHEADING" ? (
          <RenderPageContentBoldHeading data={this.props.data} />
        ) : this.props.data.style.toUpperCase() === "IMAGE" ? (
          <RenderPageContentImage data={this.props.data} />
        ) : this.props.data.style.toUpperCase() === "IMAGECENTER" ? (
          <RenderPageContentImageCenter data={this.props.data} />
        ) : this.props.data.style.toUpperCase() === "CODEGIST" ? (
          <RenderPageContentCodeGist data={this.props.data} />
        ) : this.props.data.style.toUpperCase() === "CODE" ? (
          <RenderPageContentCode data={this.props.data} />
        ) : (
          <React.Fragment />
        )}
      </div>
    );
  }
}

export default RenderPageContent;
