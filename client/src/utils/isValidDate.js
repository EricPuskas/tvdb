import moment from "moment";

const isValidDate = date => {
  return moment(date).isValid();
};

export default isValidDate;
