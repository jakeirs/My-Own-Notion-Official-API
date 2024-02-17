export const Heading1Block = (data: any) => {
  const { type, id } = data;
  data = data[type].rich_text[0].plain_text;

  return (
    <h1 className={`notion-${type} notion-color-${data.heading_1.color}`}></h1>
  );
};
