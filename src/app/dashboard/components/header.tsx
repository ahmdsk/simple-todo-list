import Image from "next/image";
import { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>

      <div className="flex items-center gap-x-3">
        <Image
          width={50}
          height={50}
          alt="Profile Image"
          src={"/avatar/user-1.jpg"}
          className="rounded-full"
        />
        <div className="">
          <h1 className="text-lg font-bold text-slate-800">Hi, Bruce</h1>
          <h5 className="text-sm text-slate-500">
            Your daily adventure starts now
          </h5>
        </div>
      </div>
    </Fragment>
  );
}
