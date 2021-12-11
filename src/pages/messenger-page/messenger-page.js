import Handlebars from "handlebars";
import { messengerTmpl } from "./messenger-page.tmpl";
import "./messenger-page.scss";

export class MessengerPage {

  constructor() {
    this.compiler = Handlebars.compile(messengerTmpl);
  }

  compile() {
    return this.compiler()
  }
}