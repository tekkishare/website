import React from "react";
import { Helmet } from "react-helmet";

class Metadata extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.AddCononicalHeaderIfNotExist(props, "og:url", this.props.url);
    this.AddCononicalHeaderIfNotExist(props, "og:type", "website");
    this.AddCononicalHeaderIfNotExist(props, "og:title", this.props.title);
    this.AddCononicalHeaderIfNotExist(
      props,
      "og:description",
      this.props.description
    );
    this.AddCononicalHeaderIfNotExist(props, "og:image", this.props.image);

    this.AddHeaderIfNotExist(props, "keywords", this.props.key);
    this.AddHeaderIfNotExist(props, "description", this.props.description);
  }

  AddCononicalHeaderIfNotExist = (props, metaProperty, metaValue) => {
    console.log(document.head.innerHTML);
    if (document.head.innerHTML.indexOf(metaProperty) <= 0) {
      document.head.innerHTML =
        '<meta property="' +
        metaProperty +
        '" content="' +
        metaValue +
        '">' +
        document.head.innerHTML;
    }
  };

  AddHeaderIfNotExist = (props, metaProperty, metaValue) => {
    if (document.head.innerHTML.indexOf('name="' + metaProperty + '"') <= 0) {
      document.head.innerHTML =
        '<meta name="' +
        metaProperty +
        '" content="' +
        metaValue +
        '">' +
        document.head.innerHTML;
    }
  };

  render() {
    return (
      <React.Fragment></React.Fragment>
      // <Helmet>
      //   <title>{this.props.title}</title>
      //   <meta name="description" content={this.props.description} />
      //   <meta name="keywords" content={this.props.key} />

      //   <meta property="og:url" content={this.props.url} />
      //   <meta property="og:type" content="website" />
      //   <meta property="og:title" content={this.props.title} />
      //   <meta property="og:description" content={this.props.description} />
      //   <meta property="og:image" content={this.props.image} />
      // </Helmet>
    );
  }
}

export default Metadata;
