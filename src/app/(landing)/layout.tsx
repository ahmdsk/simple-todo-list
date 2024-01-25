import SignInDialog from "@/components/auth/sign-in-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Link = {
  name: string;
  href: string;
};

const links: Array<Link> = [
  {
    name: "Home",
    href: "/",
  },
];

export default function LandingPageLayout<P>({
  children,
}: PropsWithChildren<P>) {
  return (
    <div className="container min-h-screen flex flex-col">
      <nav className="flex items-center justify-between py-3">
        <div className="flex items-center gap-x-3">
          <Link href={links[0].href} className="text-xl font-bold">
            Faire.
          </Link>
        </div>
        <div className="flex items-center">
          {links.map((link) => {
            return (
              <Button asChild key={link.name} variant={"link"}>
                <Link href={link.href}>{link.name}</Link>
              </Button>
            );
          })}

          <SignInDialog />
        </div>
      </nav>

      <main className="">{children}</main>
    </div>
  );
}
