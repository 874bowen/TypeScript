const year = <HTMLSpanElement>document.getElementById('year')
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear)

year.innerHTML = thisYear;