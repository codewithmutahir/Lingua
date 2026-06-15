import earth from "@/assets/images/earth.png";
import mascotAuth from "@/assets/images/mascot-auth.png";
import mascotLogo from "@/assets/images/moscot-logo.png";
import mascotWelcome from "@/assets/images/mascot-welcome.png";
import palace from "@/assets/images/palace.png";
import streakFire from "@/assets/images/streak-fire.png";
import treasure from "@/assets/images/treasure.png";

/** Cozy living room with shelves and plants — AI Teacher call background. */
const teacherBackgroundUrl =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80";

export const images = {
  earth,
  mascotAuth,
  mascotLogo,
  mascotWelcome,
  palace,
  streakFire,
  treasure,
  teacherBackground: teacherBackgroundUrl,
  teacherMascot: mascotWelcome,
  cafe: palace,
  cafeTable: treasure,
};

export type ImageKey = keyof typeof images;

export function getImageSource(key?: string) {
  const resolvedKey =
    key && key in images ? (key as ImageKey) : ("palace" as const);
  const source = images[resolvedKey];

  if (typeof source === "string") {
    return { uri: source };
  }

  return source;
}
