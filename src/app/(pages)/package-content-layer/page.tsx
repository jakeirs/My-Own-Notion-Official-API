import ThemeToggle from "@/components/blocks/theme-toggle";
import { Button } from "@/components/ui/button";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { getBlocks, getRecursivelyBlocks } from "@/lib/notion";

export default async function Contentlayer() {
  const notionBlock = await getBlocks();
  const notionRecursivelyBlock = await getRecursivelyBlocks(
    "b3b3bc4cd37e4e75bec7984dcb4dd04c"
  );

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
      <div>
        <ClientConsoleLog
          dataToLog={notionRecursivelyBlock}
          name="filteredFromDatabase"
          // hide
        />
      </div>
    </div>
  );
}
