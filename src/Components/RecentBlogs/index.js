import React from "react";
import store from "./../ReduxStore/pageStore";
//import { GetMostRecentPageList } from "../ReduxStore/actions/pageActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as GlobalConstants from "./../../Components/GlobalConstants";
import "./recentBlogs.css";

import { initializePageAction } from "../ReduxStore/actions/pageActions";

class RecentBlogs extends React.Component {
  render() {
    var storeObject = null;
    //check local strage for existance
    if (localStorage.getItem(GlobalConstants.KEY_HOME_PAGE_DATA) === null) {
      store.dispatch(initializePageAction());

      //set local starage
      localStorage.setItem(
        GlobalConstants.KEY_HOME_PAGE_DATA,
        JSON.stringify(store.getState())
      );

      //console.log("created local storage.");
      //get item from storage
      storeObject = JSON.parse(
        localStorage.getItem(GlobalConstants.KEY_HOME_PAGE_DATA)
      );
    } else {
      //console.log("fetching from local storage.");
      //get from local storage
      storeObject = JSON.parse(
        localStorage.getItem(GlobalConstants.KEY_HOME_PAGE_DATA)
      );
      //check expiration Date
      if (storeObject.ExpirationDate <= new Date()) {
        console.log("local storage expired.");
        store.dispatch(initializePageAction());

        localStorage.setItem(
          GlobalConstants.KEY_HOME_PAGE_DATA,
          JSON.stringify(store.getState())
        );

        storeObject = JSON.parse(
          localStorage.getItem(GlobalConstants.KEY_HOME_PAGE_DATA)
        );
      }
    }

    storeObject = storeObject.PageData.sort((a, b) =>
      new Date(a.date.split("/")) > new Date(b.date.split("/")) ? -1 : 1
    );

    var itemCount = 5;
    if (this.props.itemCount !== undefined) itemCount = this.props.itemCount;

    storeObject = storeObject.slice(0, itemCount);

    return (
      <React.Fragment>
        <div className="RecentBlogContainer">
          <div className="empty">&nbsp;</div>
          <div>Most Recent Post</div>
          {storeObject.map((page, sequence) => {
            return <RecentBlogsItem data={page} key={sequence} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

class RecentBlogsItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          <a href={this.props.data.url}> {this.props.data.title}</a>
        </p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { PageData: state.PageData };
};

export default connect(mapStateToProps)(withRouter(RecentBlogs));
//export default RecentBlogs;
