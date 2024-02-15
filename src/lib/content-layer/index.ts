import { makeSource, defineDatabase } from "contentlayer-source-notion";
import { notionClient } from "../notion";

export const contentLayerMakeSource = makeSource({
  client: notionClient,
  databaseTypes: [],
});
