import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import Image from "next/image";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TextAnnotations } from "../text-annotations";
import { getParamsFromCaption } from "./utils";

export const ImageBlock = (props: { data: ImageBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;
  const caption = data[type].caption;
  const url =
    data[type].type === "external" ? data[type].external.url : ("" as string);

  const paramsFromCaption = getParamsFromCaption(caption);

  return (
    <Image
      src={url}
      className="pointer-events-none"
      alt="blurred background"
      width="300"
      height="300"
      // było fill
      priority={true}
    />
  );
};
