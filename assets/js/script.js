// // Data for dropdown options
// const options = [
// { name: "Default", icon: "/app.png", title: "Home | Hypackel" },
// { name: "Google", icon: "/favicon/google.png", title: "Google" },
// {
// 	name: "Drive",
// 	icon: "/favicon/drive.png",
// 	title: "My Drive - Google Drive",
// },
// { name: "Classroom", icon: "/favicon/classroom.png", title: "Home" },
// {
// 	name: "Schoology",
// 	icon: "/favicon/schoology.png",
// 	title: "Home | Schoology",
// },
// {
// 	name: "Schoology (Powerschool Icon)",
// 	icon: "/favicon/ps.ico",
// 	title: "Home | Schoology",
// },
// { name: "Gmail", icon: "/favicon/gmail.png", title: "Gmail" },
// { name: "Clever", icon: "/favicon/clever.png", title: "Clever | Portal" },
// {
// 	name: "Khan",
// 	icon: "/favicon/khan.png",
// 	title: "Dashboard | Khan Academy",
// },
// { name: "Campus", icon: "/favicon/campus.png", title: "Infinite Campus" },
// { name: "IXL", icon: "/favicon/ixl.png", title: "IXL | Dashboard" },
// { name: "Canvas", icon: "/favicon/canvas.png", title: "Dashboard" },
// { name: "LinkIt", icon: "/favicon/linkit.ico", title: "Test Taker" },
// { name: "Edpuzzle", icon: "/favicon/edpuzzle.png", title: "Edpuzzle" },
// {
// 	name: "i-Ready Math",
// 	icon: "/favicon/i-ready.ico",
// 	title: "Math To Do, i-Ready",
// },
// {
// 	name: "i-Ready Reading",
// 	icon: "/favicon/i-ready.ico",
// 	title: "Reading To Do, i-Ready",
// },
// {
// 	name: "ClassLink Login",
// 	icon: "/favicon/classlink-login.png",
// 	title: "Login",
// },
// {
// 	name: "Google Meet",
// 	icon: "/favicon/google-meet.png",
// 	title: "Google Meet",
// },
// {
// 	name: "Google Docs",
// 	icon: "/favicon/google-docs.ico",
// 	title: "Google Docs",
// },
// {
// 	name: "Google Slides",
// 	icon: "/favicon/google-slides.ico",
// 	title: "Google Slides",
// },
// { name: "Wikipedia", icon: "/favicon/wikipedia.png", title: "Wikipedia" },
// {
// 	name: "Britannica",
// 	icon: "/favicon/britannica.png",
// 	title: "Encyclopedia Britannica | Britannica",
// },
// { name: "Ducksters", icon: "/favicon/ducksters.png", title: "Ducksters" },
// {
// 	name: "Minga",
// 	icon: "/favicon/minga.png",
// 	title: "Minga - Creating Amazing Schools",
// },
// {
// 	name: "i-Ready Learning Games",
// 	icon: "/favicon/i-ready.ico",
// 	title: "Learning Games, i-Ready",
// },
// {
// 	name: "NoRedInk Home",
// 	icon: "/favicon/noredink.webp",
// 	title: "Student Home | NoRedInk",
// },
// {
// 	name: "Newsela Binder",
// 	icon: "/favicon/newsela.png",
// 	title: "Newsela | Binder",
// },
// {
// 	name: "Newsela Assignments",
// 	icon: "/favicon/newsela.png",
// 	title: "Newsela | Assignments",
// },
// {
// 	name: "Newsela Home",
// 	icon: "/favicon/newsela.png",
// 	title: "Newsela | Instructional Content Platform",
// },
// {
// 	name: "PowerSchool Sign In",
// 	icon: "/favicon/powerschool.png",
// 	title: "Student and Parent Sign In",
// },
// {
// 	name: "PowerSchool Grades and Attendance",
// 	icon: "/favicon/powerschool.png",
// 	title: "Grades and Attendance",
// },
// {
// 	name: "PowerSchool Teacher Comments",
// 	icon: "/favicon/powerschool.png",
// 	title: "Teacher Comments",
// },
// {
// 	name: "PowerSchool Standards Grades",
// 	icon: "/favicon/powerschool.png",
// 	title: "Standards Grades",
// },
// {
// 	name: "PowerSchool Attendance",
// 	icon: "/favicon/powerschool.png",
// 	title: "Attendance",
// },
// { name: "Nearpod", icon: "/favicon/nearpod.png", title: "Nearpod" },
// { name: "StudentVUE", icon: "/favicon/studentvue.ico", title: "StudentVUE" },
// {
// 	name: "Quizlet Home",
// 	icon: "/favicon/quizlet.webp",
// 	title: "Flashcards, learning tools and textbook solutions | Quizlet",
// },
// {
// 	name: "Google Forms Locked Mode",
// 	icon: "/favicon/googleforms.png",
// 	title: "Start your quiz",
// },
// { name: "DeltaMath", icon: "/favicon/deltamath.png", title: "DeltaMath" },
// { name: "Kami", icon: "/favicon/kami.png", title: "Kami" },
// {
// 	name: "GoGuardian Admin Restricted",
// 	icon: "/favicon/goguardian-lock.png",
// 	title: "Restricted",
// },
// {
// 	name: "GoGuardian Teacher Block",
// 	icon: "/favicon/goguardian.png",
// 	title: "Uh oh!",
// },
// {
// 	name: "World History Encyclopedia",
// 	icon: "/favicon/worldhistoryencyclopedia.png",
// 	title: "World History Encyclopedia",
// },
// {
// 	name: "Big Ideas Math Assignment Player",
// 	icon: "/favicon/bim.ico",
// 	title: "Assignment Player",
// },
// { name: "Big Ideas Math", icon: "/favicon/bim.ico", title: "Big Ideas Math" },
// ];

