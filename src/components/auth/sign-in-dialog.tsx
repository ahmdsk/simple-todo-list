"use client";

import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";

export default function SignInDialog() {
  function signIn() {
    window.location.href = "/dashboard";
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <LogIn className="h-4 w-4 mr-2" />
          <span className="hidden md:block">Sign in</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Continue to Faire?</DialogTitle>
          <DialogDescription>
            Please sign in to your account to continue to Faire.
          </DialogDescription>
        </DialogHeader>

        <div className="">
          <Button className="w-full" onClick={() => signIn()}>
            <Image
              width={20}
              height={20}
              src={"/icons/google.svg"}
              alt="Google icons"
              className="mr-3"
            />{" "}
            Sign in with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
