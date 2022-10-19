import { nanoid } from "nanoid";

export class NanoId {
  static new() {
    return nanoid();
  }
}
