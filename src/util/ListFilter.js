import { ListContent } from "./Data";

export function getList() {
  const ContentList = ListContent;
  return ContentList;
}

export function filterContent(it) {
  let filtredContent = getList().filter(type => type.nome === it);
  return filtredContent;
}
