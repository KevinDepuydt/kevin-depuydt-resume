import { differenceInYears } from 'date-fns';
import { DEVELOPER_START_DATE } from '../constants';

/**
 * Get number of years since the developer activity started
 */
export function getDeveloperActivityYears() {
  return differenceInYears(new Date(), DEVELOPER_START_DATE);
}
