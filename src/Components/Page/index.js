import React from "react";
import axios from "axios";
import RenderPageContent from "./RenderPageContent";
import HeaderNavigation from "./../Navigation/Header";
import FooterNavigation from "./../Navigation/Footer";
import AboutMe from "./../AboutMe";
import "./page.css";
import RecentBlog from "./../RecentBlogs";
import DisplayTags from "./../TagFilter/DisplayTags";
import Metadata from "./../MetaData";

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      PageContent: {
        blogHeading: "Welcome to tekkishare.com",
        contents: [
          {
            sequence: 1,
            content:
              "<center><b>Content fetching is in progress. Kindly wait</b></center>",
            style: "NormalHtml",
          },
          {
            sequence: 2,
            content: "",
            refrence: "/images/loading.gif",
            style: "IMAGECENTER",
          },
        ],
      },
    };

    document.title = this.state.PageContent.blogHeading;
  }

  componentDidMount = () => {
    //console.log(window.location);
    var jsonFilePath = window.location.pathname + ".json";
    let self = this;
    axios
      .get(jsonFilePath) //
      .then((responseData) => {
        var responseJSON = responseData.data;
        this.setState({ PageContent: responseJSON });

        document.title = responseData.data.blogHeading;

        var url = window.location.origin + window.location.pathname;
        var image = window.location.origin + this.state.PageContent.metaImage;
        this.AddMetaData(
          url,
          responseData.data.metaTitle,
          image,
          responseData.data.metaDescription,
          responseData.data.metaKeywords
        );
      })
      .catch(function (error) {
        if (error.request) {
          var pageNotFound = {
            blogHeading: "Resource Not Found",
            contents: [
              {
                sequence: 1,
                content:
                  "<center><b>The resource  you are looking for currently not available.</b></center>",
                style: "NormalHtml",
              },
              {
                sequence: 2,
                content: "",
                refrence: "/images/404.jpg",
                style: "IMAGECENTER",
              },
            ],
          };

          self.setState({ PageContent: pageNotFound });
        }
      });
  };

  AddMetaData = (url, title, image, description, key) => {
    this.AddCononicalHeaderIfNotExist("og:url", url);
    this.AddCononicalHeaderIfNotExist("og:type", "website");
    this.AddCononicalHeaderIfNotExist("og:title", title);
    this.AddCononicalHeaderIfNotExist("og:description", description);
    this.AddCononicalHeaderIfNotExist("og:image", image);

    this.AddHeaderIfNotExist("keywords", key);
    this.AddHeaderIfNotExist("description", description);
    this.AddHeaderIfNotExist("title", title);
  };

  AddCononicalHeaderIfNotExist = (metaProperty, metaValue) => {
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

  AddHeaderIfNotExist = (metaProperty, metaValue) => {
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
      <React.Fragment>
        {/* <Metadata
          url={window.location.origin + window.location.pathname}
          description={this.state.PageContent.metaDescription}
          key={this.state.PageContent.metaKeywords}
          title={this.state.PageContent.metaTitle}
          image={window.location.origin + this.state.PageContent.metaImage}
        /> */}

        <div className="App">
          <HeaderNavigation />
          <div className="contentSection">
            <div className="pageHeader">
              <label>{this.state.PageContent.blogHeading}</label>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-9">
                  <div className="pageTop">
                    <div className="pageEmptyRow"></div>
                    {this.state.PageContent.contents
                      .sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
                      .map((content, sequence) => {
                        return (
                          <RenderPageContent key={sequence} data={content} />
                        );
                      })}
                    <div className="pageEmptyRow"></div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <RecentBlog itemCount="6" />
                  <DisplayTags />
                  <div className="pageEmptyRow"></div>
                  <AboutMe />
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

// const mapStateToProps = (state) => {
//   return { PageData: state.PageData };
// };

//export default connect(mapStateToProps)(Page);
export default Page;
