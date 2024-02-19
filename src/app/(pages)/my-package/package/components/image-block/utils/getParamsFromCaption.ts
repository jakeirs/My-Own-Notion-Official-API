import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type ParamsFromCaption = {
  height: `${number}` | number | undefined;
  width: `${number}` | number | undefined;
  objectFit: "contain" | "cover" | undefined;
  align: "center" | "start" | "end" | undefined;
  caption: string | undefined;
  alt: string | undefined;
};

export const getParamsFromCaption = (
  caption: RichTextItemResponse[]
): ParamsFromCaption => {
  const defaultValues = {
    height: `${400}`,
    width: undefined,
    objectFit: "contain",
    align: "center",
    caption: "",
    alt: "",
  };
  if (caption.length === 0) return defaultValues;

  //@todo add html-sanitizer
  const paramsStringify = caption[0].plain_text.trim();
  const paramsArr: string[] = paramsStringify.match(/[^[\]]+(?=\])/g) || [];
  const paramsFromCaption = paramsArr.reduce(
    (acc, val) => {
      const array = val.split(":");
      if (array.length === 2) {
        const key = val.split(":")[0].trim();
        const value = val.split(":")[1].trim();

        return { ...acc, [key]: `${value}` };
      }

      return { ...acc, caption: val };
    },
    { ...defaultValues }
  ) as ParamsFromCaption;

  return paramsFromCaption;
};
