import { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const Heading2Block = (props: { data: Heading2BlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;
  const value = data[type].rich_text[0].plain_text;

  return (
    <h2 className={`notion-${type} notion-color-${data.heading_2.color}`}>
      {value}
    </h2>
  );
};
