import { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { TextAnnotations } from "./text-annotations";

export const CalloutBlock = (props: { data: CalloutBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;

  return (
    <blockquote className={`notion-${type} notion-color-${data[type].color}`}>
      <div className="icon">{data.callout.icon?.emoji}</div>
      <div className="content">
        <TextAnnotations richTextArr={data[type].rich_text} />
      </div>
    </blockquote>
  );
};
