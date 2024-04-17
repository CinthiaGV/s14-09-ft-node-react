import { Image } from '@nextui-org/react';

export default function Logo() {
  return (
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        LOGO
      </span>
    </a>
  );
}
