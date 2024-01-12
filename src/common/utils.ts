import { toast } from 'react-toastify';
import { TApiError } from './types';

export const apiErrorToast = (error: TApiError) => {
  toast.error(error?.response?.data?.message ?? 'An error occured');
};

export const dateSpliter = (date?: string) => {
  if (!date) return null;
  const split = date.split(' '); //split date by space
  if (split.length !== 3) return null;
  return { day: split[0], month: split[1], year: split[2] };
};
