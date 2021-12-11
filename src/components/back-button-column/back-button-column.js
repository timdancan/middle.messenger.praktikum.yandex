import Handlebars from "handlebars";
import { backButtonColumnTmpl } from "./back-button-column.tmpl";
import "./back-button-column.scss";

export class BackButtonColumn {

  constructor() {
    this.compiler = Handlebars.compile(backButtonColumnTmpl);
  }

  compile() {
    return this.compiler()
  }
}

