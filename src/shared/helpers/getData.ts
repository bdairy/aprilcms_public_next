import moment from "moment";

export  const getDate = (date: moment.Moment) => {
  return moment(date).format('DD MMM yy');
};