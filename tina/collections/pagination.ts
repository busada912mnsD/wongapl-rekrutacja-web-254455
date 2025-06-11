import type { Collection } from "tinacms";

export const PaginationCollection: Collection = {
  name: "pagination",
  label: "Pagination Elements",
  path: "content/pagination",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Tytuł elementu",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Data publikacji",
      required: true,
      ui: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    },
    {
      type: "string",
      name: "body",
      label: "Treść elementu",
      isBody: true,
      ui: {
        component: "wysiwyg-editor",
      },
    },
  ],
  ui: {
    router: ({ document }) => `/pagination/${document._sys.filename}`,
  },
};
