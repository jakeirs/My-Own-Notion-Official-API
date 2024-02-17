import { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { TextAnnotations } from "./text-annotations";

export type BulletedListBlockObjectResponse = {
  type: "bulleted_list";
  id: string;
  bulleted_list: {
    children: BulletedListItemBlockObjectResponse[];
  };
};

export const BulletedList = (props: {
  data: BulletedListBlockObjectResponse;
}) => {
  const { data } = props;
  const { id, type } = data;

  return (
    <ul className={`notion-${type}`}>
      <ClientConsoleLog dataToLog={data} />
      {data[type].children.map((block) => (
        <BulletedListItem key={id} data={block} />
      ))}
    </ul>
  );
};

const BulletedListItem = (props: {
  data: BulletedListItemBlockObjectResponse;
}) => {
  const { data } = props;
  const { id, type, bulleted_list_item } = data;

  return (
    <li
      className={`notion-${data.type} notion-color-${data.bulleted_list_item.color}`}
    >
      <TextAnnotations richTextArr={bulleted_list_item.rich_text} />
    </li>
  );
};