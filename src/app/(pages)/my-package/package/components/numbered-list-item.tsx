import { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { TextAnnotations } from "./text-annotations";

export type NumberedListBlockObjectResponse = {
  type: "numbered_list";
  id: string;
  numbered_list: {
    children: NumberedListItemBlockObjectResponse[];
  };
};

export const NumberedList = (props: {
  data: NumberedListBlockObjectResponse;
}) => {
  const { data } = props;
  const { id, type } = data;

  return (
    <ol className={`notion-${type}`}>
      <ClientConsoleLog dataToLog={data} name="ASDASDASDSA" />
      {data[type].children.map((block) => (
        <NumberedListItem key={id} data={block} />
      ))}
    </ol>
  );
};

const NumberedListItem = (props: {
  data: NumberedListItemBlockObjectResponse;
}) => {
  const { data } = props;
  const { type } = data;

  return (
    <li className={`notion-${data.type} notion-color-${data[type].color}`}>
      <TextAnnotations richTextArr={data[type].rich_text} />
    </li>
  );
};
