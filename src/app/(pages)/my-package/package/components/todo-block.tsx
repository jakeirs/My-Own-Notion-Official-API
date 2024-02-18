import { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TextAnnotations } from "./text-annotations";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";

export const TodoBlock = (props: { data: ToDoBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;

  return (
    <div
      className={`notion-${data.type}_list notion-color-${data[type].color}`}
      data-checked={`${data.to_do.checked}`}
    >
      <input
        type="checkbox"
        checked={data[type].checked}
        aria-disabled="true"
        readOnly
      />
      <TextAnnotations richTextArr={data[type].rich_text} />
    </div>
  );
};