// // Create collapsible dropdown with icon toggle
// function createCollapsibleDropdown() {
// 	const dropdownContainer = document.createElement("div");
// 	dropdownContainer.style.position = "fixed";
// 	dropdownContainer.style.bottom = "20px";
// 	dropdownContainer.style.right = "20px";
// 	dropdownContainer.style.zIndex = "999999999999999999999999999999999999999999999999999";
// 	dropdownContainer.style.backgroundColor = "#fff";
// 	dropdownContainer.style.padding = "10px";
// 	dropdownContainer.style.borderRadius = "5px";
// 	dropdownContainer.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";

// 	const iconContainer = document.createElement("div");
// 	iconContainer.style.display = "flex";
// 	iconContainer.style.alignItems = "center";
// 	iconContainer.style.cursor = "pointer";
// 	iconContainer.style.transition = "transform 0.3s ease-in-out";  // Add smooth transition for icon rotation

// 	const icon = document.createElement("img");
// 	icon.src = "/favicon-large.png"; // Initial icon
// 	icon.alt = "Dropdown Icon";
// 	icon.style.width = "24px";  // Ensure the icon has a consistent size
// 	icon.style.height = "24px";
// 	icon.style.transition = "transform 0.3s ease-in-out";  // Smooth transition for rotation

// 	const select = document.createElement("select");
// 	select.id = "site-selector";
// 	select.style.display = "none";  // Initially hidden

// 	// Populate dropdown options
// 	for (let i = 0; i < options.length; i++) {
// 	  const option = options[i];
// 	  const optionElement = document.createElement("option");
// 	  optionElement.value = option.icon; // Store icon URL in value
// 	  optionElement.textContent = option.name;
// 	  optionElement.title = option.title; // Set tooltip
// 	  select.appendChild(optionElement);
// 	}

// 	// Toggle dropdown visibility and icon state
// 	iconContainer.onclick = () => {
// 	  const isExpanded = select.style.display === "block";  // Check if dropdown is expanded

