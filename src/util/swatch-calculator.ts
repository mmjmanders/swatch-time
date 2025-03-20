import { DateTime } from 'luxon';

const minutesPerSwatch = (24 * 60) / 1000;

export const calculateSwatch: (time: DateTime) => number = (time) => {
  const { minutes } = time.diff(DateTime.now().startOf('day'), 'minutes');
  return minutes / minutesPerSwatch;
};
