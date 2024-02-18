import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TextAnnotations } from "./text-annotations";

export const ImageBlock = (props: { data: ImageBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;
  const caption = data[type].caption;
  const url = data[type].type === "external" ? data[type].external.url : null;

  return (
    <div>
      PHOTO
      <img src={url} />
      <TextAnnotations richTextArr={caption} />
      <ClientConsoleLog dataToLog={data} name={``} />
    </div>
  );
};
