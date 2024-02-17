import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const TextAnnotations = (props: {
  richTextArr: RichTextItemResponse[];
}) => {
  const { richTextArr } = props;

  const renderAnnotations = (richTextItem: RichTextItemResponse) => {
    const { href, annotations, plain_text } = richTextItem;

    if (href) {
      return (
        <a href={href} className="notion-text-href">
          {plain_text}
        </a>
      );
    }

    if (annotations.color !== "default") {
      return (
        <span className={`notion-color-${annotations.color}`}>
          {plain_text}
        </span>
      );
    }

    if (annotations.bold) {
      return <b className="notion-text-bold">{plain_text}</b>;
    }

    if (annotations.italic) {
      return <i className="notion-text-italic">{plain_text}</i>;
    }

    if (annotations.strikethrough) {
      return <s className="notion-text-strikethrough">{plain_text}</s>;
    }

    if (annotations.underline) {
      return <u className="notion-text-underline">{plain_text}</u>;
    }

    if (annotations.code) {
      return <code className="notion-text-code">{plain_text}</code>;
    }

    return plain_text;
  };

  return richTextArr.map((richTextItem) => renderAnnotations(richTextItem));
};
