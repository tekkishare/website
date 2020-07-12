import React from "react";
import * as GlobalConstants from "./../../Components/GlobalConstants";
import store from "./../ReduxStore/pageStore";
import { initializePageAction } from "../ReduxStore/actions/pageActions";
import TagTeaser from "./TagTeaser";

class PagesForTag extends React.Component {
  render() {
    var storeObject = null;
    var arrPages = [];
    //check local strage for existance
    if (localStorage.getItem(GlobalConstants.KEY_HOME_PAGE_DATA) === null) {
      store.dispatch(initializePageAction());

      //set local starage
      localStorage.setItem(
        GlobalConstants.KEY_HOME_PAGE_DATA,
        JSON.stringify(store.getState())
      );

      //get item from storage
      storeObject = JSON.parse(
        localStorage.getItem(GlobalConstants.KEY_HOME_PAGE_DATA)
      );
    } else {
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

    storeObject.PageData.forEach((page) => {
      AddPages(page, this.props.tag);
    });

    //console.log(arrPages);

    function AddPages(page, tag) {
      var arrTags = [];
      arrTags = page.tag.split(";");
      arrTags.forEach((element) => {
        if (element.toLowerCase() === tag.toLowerCase()) {
          arrPages.push(page);
        }
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            {arrPages.map((page, key) => {
              return <TagTeaser Page={page} key={key} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PagesForTag;
