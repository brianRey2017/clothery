import { MenuItem } from "@components/menu-item/menu-item.component";
import React, { Component } from "react";
import { sections } from "./sections";
import "./directory.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = { sections };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, imageUrl, size, title }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}