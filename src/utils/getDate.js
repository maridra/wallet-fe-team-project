const getDate = e => {
  let oldDate;
  if (e) {
    oldDate = new Date(Date.parse(e));
  } else {
    oldDate = new Date();
  }

  let dd = oldDate.getDate();
  if (dd < 10) {
    dd = '0' + dd;
  }
  let mm = oldDate.getMonth() + 1;
  if (mm < 10) {
    mm = '0' + mm;
  }
  let yy = oldDate.getFullYear();

  const newDate = dd + '.' + mm + '.' + yy;

  return newDate;
};

export default getDate;
