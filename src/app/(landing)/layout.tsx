import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Link = {
  name: string;
  href: string;
  isButton: boolean;
  icon?: React.ReactNode;
};

const links: Array<Link> = [
  {
    name: "Home",
    href: "/",
    isButton: false,
  },
  {
    name: "Sign In",
    href: "/auth/sign-in",
    isButton: true,
    icon: <LogIn className="w-4 h-4 mr-2" />,
  },
];

export default function LandingPageLayout<P>({
  children,
}: PropsWithChildren<P>) {
  return (
    <div className="container min-h-screen flex flex-col">
      <nav className="flex items-center justify-between py-3">
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <span className="text-xl font-bold">Faire.</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          {links.map((link) => {
            if (link.isButton) {
              return (
                <Button asChild key={link.name}>
                  <Link href="/auth/sign-in">
                    {link.icon}
                    <span className="hidden md:block">{link.name}</span>
                  </Link>
                </Button>
              );
            }

            return (
              <Button asChild key={link.name} variant={"link"}>
                <Link
                  href={link.href}
                >
                  {link.name}
                </Link>
              </Button>
            );
          })}
        </div>
      </nav>

      <main className="">{children}</main>
    </div>
  );
}
