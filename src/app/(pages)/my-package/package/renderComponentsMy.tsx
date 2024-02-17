import React from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  BulletedListBlockObjectResponse,
  BulletedList,
} from "./components/bulleted-list-item";
import { Heading1Block } from "./components/heading1-block";
import { Heading2Block } from "./components/heading2-block";

export function renderComponentsMy(
  block: BlockObjectResponse | BulletedListBlockObjectResponse
) {
  const { type, id } = block;
  let value = "";
  switch (type) {
    case "heading_1":
      return <Heading1Block data={block} />;
    case "heading_2":
      return <Heading2Block data={block} />;
    case "heading_3":
      return <Heading3Block data={block} />;
    case "bulleted_list":
      return <BulletedList data={block} />;
    default:
      return null;
  }
}
