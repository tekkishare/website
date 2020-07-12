import React from "react";
import * as QueryString from "query-string";
import HeaderNavigation from "./../Navigation/Header";
import FooterNavigation from "./../Navigation/Footer";
import DisplayTags from "./../TagFilter/DisplayTags";
import RecentBlog from "./../RecentBlogs";
import AboutMe from "./../AboutMe";
import PagesForTag from "./PagesForTag";

class TagPage extends React.Component {
  render() {
    const params = QueryString.parse(this.props.location.search);
    if (params.cat === undefined) params.cat = "sitecore";

    return (
      <React.Fragment>
        <div className="App">
          <HeaderNavigation />
          <div className="contentSection">
            <div className="container">
              <div className="row">
                <div className="col-sm-9">
                  {/* Content Area */}
                  <div className="pageEmptyRow"></div>
                  <PagesForTag tag={params.cat} />
                  {/* Content Area End */}
                </div>
                <div className="col-sm-3">
                  <RecentBlog itemCount="4" />
                  <DisplayTags />
                  <div className="pageEmptyRow"></div>
                  <AboutMe />
                  <div className="pageEmptyRow"></div>
                </div>
              </div>
            </div>
          </div>
          <FooterNavigation />
        </div>
      </React.Fragment>
    );
  }
}

export default TagPage;
