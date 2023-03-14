import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(lang) => {
            return <div></div>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
