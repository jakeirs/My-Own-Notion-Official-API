import { NotionRenderer, createBlockRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import ThemeToggle from "@/components/blocks/theme-toggle";
import { Button } from "@/components/ui/button";
import { getBlocks, notionClient } from "@/lib/notion";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { rendererParagraph } from "./create-block-rerender";

export default async function Contentlayer() {
  const notionBlock = (await getBlocks()) as any;

  const html = await rendererParagraph.render(...notionBlock);

  return (
    <div className="px-20">
      <ThemeToggle />
      <h1 className="text-4xl">
        <a href="https://socket.dev/npm/package/contentlayer-source-notion">
          contentlayer-source-notion
        </a>
      </h1>
      <h2 className="text-2xl underline p-2">
        <a href="https://contentlayer.dev/docs/sources/notion/getting-started-a47597e1">
          Dokumentcja
        </a>
      </h2>
      <p className="p-4">Contentlayer-source-notion</p>
      <Button variant="destructive">Add Button</Button>
      <div className="w-full h-16"></div>
      <div className="w-full h-16"></div>
      <div>
        <div
          className="notion-render"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