// 	  if (isExpanded) {
// 		select.style.display = "none";  // Collapse dropdown
// 		icon.style.transform = "rotate(0deg)";  // Reset icon rotation
// 	  } else {
// 		select.style.display = "block";  // Expand dropdown
// 		icon.style.transform = "rotate(180deg)";  // Rotate icon to X
// 	  }
// 	};

// 	// Load saved selection from local storage
// 	const savedSite = localStorage.getItem("selectedSite");
// 	if (savedSite) {
// 	  const savedOption = options.find((option) => option.icon === savedSite);
// 	  if (savedOption) {
// 		select.value = savedOption.icon;
// 		// Set the document title and favicon immediately
// 		updateFaviconAndTitle(savedOption);
// 	  }
// 	}

// 	select.onchange = () => {
// 	  const selectedOption = options.find(
// 		(option) => option.icon === select.value
// 	  );
// 	  if (selectedOption) {
// 		// Update the document title and favicon
// 		updateFaviconAndTitle(selectedOption);
// 		// Save selection to local storage
// 		localStorage.setItem("selectedSite", selectedOption.icon);
// 	  }
// 	};

// 	// Add elements to container
// 	iconContainer.appendChild(icon);
// 	dropdownContainer.appendChild(iconContainer);
// 	dropdownContainer.appendChild(select);

// 	document.body.appendChild(dropdownContainer);
//   }

//   // Function to update the favicon and title
//   function updateFaviconAndTitle(selectedOption) {
// 	// Update the document title
// 	document.title = selectedOption.title;

// 	// Remove any existing favicon link elements
// 	const existingFavicons = document.querySelectorAll(
// 	  'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]'
// 	);
// 	for (let i = 0; i < existingFavicons.length; i++) {
// 	  existingFavicons[i].remove();
// 	}

// 	// Create a new favicon link element with the selected icon
// 	const newFavicon = document.createElement("link");
// 	newFavicon.rel = "icon";
// 	newFavicon.href = selectedOption.icon;
// 	document.head.appendChild(newFavicon);
//   }

//   // Run the function to create the collapsible dropdown
//   createCollapsibleDropdown();

document.addEventListener("DOMContentLoaded", () => {
  // Check if the URL is not localhost or 127.0.0.1
  const isLocalhost = ["localhost", "127.0.0.1"].includes(
    window.location.hostname
  );

  if (!isLocalhost) {
    console.log("script injection complete");
    
    // Create and inject Google Ads script
    const adsScript = document.createElement("script");
    adsScript.async = true;
    adsScript.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7128870281959256";
    adsScript.crossOrigin = "anonymous";
    document.head.prepend(adsScript);

    // Create and inject the new script
    const adsnew = document.createElement("script");
    adsnew.async = false;
    adsnew.src = "//supportinggenericexchanged.com/bb/17/d3/bb17d3ab88079f141f02b3e11ddbb9d9.js"; // Replace with your actual script URL
    adsnew.crossOrigin = "anonymous";
    document.head.prepend(adsnew);

    // Create and inject the new profitablecpmrate script
    // const profitableScript = document.createElement("script");
    // profitableScript.type = "text/javascript";
    // profitableScript.src = "//pl25670344.profitablecpmrate.com/e7/17/6f/e7176ff7610330dacbc075a48b1cc2ea.js";
    // document.head.appendChild(profitableScript);
  } else {
    console.log("script injection failed");
  }
});

// ____________________________
// SCRIPTREST.js STUFF
// ____________________________

// ____________________________
// Snow Particles Function
// ____________________________
function TurnOnSnowOnOtherPages() {
  snow = document.createElement("script");
  snow.src = "/assets/js/snow.js";
  document.body.appendChild(snow);
  localStorage.setItem("snow", true);
}

if (localStorage.getItem("snow") === "true") {
  TurnOnSnowOnOtherPages();
}

// // __________________________
// // Remove Mobile Users
// // __________________________
// window.addEventListener("load", function () {
//     // loadScript("/worker.js");
//     if (window.location.pathname === "/index.html" || window.location.pathname === "/" || window.location.pathname === "/=") {
//       if (window.innerWidth < 676) {
//         location.href = "/mobile.html";
//       }
//     }
//     if (window.location.pathname === '/loading.html') {
//       if (window.innerWidth < 676) {
//         var rm = document.querySelector('.themesExcluded');
//         rm.style.display = 'none';
//       }
//     }
//   });

