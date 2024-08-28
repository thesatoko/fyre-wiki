import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "FyreMC Wiki",
  tagline: "A FyreMC hivatalos wiki oldala",
  favicon: "img/logo.webp",

  // Set the production url of your site here
  url: "https://wiki.fyremc.hu",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FyreMC", // Usually your GitHub org/user name.
  projectName: "fyremc-wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "hu-HU",
    locales: ["hu-HU"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/risdn/fyre-wiki/",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "FyreMC Wiki",
        },
        {
          href: "https://github.com/risdn/fyre-wiki",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Közösség",
          items: [
            {
              label: "Discord",
              href: "https://dc.fyremc.hu",
            },
            {
              label: "TikTok",
              href: "https://www.tiktok.com/@fyremcofficial",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@FyreMC",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/fyremcofficial",
            },
          ],
        },
        {
          title: "Hasznos linkek",
          items: [
            {
              label: "Főoldal",
              href: "https://fyremc.hu",
            },
            {
              label: "Account",
              href: "https://account.fyremc.hu",
            },
            {
              label: "Fórum",
              href: "https://forum.fyremc.hu",
            },
            // {
            //   label: "Wiki Szerkesztés",
            //   to: "/docs/szerkesztes",
            // },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} FyreMC | Minden jog fenntartva!`,
    },
    prism: {
      theme: prismThemes.oceanicNext,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
