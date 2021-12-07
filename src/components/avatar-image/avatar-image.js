import Handlebars from "handlebars";
import { avatarImageTmpl } from "./avatar-image.tmpl";
import "./avatar-image.scss";


export class AvatarImage {
  constructor() {
    this.compiler = Handlebars.compile(avatarImageTmpl);
  }

  compile() {
    return this.compiler()
  }
}
