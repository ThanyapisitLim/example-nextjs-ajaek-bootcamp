import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ShoppingBasket } from "lucide-react";
import { Badge } from "../ui/badge";
import CountCartItem from "@/app/(front)/component/CountCartItem";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navbar01Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Link href="/cart">
              <Badge className="p-2 text-sm"><CountCartItem /> <ShoppingBasket /> </Badge>
            </Link>


            {
              !session && (
                <>
                  {/* ปุ่ม Sign In */}
                  <Link href="/login">
                    <Button variant="outline" className="hidden sm:inline-flex">
                      Login
                    </Button>
                  </Link>
                  {/* ปุ่ม Get Started */}
                  <Link href="/signup">
                    <Button>Sign up</Button>
                  </Link>
                </>
              )
            }

            {
              session && (
                <>
                <div className="flex item-center">
                  Hello, {session.user.name}
                </div>
                  <Link href="/dashboard">
                    <Button>Dashboard</Button>
                  </Link>
                </>
              )
            }

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;