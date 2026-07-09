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

    console.log("Event button clicked:", eventData);

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

// Modal close button
/*const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});
