const container = document.getElementById("calendarContainer");
//FASH 216 MW Fall 2026
let startYear = 2026;
let startMonth = 8; // September (0-indexed)

// example event data (optional)
const events = {
  "2026-09-15": [{
      type: "class",
      title: "templates/Title_01.html",
      content: "templates/Class01_Content.html",
      icon: "../icons/iconClass.svg"
    },
				{
      type: "soft",
      title: "templates/Assignment_Title.html",
      content: "templates/Assignment_Content.html",
      icon: "../icons/iconSoft.svg"
    }
				],
  "2026-09-17": [{
      type: "class",
      title: "templates/Title_02.html",
      content: "templates/Class02_Content.html",
      icon: "../icons/iconClass.svg"
    }],
  "2026-09-22": [{
	  type: "class",
      title: "templates/Title_03.html",
      content: "templates/Class03_Content.html",
      icon: "../icons/iconClass.svg"
  }],
	"2026-09-24":[{
		type: "class",
      title: "templates/Title_04.html",
      content: "templates/Class04_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-09-29":[{
		type: "class",
      title: "templates/Title_05.html",
      content: "templates/Class05_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-01":[{
		type: "class",
      title: "templates/Title_06.html",
      content: "templates/Class06_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-06":[{
		type: "class",
      title: "templates/Title_07.html",
      content: "templates/Class07_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-08":[{
		type: "class",
      title: "templates/Title_08.html",
      content: "templates/Class08_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-13":[{
		type: "class",
      title: "templates/Title_09.html",
      content: "templates/Class09_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-15":[{
		type: "class",
      title: "templates/Title_10.html",
      content: "templates/Class10_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-20":[{
		type: "class",
      title: "templates/Title_11.html",
      content: "templates/Class11_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-22":[{
		type: "class",
      title: "templates/Title_12.html",
      content: "templates/Class12_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-27":[{
		type: "class",
      title: "templates/Title_13.html",
      content: "templates/Class13_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-29":[{
		type: "class",
      title: "templates/Title_14.html",
      content: "templates/Class14_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-03":[{
		type: "class",
      title: "templates/Title_15.html",
      content: "templates/Class15_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-05":[{
		type: "class",
      title: "templates/Title_16.html",
      content: "templates/Class16_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-10":[{
		type: "class",
      title: "templates/Title_17.html",
      content: "templates/Class17_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-12":[{
		type: "class",
      title: "templates/Title_18.html",
      content: "templates/Class18_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-17":[{
		type: "class",
      title: "templates/Title_19.html",
      content: "templates/Class19_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-19":[{
		type: "class",
      title: "templates/Title_20.html",
      content: "templates/Class20_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	
	
};

function formatDate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function createMonth(year, month) {

  // Outer wrapper
  const monthContainer = document.createElement("div");
  monthContainer.className = "month-container";

  // Month title
  const title = document.createElement("div");
  title.className = "month-title";

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long"
  });

  title.textContent = `${monthName} ${year}`;

  // Calendar grid
  const calendar = document.createElement("div");
  calendar.className = "calendar";

  // Add title above calendar
  monthContainer.appendChild(title);
  monthContainer.appendChild(calendar);

  // Weekday headers
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  weekdays.forEach((day, index) => {
    const el = document.createElement("div");

    el.className = "weekday";
    el.textContent = day;

    if (index === 0) {
      el.classList.add("weekday--sun");
    }

    if (index === 6) {
      el.classList.add("weekday--sat");
    }

    calendar.appendChild(el);
  });

  // Month data
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const totalCells = startDay + daysInMonth;

  for (let i = 0; i < totalCells; i++) {

    const cell = document.createElement("div");

    const dayNumber = i - startDay + 1;

    if (i < startDay) {

      cell.className = "day--disabled";

    } else {

      cell.className = "day";

      // Date number
      const dateLabel = document.createElement("div");
      dateLabel.className = "date-label";
      dateLabel.textContent = dayNumber;

      cell.appendChild(dateLabel);

      // Events
      const key = formatDate(year, month, dayNumber);

      if (events[key]) {

        const eventContainer = document.createElement("div");
        eventContainer.className = "event-container";

        events[key].forEach(eventData => {

          const button = document.createElement("button");
          button.className = "calendar-event-btn";

          const icon = document.createElement("img");
          icon.src = eventData.icon;
          icon.className = "event-icon";

          button.appendChild(icon);

         button.addEventListener("click", async () => {

  const titleResponse = await fetch(eventData.title);
  const contentResponse = await fetch(eventData.content);

  document.getElementById("modal-title").innerHTML =
      await titleResponse.text();

  document.getElementById("modal-body").innerHTML =
      await contentResponse.text();

  document.getElementById("myModal").classList.add("show");

});
		

          eventContainer.appendChild(button);

        });

        cell.appendChild(eventContainer);

      }

    }

    calendar.appendChild(cell);

  }

  return monthContainer;

}

// generate 3 months
for (let i = 0; i < 3; i++) {
  const date = new Date(startYear, startMonth + i, 1);

  container.appendChild(
    createMonth(date.getFullYear(), date.getMonth())
  );
}

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("myModal").classList.remove("show");
});

// Modal close button
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});
