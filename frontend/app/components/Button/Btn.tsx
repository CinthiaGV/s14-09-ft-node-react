"use client";


import { BtnProps } from "../../models/button";
import ModalBtn from "../modal/ModalBtn";

export default function Btn({ target, actionTarget, children, className, onClick }: BtnProps & { onClick?: () => void }) {
  return (
    <div className={`polygon bg-yellow btn glitch`} onClick={onClick}>
      {actionTarget === "openModal" && (
        <ModalBtn target={target}>{children}</ModalBtn>
      )}
    </div>
  );
}