export function dateChange(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month; // 한 자리 숫자일 때 앞에 0을 추가
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day; // 한 자리 숫자일 때 앞에 0을 추가
    const formattedDate = `${year}.${month}.${day}`;
    return formattedDate;
}