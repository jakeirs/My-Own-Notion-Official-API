import {
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { renderComponentsMy } from "../Render";

export const ColumnListBlock = (props: {
  data: ColumnListBlockObjectResponse;
}) => {
  const { data } = props;
  const { type } = data;

  return (
    <div className={`notion-${data.type}`}>
      {data.children.map((column: ColumnBlockObjectResponse) =>
        renderComponentsMy(column)
      )}
    </div>
  );
};

export const ColumnBlock = (props: { data: ColumnBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;

  return (
    <div className={`notion-${data.type}`}>
      {data.children.map((block: ColumnBlockObjectResponse) =>
        renderComponentsMy(block)
      )}
    </div>
  );
};
