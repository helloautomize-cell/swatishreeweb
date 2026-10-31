import { isConfirm, type ConfirmOr } from "./confirm";
import { site } from "./site-config";

/*
 * Social profiles confirmed by the client, in display order (YouTube first,
 * then Instagram). Every entry is built from site-config and filtered through
 * isConfirm, so an unconfirmed profile never renders a link, a chip or an
 * empty slot anywhere.
 */

export type SocialLink = {
  id: string;
  label: string;
  handle: string;
  href: string;
};

type SocialCandidate = Omit<SocialLink, "href"> & { href: ConfirmOr<string> };

const allSocial: SocialCandidate[] = [
  {
    id: "youtube",
    label: "YouTube",
    handle: "Beyond Baby with Dr Swati Shree",
    href: site.youtube,
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@dr_swati_shree",
    href: site.instagram,
  },
];

export const socialLinks: SocialLink[] = allSocial.filter(
  (s): s is SocialLink => !isConfirm(s.href),
);
