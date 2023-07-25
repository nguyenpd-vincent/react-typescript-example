import { getIntlText } from "@/locales";
import { useEffect } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = getIntlText(`title.${title}`) + "- e.cooDentist";
    return () => {
      document.title = prevTitle;
    };
  });
}
