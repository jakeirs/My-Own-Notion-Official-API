import { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TextAnnotations } from "./text-annotations";

export const QuoteBlock = (props: { data: QuoteBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;

  return (
    <blockquote
      className={`notion-${data.type} notion-color-${data[type].color}`}
    >
      <TextAnnotations richTextArr={data[type].rich_text} />
    </blockquote>
  );
};
