// import React, { Component } from "react";
// import { LanguageContext } from "./LanguageContext";

// export default class DisplayLanguage extends Component {
//   render() {
//     return (
//       <div>
//         <LanguageContext.Consumer>
//           {(lang) => {
//             return (
//               <div>
//                 {lang === "it" && "Hai scelto la lingua italiana"}
//                 {lang === "en" && "You have chosen the english language"}
//                 {lang === "fr" && "Vous avez choisi la langue française"}
//               </div>
//             );
//           }}
//         </LanguageContext.Consumer>
//       </div>
//     );
//   }
// }

import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function DisplayLanguage() {
  const lang = useContext(LanguageContext);
  return (
    <div>
      {lang === "it" && "Hai scelto la lingua italiana"}
      {lang === "en" && "You have chosen the english language"}
      {lang === "fr" && "Vous avez choisi la langue française"}
    </div>
  );
}
