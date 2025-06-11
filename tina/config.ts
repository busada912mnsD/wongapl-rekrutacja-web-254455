// tinacms/config.ts
import { defineConfig } from "tinacms";
import { BlogCollection } from "./collections/blog";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";
import { FooterLinksCollection } from "./collections/footer";
import { LazyWysiwygEditor } from "./components/LazyWysiwygEditor";
import { PaginationCollection } from "./collections/pagination";

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,

  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  cmsCallback: (cms) => {
    cms.plugins.add({
      __type: "field",
      name: "wysiwyg-editor",
      Component: LazyWysiwygEditor,
    });
    return cms;
  },

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [BlogCollection, PageCollection, GlobalConfigCollection, FooterLinksCollection, PaginationCollection],
  },
});
