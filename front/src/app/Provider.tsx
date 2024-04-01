import { NextUIProvider } from "@nextui-org/react";
import App from "./page";

export default function Provider(){
  return(
    <NextUIProvider>
      <App/>
    </NextUIProvider>
  )
}