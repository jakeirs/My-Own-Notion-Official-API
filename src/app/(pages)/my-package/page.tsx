import ThemeToggle from "@/components/blocks/theme-toggle";
import { Button } from "@/components/ui/button";
import ClientConsoleLog from "@/components/technical/ClientConsoleLog";
import { Render } from "@9gustin/react-notion-render";
import {
  getBlocks,
  getfilteredFromDatabase,
  getPage,
  getRecursivelyBlocks,
} from "@/lib/notion";
import { RenderBlocksMy } from "./package/Render";

export default async function MyPackage() {
  const notionBlock = await getBlocks();
  const notionRecursivelyBlock = await getRecursivelyBlocks(
    "b3b3bc4cd37e4e75bec7984dcb4dd04c"
  );

  return (
    <div className="px-20">
      <ThemeToggle />
      <h1>
        <a href="https://github.com/9gustin/react-notion-render/tree/main">
          @9gustin/react-notion-render
        </a>
      </h1>
      <h2>
        <a href="https://github.com/9gustin/react-notion-render/tree/main?tab=readme-ov-file#react-notion-render">
          Dokumentcja
        </a>
      </h2>
      Package-600 download
      <Button variant="destructive">Add Button</Button>
      <h1>EXAMPLE</h1>
      <div>
        <RenderBlocksMy blocks={notionRecursivelyBlock} />
        {/* <ClientConsoleLog
          dataToLog={notionRecursivelyBlock}
          name="filteredFromDatabase"
          // hide
        /> */}
      </div>
    </div>
  );
}
