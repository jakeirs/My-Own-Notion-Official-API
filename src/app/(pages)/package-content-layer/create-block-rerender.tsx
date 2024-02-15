import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { notionClient } from "@/lib/notion";
import { NotionRenderer, createBlockRenderer } from "@notion-render/client";
import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const paragraphRenderer = createBlockRenderer<ParagraphBlockObjectResponse>(
  "paragraph",
  async (data, renderer) => {
    return `
            <p class="text-red-500">
                ${await renderer.render(...data.paragraph.rich_text)}
            </p>
        `;
  }
);

export const rendererParagraph = new NotionRenderer({
  renderers: [paragraphRenderer],
  client: notionClient,
});
