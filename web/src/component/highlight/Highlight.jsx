import React from "react";

import "./highlight.css";

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
