"use client";

import { BtnProps } from "../../models/button";
import ModalBtn from "../modal/ModalBtn";

export default function Btn({ target, actionTarget, children, className }: BtnProps) {
  return (
    <div className={className}>
      {actionTarget === "openModal" && (
        <ModalBtn target={target}>{children}</ModalBtn>
      )}
    </div>
  );
}
