import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import ThemeToggle from "@/components/blocks/theme-toggle";
import { Button } from "@/components/ui/button";
import { getBlocks, notionClient } from "@/lib/notion";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";

export default async function Package300Download() {
  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  const notionBlock = (await getBlocks()) as any;

  const html = await notionRenderer.render(...notionBlock);

  return (
    <div className="p-20">
      <ThemeToggle />
      <Button variant="destructive">Add Button</Button>
      {/* <ClientConsoleLog dataToLog={notionBlock} />   */}

      <h1 className="text-4xl">
        <a href="https://github.com/kerwanp/notion-render">
          @notion-render/client
        </a>
      </h1>
      <h2 className="text-2xl underline p-2">
        <a href="https://notion-render-docs.vercel.app/guides/styling">
          Dokumentcja link
        </a>
      </h2>
      <p className="p-4">Package-300 download</p>
      <div className="w-full h-16"></div>
      <div
        className="notion-render"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
