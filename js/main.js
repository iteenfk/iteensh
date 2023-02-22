"use strict"

console.clear();

{
    const year = 2023;
    const month = 1; 

    function getCalendarhead(){
        const dates = [];
        const d = new Date(year,month,0).getDate();
        const n = new Date(year,month,1).getDay();

        for(let i = 0; i < n; i ++){
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true,
            });
        }
        // console.log(dates);
        return dates;
    }

    function getCalendarBody(){
        const dates = [];
        const lastDate = new Date(year,month + 1,0).getDate();

        for(let i = 1; i <= lastDate; i++){
            dates.push({
                date:i,
                isToday: false,
                isDisabed: false,
            });
        }
        // console.log(dates);
        return dates
    }

    function getCalendarTail(){
        const dates = [];
        const lastDay = new Date(year,month +1,0).getDay();

        for(let i = 1; i < 7 - lastDay; i++){
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
         }
        //  console.log(dates);
        return dates;
    }

function createCalendar(){
    const dates = [
        ...getCalendarhead(),
        ...getCalendarBody(),
        ...getCalendarTail(),
    ];
    const weeks = [];
    const weeksCount = dates.length / 7;


    for (let i = 0; i < weeksCount; i++){
        weeks.push(dates.splice(0,7))
    }
    weeks.forEach(week => {
        const tr = document.createElement("tr");
        week.forEach(date => {
            const td = document.createElement("td");
            td.textContent = date.date;
            if(date.isToday){
                td.classList,add("today");
            }
            if(date.isDisabled){
                td.classList.add("disabled")
            }

            tr.appendChild(td);

        });
        document.querySelector("tbody").appendChild(tr);
    });

    // console.log(dates);
    console.log(weeks);
}
createCalendar();


    // getCalendarhead();
    // getCalendarBody();
    // getCalendarTail();

}