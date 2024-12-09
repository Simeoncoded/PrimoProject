const users = [
  { username: "admin", password: "password", role: "admin" },
  { username: "inspector", password: "Pa55w@rd", role: "inspector" },
  { username: "engineer", password: "Pa55w@rd", role: "engineer" },
  { username: "purchasing", password: "Pa55w@rd", role: "purchasing" },
];

// Role-based access map
const rolePages = {
  admin: ["index.html", "ncrlog.html", "create.html", "report.html", "engineering.html", "createPurchasing.html", "email.html", "edit.html", "details.html" ],
  inspector: ["index.html", "create.html", "ncrlog.html", "email.html", "edit.html", "details.html","report.html"],
  engineer: ["index.html", "inspector.html", "engineering.html", "email.html", "edit.html", "details.html","ncrlog.html", "report.html"],
  purchasing: ["index.html", "ncrlog.html", "createPurchasing.html", "email.html", "edit.html", "details.html", "report.html"],
};

// Login form submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const user = users.find((u) => u.username === username && u.password === password);

  const messageDiv = document.getElementById("message");

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    messageDiv.textContent = `Welcome, ${user.role}! Redirecting...`;
    messageDiv.style.color = "green";


    setTimeout(() => {
      window.location.href = rolePages[user.role][0];
    }, 1000);
  } else {
    messageDiv.textContent = "Invalid credentials.";
    messageDiv.style.color = "white";
  }
});


function checkAccess(currentPage) {
  const user = JSON.parse(localStorage.getItem("user"));


  if (currentPage === "login.html") return;

  if (!user) {
    alert("Please log in to access this page.");
    window.location.href = "login.html";
    return;
  }

  const allowedPages = rolePages[user.role];
  if (!allowedPages.includes(currentPage)) {
    alert("Access Denied! Redirecting to dashboard.");
    window.location.href = "index.html";
  }
}

const currentPage = window.location.pathname.split("/").pop();
checkAccess(currentPage);

// Logout button functionality
const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    logoutButton.style.display = "none";
  } else {
    logoutButton.addEventListener("click", function () {
 
      localStorage.removeItem("user");

     
      window.location.href = "login.html";
    });

  }
}


function manageAccordions() {
  const currentPage = window.location.pathname.split("/").pop();


  if (currentPage === "login.html") return;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please log in to access this page.");
    window.location.href = "login.html";
    return;
  }

  const inspectorAccordion = document.getElementById("inspectorAccordion");
  const engineerAccordion = document.getElementById("engineeringAccordion");
  const purchasingAccordion = document.getElementById("purchasingAccordion");


  if (inspectorAccordion) inspectorAccordion.style.display = "none";
  if (engineerAccordion) engineerAccordion.style.display = "none";
  if (purchasingAccordion) purchasingAccordion.style.display = "none";


  switch (user.role) {
    case "inspector":
   
      if (inspectorAccordion) {
        inspectorAccordion.style.display = "block";
        const inspectorCollapse = inspectorAccordion.querySelector('.accordion-collapse');
        if (inspectorCollapse) {
          inspectorCollapse.classList.add('show'); 
        }
      }
      break;

    case "engineer":

      if (inspectorAccordion) {
        inspectorAccordion.style.display = "block";
        const inspectorCollapse = inspectorAccordion.querySelector('.accordion-collapse');
        if (inspectorCollapse) {
          inspectorCollapse.classList.remove('show'); 
        }
      }
      if (engineerAccordion) {
        engineerAccordion.style.display = "block";
        const engineerCollapse = engineerAccordion.querySelector('.accordion-collapse');
        if (engineerCollapse) {
          engineerCollapse.classList.add('show'); 
        }
      }
      break;

    case "purchasing":
    case "admin":
     
      if (inspectorAccordion) {
        inspectorAccordion.style.display = "block";
        const inspectorCollapse = inspectorAccordion.querySelector('.accordion-collapse');
        if (inspectorCollapse) {
          inspectorCollapse.classList.remove('show'); 
        }
      }
      if (engineerAccordion) {
        engineerAccordion.style.display = "block";
        const engineerCollapse = engineerAccordion.querySelector('.accordion-collapse');
        if (engineerCollapse) {
          engineerCollapse.classList.remove('show'); 
        }
      }
      if (purchasingAccordion) {
        purchasingAccordion.style.display = "block";
        const purchasingCollapse = purchasingAccordion.querySelector('.accordion-collapse');
        if (purchasingCollapse) {
          purchasingCollapse.classList.add('show'); 
        }
      }
      break;

    default:
      alert("Unauthorized access.");
      window.location.href = "login.html";
  }
}


