import Handlebars from "handlebars";
import { chatsListItemTmpl } from "./chats-list-item.tmpl";
import "../../helpers/helpers";
import "./chats-list-item.scss";

export class ChatsListItem {

  constructor() {
    this.compiler = Handlebars.compile(chatsListItemTmpl);
  }

  compile() {
    return this.compiler()
  }
}
