import type { Href, Router } from "expo-router";

export function navigateAfterAuth(
  router: Router,
  decorateUrl: (url: string) => string,
) {
  const url = decorateUrl("/");
  router.replace(url as Href);
}
