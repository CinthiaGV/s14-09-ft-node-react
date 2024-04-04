"use client";
import {
  Checkbox,
  Input,
  Link
} from "@nextui-org/react";
import { LockIcon } from "./LockIcon";
import { MailIcon } from "./MailIcon";

export default function Login() {

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Email</label>
        <Input
          id="email"
          autoFocus
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          placeholder="Enter your email"
          variant="bordered"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">Password</label>
        <Input
          id="password"
          endContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          placeholder="Enter your password"
          type="password"
          variant="bordered"
        />
      </div>
      <div className="flex py-2 px-1 justify-between">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          Remember me
        </Checkbox>
        <Link color="primary" href="#" size="sm">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}

