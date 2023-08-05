import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://nickseagull.dev/",
  author: "NickSeagull",
  desc: "Random stuff by Nick",
  title: "NickSeagull's Rainbow Garbage",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/nickseagull/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/NickSeagull",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/nickseagull",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@nickseagull.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/codeseagull",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/NickSeagull",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/NickSeagull",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.com/",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
];
