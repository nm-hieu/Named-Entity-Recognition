import React from "react";

import "./highlight.css";

import { entityList } from "../entityList";

class Highlight extends React.Component {
  colorLookup = (label) => {
    entityList.map(entity => {
      return entity.label === label ? entity.color : null;
    })
  }

  render() {
    const color = entityList.reduce((entity, current) => {
      return (current.label === this.props.label ? current.color : entity);
    }, undefined);
    
    const styles = {
      container: {
        backgroundColor: color,
      },
    }

    return (
      <div className="highlight-container" style={styles.container}>
        {this.props.children}
        <div className="highlight-label unselectable">{this.props.label}</div>
      </div>
    );
  }
}

export default Highlight;
