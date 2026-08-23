import { parseISO, format } from 'date-fns';

export default function Date({ dateString, formatString = 'LLLL d, yyyy', className }) {
  const date = parseISO(dateString);
  return <time className={className} dateTime={dateString}>{format(date, formatString)}</time>;
}