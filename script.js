const para = document.querySelectorAll('.time > div > span');

//Set End Date 
const endDate = new Date("03, 21, 2023 01:00:00");
let interval;

const time = () => {
     //New Date
     const today = new Date();
     const difference = (endDate - today) / 1000;
     
    // Check for time end
    if (Math.floor(difference) < 0) {
      document.querySelector('.time').innerHTML = 
      `<h2 style="font-family: serif; letter-spacing: 2px">Time Out</h2>`;
      clearInterval(interval);
      return;
    };
    
     //Days
     let days = Math.floor(difference / 3600 / 24);
  
     //Hours
     let hours = Math.floor(difference / 3600 % 24);
  
     //Minutes
     let minutes = Math.floor(difference / 60 % 60);
  
     //Secends
     let secends = Math.floor(difference % 60);
  
     //Formating
     days = (days < 10) ? '0' + days : days;
     hours = (hours < 10) ? '0' + hours : hours;
     minutes = (minutes < 10) ? '0' + minutes : minutes;
     secends = (secends < 10) ? '0' + secends : secends;
  
     //Set Date
     para[0].textContent = days;
     para[1].textContent = hours;
     para[2].textContent = minutes;
     para[3].textContent = secends;
     
};
time();
interval = setInterval(time, 1000);

//kshapi