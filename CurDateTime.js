let clock = () => {
    let date=new Date();
    let currentTime=date.toLocaleTimeString();
    let get_date=date.getUTCDate();
    let get_month=date.getUTCMonth()+1;
    let get_year=date.getUTCFullYear();
    let currentDate=get_date+'-'+get_month+'-'+get_year;
    document.querySelector('#curDate').innerText=currentDate;
    document.querySelector('#curTime').innerText=currentTime;
};

setInterval(clock,1000);