function script(text) {
  console.log(
    "%cScript Injection",
    "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px",
    text
  );
}

// ====================================
// SCRIPT INJECTION
// ====================================

var gaenabled = window.localStorage.getItem("ga");
if (gaenabled == "false") {
  script("Skipped GA injection because it is disabled by the user.");
} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  gascript.setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=G-B9G5BGGE28"
  );
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-B9G5BGGE28');`;
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/3");
}

document.addEventListener("DOMContentLoaded", (event) => {
  setIcon();
  createTabCloakButtons();
});

function createTabCloakButtons() {
  const tabCloakOptions = [
    {
      name: "Default",
      icon: "/app.png",
    },
    {
      name: "Schoology",
      icon: "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico",
    },
    {
      name: "Google Sites",
      icon: "https://ssl.gstatic.com/atari/images/public/favicon.ico",
    },
    {
      name: "Google Forms",
      icon: "https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png",
    },
    {
      name: "Desmos",
      icon: "https://www.desmos.com/assets/img/apps/scientific/favicon.ico",
    },
    {
      name: "Desmos graphing",
      icon: "https://www.desmos.com/assets/img/apps/graphing/favicon.ico",
    },
    {
      name: "Google Drive",
      icon: "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_32dp.png",
    },
    {
      name: "Google classroom",
      icon: "https://ssl.gstatic.com/classroom/favicon.png",
    },
    { name: "Lexia Core5", icon: "https://www.lexiacore5.com/icons/icon.svg" },
    { name: "Lexia PowerUp", icon: "https://www.lexiapowerup.com/favicon.svg" },
    {
      name: "Mathspace",
      icon: "https://mathspace.co/website/favicons/favicon-32x32.png",
    },
    {
      name: "Kahoot",
      icon: "https://assets-cdn.kahoot.it/controller/v2/favicon.ico",
    },
    {
      name: "Oncourse Connect",
      icon: "/favicon/onc.ico",
    },
    { name: "Gmail", icon: "/favicon/gmail.png", title: "Gmail" },
    { name: "Clever", icon: "/favicon/clever.png", title: "Clever | Portal" },
    {
      name: "Khan",
      icon: "/favicon/khan.png",
      title: "Dashboard | Khan Academy",
    },
    { name: "Campus", icon: "/favicon/campus.png", title: "Infinite Campus" },
    { name: "IXL", icon: "/favicon/ixl.png", title: "IXL | Dashboard" },
    { name: "Canvas", icon: "/favicon/canvas.png", title: "Dashboard" },
    { name: "LinkIt", icon: "/favicon/linkit.ico", title: "Test Taker" },
    { name: "Edpuzzle", icon: "/favicon/edpuzzle.png", title: "Edpuzzle" },
    {
      name: "i-Ready Math",
      icon: "/favicon/i-ready.ico",
      title: "Math To Do, i-Ready",
    },
    {
      name: "i-Ready Reading",
      icon: "/favicon/i-ready.ico",
      title: "Reading To Do, i-Ready",
    },
    {
      name: "ClassLink Login",
      icon: "/favicon/classlink-login.png",
      title: "Login",
    },
    {
      name: "Google Meet",
      icon: "/favicon/google-meet.png",
      title: "Google Meet",
    },
    {
      name: "Google Docs",
      icon: "/favicon/google-docs.ico",
      title: "Google Docs",
    },
    {
      name: "Google Slides",
      icon: "/favicon/google-slides.ico",
      title: "Google Slides",
    },
    { name: "Wikipedia", icon: "/favicon/wikipedia.png", title: "Wikipedia" },
    {
      name: "Britannica",
      icon: "/favicon/britannica.png",
      title: "Encyclopedia Britannica | Britannica",
    },
    { name: "Ducksters", icon: "/favicon/ducksters.png", title: "Ducksters" },
    {
      name: "Minga",
      icon: "/favicon/minga.png",
      title: "Minga - Creating Amazing Schools",
    },
    {
      name: "i-Ready Learning Games",
      icon: "/favicon/i-ready.ico",
      title: "Learning Games, i-Ready",
    },
    {
      name: "NoRedInk Home",
      icon: "/favicon/noredink.webp",
      title: "Student Home | NoRedInk",
    },
    {
      name: "Newsela Binder",
      icon: "/favicon/newsela.png",
      title: "Newsela | Binder",
    },
    {
      name: "Newsela Assignments",
      icon: "/favicon/newsela.png",
      title: "Newsela | Assignments",
    },
    {
      name: "Newsela Home",
      icon: "/favicon/newsela.png",
      title: "Newsela | Instructional Content Platform",
    },
    {
      name: "PowerSchool Sign In",
      icon: "/favicon/powerschool.png",
      title: "Student and Parent Sign In",
    },
    {
      name: "PowerSchool Grades and Attendance",
      icon: "/favicon/powerschool.png",
      title: "Grades and Attendance",
    },
    {
      name: "PowerSchool Teacher Comments",
      icon: "/favicon/powerschool.png",
      title: "Teacher Comments",
    },
    {
      name: "PowerSchool Standards Grades",
      icon: "/favicon/powerschool.png",
      title: "Standards Grades",
    },
    {
      name: "PowerSchool Attendance",
      icon: "/favicon/powerschool.png",
      title: "Attendance",
    },
    { name: "Nearpod", icon: "/favicon/nearpod.png", title: "Nearpod" },
    {
      name: "StudentVUE",
      icon: "/favicon/studentvue.ico",
      title: "StudentVUE",
    },
    {
      name: "Quizlet Home",
      icon: "/favicon/quizlet.webp",
      title: "Flashcards, learning tools and textbook solutions | Quizlet",
    },
    {
      name: "Google Forms Locked Mode",
      icon: "/favicon/googleforms.png",
      title: "Start your quiz",
    },
    { name: "DeltaMath", icon: "/favicon/deltamath.png", title: "DeltaMath" },
    { name: "Kami", icon: "/favicon/kami.png", title: "Kami" },
    {
      name: "GoGuardian Admin Restricted",
      icon: "/favicon/goguardian-lock.png",
      title: "Restricted",
    },
    {
      name: "GoGuardian Teacher Block",
      icon: "/favicon/goguardian.png",
      title: "Uh oh!",
    },
    {
      name: "World History Encyclopedia",
      icon: "/favicon/worldhistoryencyclopedia.png",
      title: "World History Encyclopedia",
    },
    {
      name: "Big Ideas Math Assignment Player",
      icon: "/favicon/bim.ico",
      title: "Assignment Player",
    },
    {
      name: "Big Ideas Math",
      icon: "/favicon/bim.ico",
      title: "Big Ideas Math",
    }, // Assuming this is a local path
  ];

  const tabCloakButtonsContainer = document.getElementById("tabCloakButtons");
  if (tabCloakButtonsContainer) {
    // biome-ignore lint/complexity/noForEach: <explanation>
    tabCloakOptions.forEach((option) => {
      const button = document.createElement("button");

      const icon = document.createElement("img");
      icon.src = option.icon;
      icon.alt = option.name;
      icon.style.width = "20px";
      icon.style.height = "20px";
      icon.style.marginRight = "5px";

      button.classList.add("tabCloakiconButtons");
      button.appendChild(icon); // Append icon before text
      button.appendChild(document.createTextNode(option.name)); // Append button text

      button.addEventListener("click", function () {
        localStorage.setItem("tabCloak", option.name);
        setIcon();

        // Remove active class from all buttons
        const buttons = document.querySelectorAll(".tabCloakiconButtons");
        // biome-ignore lint/complexity/noForEach: <explanation>
        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });

        // Add active class to the clicked button
        this.classList.add("active");
      });

      // Check if the button corresponds to the selected tab cloak option and add the active class
      if (localStorage.getItem("tabCloak") === option.name) {
        button.classList.add("active");
      }

      tabCloakButtonsContainer.appendChild(button);
    });
  }
}

