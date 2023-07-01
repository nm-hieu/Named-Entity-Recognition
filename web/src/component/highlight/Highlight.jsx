import React from "react";

import "./highlight.css";

import entityList from "../entityList";

// TODO
// 1. Write a style for highlight-container
// 2. Write a lookup table function to look up color of tag from entityList
// 3. Make the tag name change depend on the tag in highlight-label

class Highlight extends React.Component {
  render() {
    return ( 
        <div className="highlight-container">
            {this.props.children}
            <div className="highlight-label">Label</div>
        </div>
    );
  }
}

export default Highlight;
