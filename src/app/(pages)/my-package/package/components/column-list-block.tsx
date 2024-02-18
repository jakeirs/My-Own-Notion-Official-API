import { Fragment } from "react";
import {
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { renderComponentsMy } from "../Render";

export const ColumnListBlock = (props: {
  data: ColumnListBlockObjectResponse;
}) => {
  const { data } = props;

  return (
    <div className={`notion-${data.type}`}>
      {data.children.map((column: ColumnBlockObjectResponse) => (
        <Fragment key={column.id}>{renderComponentsMy(column)}</Fragment>
      ))}
    </div>
  );
};

export const ColumnBlock = (props: { data: ColumnBlockObjectResponse }) => {
  const { data } = props;

  return (
    <div className={`notion-${data.type}`}>
      {data.children.map((block: ColumnBlockObjectResponse) => (
        <Fragment key={block.id}>{renderComponentsMy(block)}</Fragment>
      ))}
    </div>
  );
};
