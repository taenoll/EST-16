import { isString } from "../utils.js";
import { getNode } from "./getNode.js";



export function endScroll(node){

  if(isString(node)) node = getNode(node);

  node.scrollTop = node.scrollHeight;
}