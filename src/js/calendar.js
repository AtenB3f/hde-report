function getToday() {
  let today = new Date();

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var week = today.get;

  var dateString =
    year +
    '.' +
    month +
    '.' +
    day +
    '(' +
    getDayOfWeek(today.getDate.toString) +
    ')';

  return dateString;
}

function getDayOfWeek(dateString) {
  //ex) getDayOfWeek('2022-06-13')

  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const dayOfWeek = week[new Date(dateString).getDay()];

  return dayOfWeek;
}
