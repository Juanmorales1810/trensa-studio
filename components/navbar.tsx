import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Kbd } from "@nextui-org/kbd";
import NextLink from "next/link";
import clsx from "clsx";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
} from "@/components/icons";
import { Image } from "@nextui-org/image";

export const Navbar = () => {
    // const searchInput = (
    //     <Input
    //         aria-label="Search"
    //         classNames={{
    //             inputWrapper: "bg-default-100",
    //             input: "text-sm",
    //         }}
    //         endContent={
    //             <Kbd className="hidden lg:inline-block" keys={["command"]}>
    //                 K
    //             </Kbd>
    //         }
    //         labelPlacement="outside"
    //         placeholder="Search..."
    //         startContent={
    //             <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
    //         }
    //         type="search"
    //     />
    // );

    return (
        <NextUINavbar maxWidth="xl" position="static" className="fixed bg-zinc-100 dark:bg-zinc-950">
            <NavbarContent className="basis-1/5 w-[100px] h-8" justify="start">
                <NavbarBrand as="li" className="max-w-fit w-[100px] h-8">
                    <NextLink
                        href="/"
                    >
                        <Image src="/logo/Logo sin Nada.png" alt="Logo Navbar" width={100} height={32} className="rounded-none w-[100px] h-8" />
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium uppercase font-semibold"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    {/* <Link
                        isExternal
                        href={siteConfig.links.twitter}
                        aria-label="Twitter"
                    >
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.discord}
                        aria-label="Discord"
                    >
                        <DiscordIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="Github"
                    >
                        <GithubIcon className="text-default-500" />
                    </Link> */}
                    <ThemeSwitch />
                </NavbarItem>
                {/* <NavbarItem className="hidden lg:flex">
                    {searchInput}
                </NavbarItem> */}
                {/* <NavbarItem className="hidden md:flex">
                    <Button
                        isExternal
                        as={Link}
                        className="text-sm font-normal text-default-600 bg-default-100"
                        href={siteConfig.links.sponsor}
                        startContent={
                            <HeartFilledIcon className="text-danger" />
                        }
                        variant="flat"
                    >
                        Sponsor
                    </Button>
                </NavbarItem> */}
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                {/* <Link
                    isExternal
                    href={siteConfig.links.github}
                    aria-label="Github"
                >
                    <GithubIcon className="text-default-500" />
                </Link> */}
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {/* {searchInput} */}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link color="primary" href={item.href} size="lg">
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
