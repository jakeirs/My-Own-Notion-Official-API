import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TextAnnotations } from "./text-annotations";

export const ParagraphBlock = (props: {
  data: ParagraphBlockObjectResponse;
}) => {
  const { data } = props;
  const { type } = data;

  return (
    <p className={`notion-${type} notion-color-${data[type].color}`}>
      <TextAnnotations richTextArr={data[type].rich_text} />
    </p>
  );
};