function manageAccordions() {
  const currentPage = window.location.pathname.split("/").pop();


  if (currentPage === "login.html") return;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please log in to access this page.");
    window.location.href = "login.html";
    return;
  }

  const inspectorAccordion = document.getElementById("detIn");
  const engineerAccordion = document.getElementById("engineeringAccordionDetails");
  const purchasingAccordion = document.getElementById("purchasingAccordionDetails");


  if (inspectorAccordion) inspectorAccordion.style.display = "none";
  if (engineerAccordion) engineerAccordion.style.display = "none";
  if (purchasingAccordion) purchasingAccordion.style.display = "none";


  switch (user.role) {
    case "inspector":
   
      if (inspectorAccordion) {
        inspectorAccordion.style.display = "block";
        const inspectorCollapse = inspectorAccordion.querySelector('.accordion-collapse');
        if (inspectorCollapse) {
          inspectorCollapse.classList.add('show'); 
        }
      }
      break;

    case "engineer":

      if (inspectorAccordion) {
        inspectorAccordion.style.display = "block";
        const inspectorCollapse = inspectorAccordion.querySelector('.accordion-collapse');
        if (inspectorCollapse) {
          inspectorCollapse.classList.remove('show'); 
        }
      }
      if (engineerAccordion) {
        engineerAccordion.style.display = "block";
        const engineerCollapse = engineerAccordion.querySelector('.accordion-collapse');
        if (engineerCollapse) {
          engineerCollapse.classList.add('show'); 
        }
      }
      break;

    case "purchasing":
    case "admin":
     
      if (inspectorAccordion) {
        inspectorAccordion.style.display = "block";
        const inspectorCollapse = inspectorAccordion.querySelector('.accordion-collapse');
        if (inspectorCollapse) {
          inspectorCollapse.classList.remove('show'); 
        }
      }
      if (engineerAccordion) {
        engineerAccordion.style.display = "block";
        const engineerCollapse = engineerAccordion.querySelector('.accordion-collapse');
        if (engineerCollapse) {
          engineerCollapse.classList.remove('show'); 
        }
      }
      if (purchasingAccordion) {
        purchasingAccordion.style.display = "block";
        const purchasingCollapse = purchasingAccordion.querySelector('.accordion-collapse');
        if (purchasingCollapse) {
          purchasingCollapse.classList.add('show'); 
        }
      }
      break;

    default:
      alert("Unauthorized access.");
      window.location.href = "login.html";
  }
}


function manageNavbarLinks() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return;

  const notificationLink = document.getElementById("notificationLink");
  const emailLink = document.getElementById("emailLink");


  if (notificationLink) notificationLink.style.display = "block";
  if (emailLink) emailLink.style.display = "block";


  if (user.role === "inspector") {
    if (notificationLink) notificationLink.style.display = "none";
    if (emailLink) emailLink.style.display = "none";
  }
}


function manageEditPageSections() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return; 

  const inspectorSection = document.getElementById("ncrForm");
  const engineerSection = document.getElementById("engineeringForm");

  if (!inspectorSection && !engineerSection) return;

 
  if (user.role === "engineer") {
    if (inspectorSection) {
      const inspectorFields = inspectorSection.querySelectorAll("input, select, textarea");
      inspectorFields.forEach((field) => {
        field.setAttribute("readonly", true); 
        field.style.backgroundColor = "#f5f5f5"; 
        field.style.pointerEvents = "none"; 
      });
      inspectorSection.style.display = "block"; 
    }
  }


  if (user.role === "purchasing") {
    if (inspectorSection) {
      const inspectorFields = inspectorSection.querySelectorAll("input, select, textarea");
      inspectorFields.forEach((field) => {
        field.setAttribute("readonly", true);
        field.style.backgroundColor = "#f5f5f5";
        field.style.pointerEvents = "none";
      });
      inspectorSection.style.display = "block";
    }

    if (engineerSection) {
      const engineerFields = engineerSection.querySelectorAll("input, select, textarea");
      engineerFields.forEach((field) => {
        field.setAttribute("readonly", true);
        field.style.backgroundColor = "#f5f5f5";
        field.style.pointerEvents = "none";
      });
      engineerSection.style.display = "block";
    }
  }
}



document.addEventListener("DOMContentLoaded", () => {
  manageEditPageSections();
  manageAccordions();
  manageNavbarLinks();
});