import React from "react";

class UtilReducer extends React.Component {
  constructor(props) {
    super(props);

    this.GetMostRecent = this.GetMostRecent.bind(this);
  }

  GetMostRecent(pagesList) {
    console.log("sorted page:");
    var sortedPagesList = pagesList.sort((a, b) => (a.date > b.date ? 1 : -1));
    console.log("sorted page end:");
    return sortedPagesList;
  }
}

export default UtilReducer;
