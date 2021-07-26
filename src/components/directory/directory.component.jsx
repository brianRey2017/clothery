import React, { Component } from "react";

import MenuItem from "@components/menu-item/menu-item.component";
import { SECTIONS } from "@data/sections";
import "./directory.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = { sections: SECTIONS };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} id={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}
