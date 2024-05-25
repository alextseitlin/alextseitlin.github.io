import { parseISO, format } from "date-fns";

type Props = {
  date: string;
  style?: string;
};

const DateFormatter = ({ date, style = "LLLL	d, yyyy" }: Props) => {
  const dateFormat = parseISO(date);
  return <time dateTime={date}>{format(dateFormat, style)}</time>;
};

export default DateFormatter;
