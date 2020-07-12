import React from "react";
import pagesData from "./../../Assets/pages.json";
import HeaderNavigation from "./../Navigation/Header";
import FooterNavigation from "./../Navigation/Footer";
import RecentBlog from "./../RecentBlogs";
import "./home.css";
import { connect } from "react-redux";
import * as GlobalConstants from "./../../Components/GlobalConstants";
import DisplayTags from "./../TagFilter/DisplayTags";
import store from "./../ReduxStore/pageStore";

import { initializePageAction } from "../ReduxStore/actions/pageActions";

class Home extends React.Component {
  constructor(props) {
    super(props);

    document.title = "Welcome to www.tekkishare.com";
  }

  render() {
    var pagesActiveData = null;
    var stateObject = store.getState();

    if (stateObject.PageData === null || stateObject.PageData.length === 0) {
      pagesActiveData = pagesData.filter((page) => page.isActive === true);
      store.dispatch(initializePageAction(pagesActiveData));

      stateObject = store.getState();
      pagesActiveData = stateObject.PageData;
    } else {
      pagesActiveData = stateObject.PageData;
    }

    localStorage.setItem(
      GlobalConstants.KEY_HOME_PAGE_DATA,
      JSON.stringify(store.getState())
    );

    return (
      <React.Fragment>
        <div className="App">
          <HeaderNavigation />
          <div className="contentSection">
            <div className="container">
              <div className="row">
                <div className="col-sm-9">
                  {/* Content Area */}
                  <div>
                    {pagesActiveData.map((page, sequence) => {
                      return <PageList key={sequence} page={page} />;
                    })}
                  </div>
                  {/* Content Area End */}
                </div>
                <div className="col-sm-3">
                  <RecentBlog itemCount="20" />
                  <DisplayTags />
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

class PageList extends React.Component {
  render() {
    return (
      <div className="pageItem">
        <div className="pageTitle">
          <a href={this.props.page.url}>{this.props.page.title}</a>
        </div>
        <div className="pageShortDescription">
          {this.props.page.shortDescription}
        </div>
        <div className="pageButton">
          <a href={this.props.page.url}>Read More ...</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    PageData: state.PageData,
  };
};

export default connect(mapStateToProps)(Home);
//export default Home;
