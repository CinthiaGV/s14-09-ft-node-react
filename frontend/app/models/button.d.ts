import { ReactNode } from "react"
import { ClassName } from "./types"

//types
type ModalTarget = ReactNode
//Standard
export interface BtnProps {
  actionTarget: "openModal" | "openRoute"
  target: ModalTarget
  children: ReactNode
  className?: ClassName
}

//Modal
export interface ModalBtnProps extends Omit<BtnProps, 'actionTarget'> {}

export interface ModalCtnProps {
  isOpen: any
  onOpenChange: any
  content: ModalTarget
}