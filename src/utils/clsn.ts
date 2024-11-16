import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function clsn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}