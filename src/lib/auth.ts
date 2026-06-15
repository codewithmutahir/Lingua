import type { Href, Router } from "expo-router";

export const HOME_HREF = "/" as Href;

export function navigateAfterAuth(
  router: Router,
  decorateUrl: (url: string) => string,
) {
  router.replace(decorateUrl("/") as Href);
}

export function navigateToHome(router: Router) {
  router.replace(HOME_HREF);
}
