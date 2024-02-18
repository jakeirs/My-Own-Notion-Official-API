import { Fragment } from "react";
import {
  BlockObjectResponse,
  ToggleBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { TextAnnotations } from "./text-annotations";
import { renderComponentsMy } from "../Render";

export const ToggleBlock = (props: { data: ToggleBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;

  return (
    <details className={`notion-${type} notion-color-${data[type].color}`}>
      <summary>
        <TextAnnotations richTextArr={data[type].rich_text} />
      </summary>
      {data.children.map((block: BlockObjectResponse) => (
        <Fragment key={block.id}>{renderComponentsMy(block)}</Fragment>
      ))}
    </details>
  );
};
