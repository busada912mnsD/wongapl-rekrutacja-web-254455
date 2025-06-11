import type { Collection } from "tinacms";

export const FooterLinksCollection: Collection = {
  name: "footer",
  label: "Footer Configuration",
  path: "src/content/footer",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Configuration Title",
      isTitle: true,
      required: true,
      description: "A unique identifier for this footer configuration.",
    },
    {
      type: "rich-text",
      name: "footerText",
      label: "Footer Text Content",
      description: "Manage the main text content for the footer. Only basic formatting and links are allowed.",
      templates: [],
    },
    {
      type: "object",
      name: "links",
      label: "Footer Navigation Links",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.label || "New Link" };
        },
      },
      fields: [
        {
          type: "string",
          name: "label",
          label: "Link Label",
          description: "The visible text for the link.",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          description: "The destination URL for the link.",
          required: true,
        },
        {
          type: "string",
          name: "target",
          label: "Open In",
          options: [
            { value: "_self", label: "Same Tab" },
            { value: "_blank", label: "New Tab" },
          ],
          description: "Specifies where to open the linked document.",
        },
        {
          type: "string",
          name: "rel",
          label: "Link Relationship (rel)",
          options: [
            { value: "", label: "None" },
            { value: "noopener noreferrer", label: "Noopener Noreferrer" },
            { value: "nofollow", label: "Nofollow" },
            { value: "sponsored", label: "Sponsored" },
            { value: "ugc", label: "UGC" },
          ],
          description: "Defines the relationship of the linked URL to the current document.",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon Name",
          description: "Optional: Name of the icon to display next to the link (iconify).",
        },
      ],
    },
  ],
};
