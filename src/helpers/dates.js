import moment from 'moment';
import { DATE_FORMATS } from '../constants/dates';

export const addDate = (date = new Date(), count, units) => {
    return moment(date).add(count, units);
};

export const subtrDate = (date = new Date(), count, units) => {
    return moment(date).subtract(count, units);
};

export const formatDate = (date = new Date(), format = DATE_FORMATS.fullDate) => {
    return moment(date).format(format);
};