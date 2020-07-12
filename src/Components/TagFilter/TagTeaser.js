import React from "react";

export default class TagTeaser extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-sm-4 tagTeaser">
          <div className="tagTitle">
            <a href={this.props.Page.url}>{this.props.Page.title}</a>
          </div>
          <div className="tagShortDescription">
            {this.props.Page.shortDescription}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
