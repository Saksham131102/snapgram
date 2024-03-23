import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDate( dateString: string) {
  const date = parseISO(dateString);
  const formattedDate = formatDistanceToNow(date).replace('about', '') + ' ago';
  return formattedDate;
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};