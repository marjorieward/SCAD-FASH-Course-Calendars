const container = document.getElementById("calendarContainer");
//FASH 100 TR Fall 2026
let startYear = 2026;
let startMonth = 8; // September (0-indexed)

// event data
const events = {
  "2026-09-13": [{
    type: "soft",
    tooltip: "Complete PQA",
    icon: "../icons/iconSoft.svg"
}],
	"2026-09-14": [{
    type: "class",
    title: "../templates/fash316/Title_01.html",
    content: "../templates/fash316/Class01_Content.html",
    icon: "../icons/iconClass.svg"
}],
  "2026-09-16": [{
      type: "class",
      title: "../templates/fash316/Title_02.html",
      content: "../templates/fash316/Class02_Content.html",
      icon: "../icons/iconClass.svg"
    }],
  "2026-09-21": [{
	  type: "class",
      title: "../templates/fash316/Title_03.html",
      content: "../templates/fash316/Class03_Content.html",
      icon: "../icons/iconClass.svg"
  }],
	"2026-09-23":[{
		type: "class",
      title: "../templates/fash316/Title_04.html",
      content: "../templates/fash316/Class04_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-09-28":[{
		type: "class",
      title: "../templates/fash316/Title_05.html",
      content: "../templates/fash316/Class05_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Waist Dress Critique and Process Journal Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-09-30":[{
		type: "class",
      title: "../templates/fash316/Title_06.html",
      content: "../templates/fash316/Class06_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-05":[{
		type: "class",
      title: "../templates/fash316/Title_07.html",
      content: "../templates/fash316/Class07_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Draping with Shapes Process Journal Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-10-07":[{
		type: "class",
      title: "../templates/fash316/Title_08.html",
      content: "../templates/fash316/Class08_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-09":[{
    type: "extra",
    tooltip: "Extra Help 10am-12pm",
    icon: "../icons/iconExtra.svg"
}],
	"2026-10-12":[{
		type: "class",
      title: "../templates/fash316/Title_09.html",
      content: "../templates/fash316/Class09_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-14":[{
		type: "class",
      title: "../templates/fash316/Title_10.html",
      content: "../templates/fash316/Class10_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-19":[{
		type: "class",
      title: "../templates/fash316/Title_11.html",
      content: "../templates/fash316/Class11_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Notched Collar Jacket Critique and Process Journal Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-10-21":[{
		type: "class",
      title: "../templates/fash316/Title_12.html",
      content: "../templates/fash316/Class12_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-26":[{
		type: "class",
      title: "../templates/fash316/Title_13.html",
      content: "../templates/fash316/Class13_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-28":[{
		type: "class",
      title: "../templates/fash316/Title_14.html",
      content: "../templates/fash316/Class14_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-02":[{
		type: "class",
      title: "../templates/fash316/Title_15.html",
      content: "../templates/fash316/Class15_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-04":[{
		type: "class",
      title: "../templates/fash316/Title_16.html",
      content: "../templates/fash316/Class16_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-06":[{
    type: "extra",
    tooltip: "Extra Help 10am-12pm",
    icon: "../icons/iconExtra.svg"
}],
	"2026-11-09":[{
		type: "class",
      title: "../templates/fash316/Title_17.html",
      content: "../templates/fash316/Class17_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-11":[{
		type: "class",
      title: "../templates/fash316/Title_18.html",
      content: "../templates/fash316/Class18_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-16":[{
	type: "class",
      title: "../templates/fash316/Title_19.html",
      content: "../templates/fash316/Class19_Content.html",
      icon: "../icons/iconClass.svg"
},
	{
    type: "grade",
    tooltip: "Runway Recreation Critique and Process Journal Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-11-18":[{
	type: "class",
      title: "../templates/fash316/Title_20.html",
      content: "../templates/fash316/Class20_Content.html",
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

    // Empty cells before the first day of the month
    if (i < startDay) {

        cell.className = "day--disabled";

    } else {

        cell.className = "day";

        // Date number
        const dayNumber = i - startDay + 1;

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

                // Create button
                const button = document.createElement("button");

                button.className =
                    `calendar-event-btn calendar-event-btn--${eventData.type}`;

                button.title = eventData.type;

                // Icon
                const icon = document.createElement("img");

                icon.src = eventData.icon;
                icon.className = "event-icon";

                button.appendChild(icon);

                // Popup for soft, grade, and extra
                let popup = null;

                if (eventData.type !== "class") {

                    popup = document.createElement("span");
                    popup.className = "popuptext";
                    popup.textContent = eventData.tooltip;

                    button.classList.add("popup");
                    button.appendChild(popup);
                }

                // Click behavior
                button.addEventListener("click", async (e) => {

                    e.stopPropagation();

                    if (eventData.type === "class") {

                        const titleResponse =
                            await fetch(eventData.title);

                        const contentResponse =
                            await fetch(eventData.content);

                        document.getElementById("modal-title").innerHTML =
                            await titleResponse.text();

                        document.getElementById("modal-body").innerHTML =
                            await contentResponse.text();

                        modal.classList.add("show");

                    } else {

                        document.querySelectorAll(".popuptext.show")
                            .forEach(el => {

                                if (el !== popup) {
                                    el.classList.remove("show");
                                }

                            });

                        popup.classList.toggle("show");
                    }

                });

                eventContainer.appendChild(button);

            });

            cell.appendChild(eventContainer);
        }
    }

    // Add the cell to the calendar
    calendar.appendChild(cell);

}

// Return the completed month
return monthContainer;

} // end createMonth()

// generate 3 months
for (let i = 0; i < 3; i++) {
  const date = new Date(startYear, startMonth + i, 1);

  container.appendChild(
    createMonth(date.getFullYear(), date.getMonth())
  );
}

	// Modal close button
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});
	document.addEventListener("click", () => {

    document.querySelectorAll(".popuptext.show")
        .forEach(el => el.classList.remove("show"));

});