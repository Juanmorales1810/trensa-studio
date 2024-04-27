export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Trenza Studio",
    description: "Fotografía, diseño y desarrollo web. Todo en un solo lugar.",
    navItems: [
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Portfolio",
            href: "/portfolio",
        },
    ],
    navMenuItems: [
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Portfolio",
            href: "/portfolio",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};
