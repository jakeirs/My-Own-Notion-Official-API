import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import React, { Fragment } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  Heading1Block,
  Heading2Block,
  Heading3Block,
  BulletedList,
  NumberedList,
  BulletedListBlockObjectResponse,
  NumberedListBlockObjectResponse,
  CalloutBlock,
  ParagraphBlock,
  QuoteBlock,
  ColumnListBlock,
  ColumnBlock,
} from "./components";
import { TextAnnotations } from "./components/text-annotations";

export function renderComponentsMy(
  block:
    | BlockObjectResponse
    | BulletedListBlockObjectResponse
    | NumberedListBlockObjectResponse
) {
  const { type, id } = block;

  switch (type) {
    case "paragraph":
      return <ParagraphBlock data={block} />;
    case "heading_1":
      return <Heading1Block data={block} />;
    case "heading_2":
      return <Heading2Block data={block} />;
    case "heading_3":
      return <Heading3Block data={block} />;
    case "bulleted_list":
      return <BulletedList data={block} />;
    case "numbered_list":
      return <NumberedList data={block} />;
    case "callout":
      return <CalloutBlock data={block} />;
    case "quote":
      return <QuoteBlock data={block} />;
    case "column_list":
      return <ColumnListBlock data={block} />;
    case "column":
      return <ColumnBlock data={block} />;
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
