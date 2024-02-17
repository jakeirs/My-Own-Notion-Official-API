import { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const Heading1Block = (props: { data: Heading1BlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;
  const value = data[type].rich_text[0].plain_text;

  return (
    <h1 className={`notion-${type} notion-color-${data.heading_1.color}`}>
      {value}
    </h1>
  );
};
