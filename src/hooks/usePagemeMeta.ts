import { useEffect } from "react";

type MetaOptions = {
  title?: string;
  description?: string;
  themeColor?: string;
  icon?: string;
};

export function usePageMeta(options: MetaOptions) {
  useEffect(() => {
    // Title
    if (options.title) {
      document.title = options.title;
    }

    // Description
    if (options.description) {
      let tag = document.querySelector("meta[name='description']");
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", options.description);
    }

    // Theme color
    if (options.themeColor) {
      let tag = document.querySelector("meta[name='theme-color']");
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "theme-color");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", options.themeColor);
    }

    // Favicon
    if (options.icon) {
      let link = document.querySelector("link[rel='icon']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "icon");
        document.head.appendChild(link);
      }
      link.setAttribute("href", options.icon);
    }
  }, [options]);
}
