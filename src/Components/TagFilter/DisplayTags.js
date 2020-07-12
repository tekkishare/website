import React from "react";
import * as GlobalConstants from "./../../Components/GlobalConstants";
import store from "./../ReduxStore/pageStore";
import { initializePageAction } from "../ReduxStore/actions/pageActions";
import "./tags.css";

class DisplayTags extends React.Component {
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

    var tags = "";
    storeObject.PageData.forEach((page) => {
      tags = tags + page.tag + ";";
    });

    tags = tags.endsWith(";") ? tags.substr(0, tags.length - 1) : tags;

    var arrTags = tags.split(";");
    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    arrTags = arrTags.filter(distinct);
    //console.log(arrTags);

    return (
      <React.Fragment>
        <div className="tagContainer">
          <div className="empty"></div>
          <div>Tags</div>

          {arrTags.map((tag, key) => {
            return <Tag value={tag} key={key} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

function Tag(props) {
  var pageCate = "/tags?cat=" + props.value;
  return (
    <React.Fragment>
      <span>
        <a href={pageCate}>{props.value}</a>
      </span>
      <label>&nbsp;</label>
    </React.Fragment>
  );
}

export default DisplayTags;
