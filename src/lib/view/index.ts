import dayjs from 'dayjs';

export function url(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}/${path}`;
}

export function formatDate(date: string): string {
  return dayjs(date).format('YYYY.MM.DD');
}
