export function formatDateTime(dateTimeString : string) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const month = months[monthIndex];
    return `${year} ${month} ${day}`;
  }
  