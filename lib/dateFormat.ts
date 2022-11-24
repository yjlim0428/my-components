export const dateFormat = (dateString: string | Date, type: string): string => {
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"];
  let year;
  let month;
  let day;
  let week;
  let date = new Date(dateString);

  switch (type) {
    case "yyyy.MM":
      year = date.getFullYear();
      month = date.getMonth() + 1;
      month = month >= 10 ? month : "0" + month;
      return `${year}. ${month}`;
    case "yy.MM.dd":
      year = date.getFullYear().toString().slice(-2);
      month = date.getMonth() + 1;
      day = date.getDate();
      week = weekDay[date.getDay()];

      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;

      return year + ". " + month + ". " + day;
    case "yy.MM.dd (W)":
      year = date.getFullYear().toString().slice(-2);
      month = date.getMonth() + 1;
      day = date.getDate();
      week = weekDay[date.getDay()];

      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;

      return year + "." + month + "." + day + ` (${week})`;
    case "yyyy.MM.dd (W)":
      year = date.getFullYear().toString();
      month = date.getMonth() + 1;
      day = date.getDate();
      week = weekDay[date.getDay()];

      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;

      return year + "." + month + "." + day + ` (${week})`;
    case "yyyy.MM.dd":
      year = date.getFullYear().toString();
      month = date.getMonth() + 1;
      day = date.getDate();
      week = weekDay[date.getDay()];

      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;

      return year + ". " + month + ". " + day + ` (${week})`;
    case "yyyy-MM-dd":
      year = date.getFullYear().toString();
      month = date.getMonth() + 1;
      day = date.getDate();
      week = weekDay[date.getDay()];

      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;

      return year + "-" + month + "-" + day;
    case "yyyy":
      year = date.getFullYear().toString();
      return year;
    default:
      return String(date);
  }
};
