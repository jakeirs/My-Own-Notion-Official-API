import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import React, { Fragment } from "react";
import {
  BlockObjectResponse,
  Heading1BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import {
  BulletedListBlockObjectResponse,
  BulletedList,
} from "./components/bulleted-list-item";

function renderComponentsMy(
  block: BlockObjectResponse | BulletedListBlockObjectResponse
) {
  const { type, id } = block;
  let value = "";
  switch (type) {
    // case "heading_1":
    //   value = block[type].rich_text[0].plain_text;
    //   return <h1 className="text-3xl">{value}</h1>;
    // case "heading_2":
    //   value = block[type].rich_text[0].plain_text;
    //   return <h2 className="text-2xl">{value}</h2>;
    case "heading_3":
      value = block[type].rich_text[0].plain_text;
      return <h2 className="text-xl">{value}</h2>;
    case "bulleted_list":
      return <BulletedList data={block} />;
    default:
      return null;
  }
}

export function RenderBlocksMy(props: { blocks: BlockObjectResponse[] }) {
  const { blocks } = props;

  return (
    <div className="notion-render">
      {blocks.map((block: BlockObjectResponse) => (
        <Fragment key={block.id}>{renderComponentsMy(block)}</Fragment>
      ))}
    </div>
  );
}
