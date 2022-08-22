let taskImages = document.querySelectorAll(".task-image");
image = [
  "url('./images/icon-work.svg')",
  "url('./images/icon-play.svg')",
  "url('./images/icon-study.svg')",
  "url('./images/icon-exercise.svg')",
  "url('./images/icon-social.svg')",
  "url('./images/icon-self-care.svg')",
];
color = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];
for (let i = 0; i < taskImages.length; i++) {
  taskImages[i].style.backgroundImage = image[i];
  taskImages[i].style.backgroundColor = color[i];
}

let dataForEachUser = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

let timeUsed = document.querySelectorAll(".time");
let totalTime = document.querySelectorAll(".task");

let chart = (element) => {
  for (let i = 0; i < totalTime.length; i++) {
    if (element.textContent.toLowerCase() == "daily") {
      element.style.color = "white";
      element.nextElementSibling.style.color = "hsl(246, 80%, 60%)";
      element.nextElementSibling.nextElementSibling.style.color =
        "hsl(246, 80%, 60%)";
      timeUsed[
        i
      ].innerHTML = `${dataForEachUser[i].timeframes.daily.current}hrs`;
      totalTime[
        i
      ].innerHTML = `Last day-${dataForEachUser[i].timeframes.daily.previous}hrs`;
    } else if (element.textContent.toLowerCase() == "weekly") {
      element.style.color = "white";
      element.nextElementSibling.style.color = "hsl(246, 80%, 60%)";
      element.previousElementSibling.style.color = "hsl(246, 80%, 60%)";

      timeUsed[
        i
      ].innerHTML = `${dataForEachUser[i].timeframes.weekly.current}hrs`;
      totalTime[
        i
      ].innerHTML = `Last week-${dataForEachUser[i].timeframes.weekly.previous}hrs`;
    } else {
      element.previousElementSibling.previousElementSibling.style.color =
        "hsl(246, 80%, 60%)";
      element.previousElementSibling.style.color = "hsl(246, 80%, 60%)";
      element.style.color = "white";
      timeUsed[
        i
      ].innerHTML = `${dataForEachUser[i].timeframes.monthly.current}hrs`;
      totalTime[
        i
      ].innerHTML = `Last month-${dataForEachUser[i].timeframes.monthly.previous}hrs`;
    }
  }
};
