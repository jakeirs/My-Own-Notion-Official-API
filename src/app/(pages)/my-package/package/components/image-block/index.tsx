import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import Image from "next/image";
import cx from "classnames";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TextAnnotations } from "../text-annotations";
import { getParamsFromCaption } from "./utils";

export const ImageBlock = (props: { data: ImageBlockObjectResponse }) => {
  const { data } = props;
  const { type } = data;
  const captionText = data[type].caption;
  const url =
    data[type].type === "external" ? data[type].external.url : ("" as string);

  const paramsFromCaption = getParamsFromCaption(captionText);
  const {
    width = 400,
    height = 400,
    align = "center",
    objectFit = "contain",
    alt,
    caption,
  } = paramsFromCaption;
  return (
    <div
      className={cx("w-full flex my-4", {
        "justify-center": align === "center",
        "justify-start": align === "start",
        "justify-end": align === "end",
      })}
    >
      <figure>
        <Image
          src={url}
          className="pointer-events-none"
          alt={alt || caption || ""}
          {...{ width, height }}
        />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};
