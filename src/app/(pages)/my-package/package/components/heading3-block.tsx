import { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const Heading3Block = (props: { data: Heading3BlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;
  const value = data[type].rich_text[0].plain_text;

  return (
    <h3 className={`notion-${type} notion-color-${data.heading_3.color}`}>
      {value}
    </h3>
  );
};
