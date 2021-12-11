import * as Handlebars from "handlebars";

import Block from "../../helpers/classes/block";
import { Props } from "../../helpers/models/props.model";
import { chatsListItemTmpl } from "./chats-list-item.tmpl";
import "../../helpers/helpers";
import "./chats-list-item.scss";

export type ChatsListItemProps = Props & {
  text: string;
  date: number;
  title: string;
  id: number;
};

export class ChatsListItem extends Block {
  constructor(props: ChatsListItemProps) {
    super(props, "div", ["chat-item"]);
  }

  render(): string {
    return Handlebars.compile(chatsListItemTmpl)(this.props);
  }
}
