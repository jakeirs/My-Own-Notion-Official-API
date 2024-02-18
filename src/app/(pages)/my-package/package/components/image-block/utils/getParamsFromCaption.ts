import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const getParamsFromCaption = (caption: RichTextItemResponse[]) => {
  const paramsStringify = caption[0].plain_text;
  return paramsStringify;
};
