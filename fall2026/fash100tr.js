const container = document.getElementById("calendarContainer");
//FASH 100 TR Fall 2026
let startYear = 2026;
let startMonth = 8; // September (0-indexed)

// event data
const events = {
  "2026-09-14": [{
    type: "soft",
    tooltip: "Complete PQA",
    icon: "../icons/iconSoft.svg"
}],
	"2026-09-15": [{
    type: "class",
    title: "../templates/fash100/Title_01.html",
    content: "../templates/fash100/Class01_Content.html",
    icon: "../icons/iconClass.svg"
}],
  "2026-09-17": [{
      type: "class",
      title: "../templates/fash100/Title_02.html",
      content: "../templates/fash100/Class02_Content.html",
      icon: "../icons/iconClass.svg"
    }],
  "2026-09-22": [{
	  type: "class",
      title: "../templates/fash100/Title_03.html",
      content: "../templates/fash100/Class03_Content.html",
      icon: "../icons/iconClass.svg"
  }],
	"2026-09-24":[{
		type: "class",
      title: "../templates/fash100/Title_04.html",
      content: "../templates/fash100/Class04_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Sewing Machine Test Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-09-29":[{
		type: "class",
      title: "../templates/fash100/Title_05.html",
      content: "../templates/fash100/Class05_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-01":[{
		type: "class",
      title: "../templates/fash100/Title_06.html",
      content: "../templates/fash100/Class06_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-06":[{
		type: "class",
      title: "../templates/fash100/Title_07.html",
      content: "../templates/fash100/Class07_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Sample Book One Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-10-08":[{
		type: "class",
      title: "../templates/fash100/Title_08.html",
      content: "../templates/fash100/Class08_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-09":[{
    type: "extra",
    tooltip: "Extra Help 10am-12pm",
    icon: "../icons/iconExtra.svg"
}],
	"2026-10-13":[{
		type: "class",
      title: "../templates/fash100/Title_09.html",
      content: "../templates/fash100/Class09_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-15":[{
		type: "class",
      title: "../templates/fash100/Title_10.html",
      content: "../templates/fash100/Class10_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-20":[{
		type: "class",
      title: "../templates/fash100/Title_11.html",
      content: "../templates/fash100/Class11_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Sample Book Two Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-10-22":[{
		type: "class",
      title: "../templates/fash100/Title_12.html",
      content: "../templates/fash100/Class12_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-27":[{
		type: "class",
      title: "../templates/fash100/Title_13.html",
      content: "../templates/fash100/Class13_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-10-29":[{
		type: "class",
      title: "../templates/fash100/Title_14.html",
      content: "../templates/fash100/Class14_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Skirt Critique and Process Journal Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-11-03":[{
		type: "class",
      title: "../templates/fash100/Title_15.html",
      content: "../templates/fash100/Class15_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-05":[{
		type: "class",
      title: "../templates/fash100/Title_16.html",
      content: "../templates/fash100/Class16_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-06":[{
    type: "extra",
    tooltip: "Extra Help 10am-12pm",
    icon: "../icons/iconExtra.svg"
}],
	"2026-11-10":[{
		type: "class",
      title: "../templates/fash100/Title_17.html",
      content: "../templates/fash100/Class17_Content.html",
      icon: "../icons/iconClass.svg"
	},
	{
    type: "grade",
    tooltip: "Fitted Shirt Critique and Process Journal Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-11-12":[{
		type: "class",
      title: "../templates/fash100/Title_18.html",
      content: "../templates/fash100/Class18_Content.html",
      icon: "../icons/iconClass.svg"
	}],
	"2026-11-17":[{
	type: "class",
      title: "../templates/fash100/Title_19.html",
      content: "../templates/fash100/Class19_Content.html",
      icon: "../icons/iconClass.svg"
},
	{
    type: "grade",
    tooltip: "Unlined Jacket Critique and Process Journal Due",
    icon: "../icons/iconGrade.svg"
}],
	"2026-11-19":[{
	type: "class",
      title: "../templates/fash100/Title_20.html",
      content: "../templates/fash100/Class20_Content.html",
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