function setIcon() {
  const tabCloakOptions = [
    {
      name: "Default",
      icon: "/app.png",
      title: "Home | Hypackel",
    },
    {
      name: "Schoology",
      icon: "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico",
      title: "Home | Schoology",
    },
    {
      name: "Google Slides",
      icon: "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico",
      title: "Google Slides",
    },
    {
      name: "Google Sites",
      icon: "https://ssl.gstatic.com/atari/images/public/favicon.ico",
      title: "Google Sites",
    },
    {
      name: "Google Forms",
      icon: "https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png",
      title: "Google Forms",
    },
    {
      name: "Desmos",
      icon: "https://www.desmos.com/assets/img/apps/scientific/favicon.ico",
      title: "Desmos | Scientific Calculator",
    },
    {
      name: "Desmos graphing",
      icon: "https://www.desmos.com/assets/img/apps/graphing/favicon.ico",
      title: "Desmos | Graphing Calculator",
    },
    {
      name: "Google Drive",
      icon: "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_32dp.png",
      title: "My Drive - Google Drive",
    },
    {
      name: "Google classroom",
      icon: "https://ssl.gstatic.com/classroom/favicon.png",
      title: "Classes",
    },
    {
      name: "Lexia Core5",
      icon: "https://www.lexiacore5.com/icons/icon.svg",
      title: "Lexia Core5",
    },
    {
      name: "Lexia PowerUp",
      icon: "https://www.lexiapowerup.com/favicon.svg",
      title: "Lexia PowerUp",
    },
    {
      name: "Mathspace",
      icon: "https://mathspace.co/website/favicons/favicon-32x32.png",
      title: "Mathspace",
    },
    {
      name: "Kahoot",
      icon: "https://assets-cdn.kahoot.it/controller/v2/favicon.ico",
      title: "Enter Game PIN - Kahoot!",
    },
    {
      name: "Oncourse Connect",
      icon: "/favicon/onc.ico",
      title: "My Grades - OnCourse Connect",
    },
    { name: "Default", icon: "/app.png", title: "Home | Hypackel" },
    { name: "Google", icon: "/favicon/google.png", title: "Google" },
    {
      name: "Drive",
      icon: "/favicon/drive.png",
      title: "My Drive - Google Drive",
    },
    { name: "Classroom", icon: "/favicon/classroom.png", title: "Home" },
    {
      name: "Schoology",
      icon: "/favicon/schoology.png",
      title: "Home | Schoology",
    },
    {
      name: "Schoology (Powerschool Icon)",
      icon: "/favicon/ps.ico",
      title: "Home | Schoology",
    },
    { name: "Gmail", icon: "/favicon/gmail.png", title: "Gmail" },
    { name: "Clever", icon: "/favicon/clever.png", title: "Clever | Portal" },
    {
      name: "Khan",
      icon: "/favicon/khan.png",
      title: "Dashboard | Khan Academy",
    },
    { name: "Campus", icon: "/favicon/campus.png", title: "Infinite Campus" },
    { name: "IXL", icon: "/favicon/ixl.png", title: "IXL | Dashboard" },
    { name: "Canvas", icon: "/favicon/canvas.png", title: "Dashboard" },
    { name: "LinkIt", icon: "/favicon/linkit.ico", title: "Test Taker" },
    { name: "Edpuzzle", icon: "/favicon/edpuzzle.png", title: "Edpuzzle" },
    {
      name: "i-Ready Math",
      icon: "/favicon/i-ready.ico",
      title: "Math To Do, i-Ready",
    },
    {
      name: "i-Ready Reading",
      icon: "/favicon/i-ready.ico",
      title: "Reading To Do, i-Ready",
    },
    {
      name: "ClassLink Login",
      icon: "/favicon/classlink-login.png",
      title: "Login",
    },
    {
      name: "Google Meet",
      icon: "/favicon/google-meet.png",
      title: "Google Meet",
    },
    {
      name: "Google Docs",
      icon: "/favicon/google-docs.ico",
      title: "Google Docs",
    },
    {
      name: "Google Slides",
      icon: "/favicon/google-slides.ico",
      title: "Google Slides",
    },
    { name: "Wikipedia", icon: "/favicon/wikipedia.png", title: "Wikipedia" },
    {
      name: "Britannica",
      icon: "/favicon/britannica.png",
      title: "Encyclopedia Britannica | Britannica",
    },
    { name: "Ducksters", icon: "/favicon/ducksters.png", title: "Ducksters" },
    {
      name: "Minga",
      icon: "/favicon/minga.png",
      title: "Minga - Creating Amazing Schools",
    },
    {
      name: "i-Ready Learning Games",
      icon: "/favicon/i-ready.ico",
      title: "Learning Games, i-Ready",
    },
    {
      name: "NoRedInk Home",
      icon: "/favicon/noredink.webp",
      title: "Student Home | NoRedInk",
    },
    {
      name: "Newsela Binder",
      icon: "/favicon/newsela.png",
      title: "Newsela | Binder",
    },
    {
      name: "Newsela Assignments",
      icon: "/favicon/newsela.png",
      title: "Newsela | Assignments",
    },
    {
      name: "Newsela Home",
      icon: "/favicon/newsela.png",
      title: "Newsela | Instructional Content Platform",
    },
    {
      name: "PowerSchool Sign In",
      icon: "/favicon/powerschool.png",
      title: "Student and Parent Sign In",
    },
    {
      name: "PowerSchool Grades and Attendance",
      icon: "/favicon/powerschool.png",
      title: "Grades and Attendance",
    },
    {
      name: "PowerSchool Teacher Comments",
      icon: "/favicon/powerschool.png",
      title: "Teacher Comments",
    },
    {
      name: "PowerSchool Standards Grades",
      icon: "/favicon/powerschool.png",
      title: "Standards Grades",
    },
    {
      name: "PowerSchool Attendance",
      icon: "/favicon/powerschool.png",
      title: "Attendance",
    },
    { name: "Nearpod", icon: "/favicon/nearpod.png", title: "Nearpod" },
    {
      name: "StudentVUE",
      icon: "/favicon/studentvue.ico",
      title: "StudentVUE",
    },
    {
      name: "Quizlet Home",
      icon: "/favicon/quizlet.webp",
      title: "Flashcards, learning tools and textbook solutions | Quizlet",
    },
    {
      name: "Google Forms Locked Mode",
      icon: "/favicon/googleforms.png",
      title: "Start your quiz",
    },
    { name: "DeltaMath", icon: "/favicon/deltamath.png", title: "DeltaMath" },
    { name: "Kami", icon: "/favicon/kami.png", title: "Kami" },
    {
      name: "GoGuardian Admin Restricted",
      icon: "/favicon/goguardian-lock.png",
      title: "Restricted",
    },
    {
      name: "GoGuardian Teacher Block",
      icon: "/favicon/goguardian.png",
      title: "Uh oh!",
    },
    {
      name: "World History Encyclopedia",
      icon: "/favicon/worldhistoryencyclopedia.png",
      title: "World History Encyclopedia",
    },
    {
      name: "Big Ideas Math Assignment Player",
      icon: "/favicon/bim.ico",
      title: "Assignment Player",
    },
    {
      name: "Big Ideas Math",
      icon: "/favicon/bim.ico",
      title: "Big Ideas Math",
    }, // Assuming this is a local path
  ];

  let iconURL = "https://d3rtzzzsiu7gdr.cloudfront.net/assets/img/app.png"; // Default icon URL
  let documentTitle = "Home | Hypackel"; // Default document title

  if (
    localStorage.getItem("tabCloak") == null ||
    localStorage.getItem("tabCloak") == ""
  ) {
    localStorage.setItem("tabCloak", "Default");
    // window.location.reload();
  }

  // Get the selected tab cloak option from localStorage
  const selectedTabCloak = localStorage.getItem("tabCloak") || "Default";

  // Find the corresponding icon URL and document title from tabCloakOptions
  const selectedOption = tabCloakOptions.find(
    (option) => option.name === selectedTabCloak
  );

  // Immediately Invoked Function Expression (IIFE) to create a true singleton
  const AudioPlayer = (() => {
    let instance = null;

    class AudioPlayerSingleton {
      constructor() {
        if (instance) {
          return instance;
        }

        this.hasPlayed = false;
        this.activeListener = null;
        this.audioElements = {
          normal: new Audio("/assets/media/kahoot.mp3"),
          special: new Audio("/assets/media/kahootspecial.mp3"),
        };

        instance = this;
      }

      play(optionName) {
        // If already played or wrong option, exit immediately
        if (this.hasPlayed || optionName.trim().toLowerCase() !== "kahoot") {
          return;
        }

        // Only set up the click listener once
        if (!this.activeListener) {
          const playSound = () => {
            const isSpecial = Math.random() < 0.1;
            console.log("isSpecial:", isSpecial);

            const audioToPlay = isSpecial
              ? this.audioElements.special
              : this.audioElements.normal;

            audioToPlay
              .play()
              .then(() => {
                console.log("Audio played successfully");
                this.hasPlayed = true;
                document.removeEventListener("click", this.activeListener);
                this.activeListener = null;
              })
              .catch((error) => console.error("Audio playback failed:", error));
          };

          this.activeListener = playSound;
          document.addEventListener("click", this.activeListener, {
            once: true,
          });
          console.log("Click listener added for audio playback");
        }
      }
    }

    // Create the singleton instance immediately
    return new AudioPlayerSingleton();
  })();

  // Simple wrapper function
  function playAudio() {
    AudioPlayer.play(selectedOption.name);
  }

  // Usage
  if (selectedOption.name.trim().toLowerCase() === "kahoot") {
    playAudio();
  }

  if (selectedOption) {
    iconURL = selectedOption.icon;
    documentTitle = selectedOption.title;
  }

  // Set the favicon and document title
  const link =
    document.querySelector("link[rel~='icon']") ||
    document.createElement("link");
  link.rel = "icon";
  link.href = iconURL;
  document.getElementsByTagName("head")[0].appendChild(link);
  document.title = documentTitle;
}

// ____________________________
// Auto Blanker
// ____________________________

if (localStorage.getItem("autoblank") == null) {
  localStorage.setItem("autoblank", false);
  window.location.reload();
}

// AB Cloak
function AB() {
  let inFrame;

  try {
    inFrame = window !== top;
  } catch (e) {
    inFrame = true;
  }

  if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Please allow popups and redirects.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");

      const name = document.title; // Grab title from current page
      const icon = document.querySelector("link[rel*='icon']")
        ? document.querySelector("link[rel*='icon']").href
        : "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"; // Grab favicon from current page, fallback if not found
      // const name = localStorage.getItem("name") || "My Drive - Google Drive"
      // const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"

      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";

      doc.head.appendChild(link);
      doc.body.appendChild(iframe);

      const pLink =
        localStorage.getItem(encodeURI("pLink")) || "https://www.nasa.gov/";
      location.replace(pLink);

      const script = doc.createElement("script");
      script.textContent = `
        window.onbeforeunload = function (event) {
          const confirmationMessage = 'Leave Site?';
          (event || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        };
      `;
      doc.head.appendChild(script);
    }
  }
}

function turnonblank() {
  localStorage.setItem("autoblank", true);
  AB();
  // window.location.reload();
  document.getElementById("blankonbutton").style.display = "none";
  document.getElementById("blankoffbutton").style.display = "block";
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("autoblank") === "true") {
    AB();
  }
});

function turnoffblank() {
  localStorage.setItem("autoblank", false);
  window.location.reload();
}
