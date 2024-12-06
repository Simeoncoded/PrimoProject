const users = [
  { username: "admin", password: "password", role: "admin" },
  { username: "inspector", password: "Pa55w@rd", role: "inspector" },
  { username: "engineer", password: "Pa55w@rd", role: "engineer" },
  { username: "purchasing", password: "Pa55w@rd", role: "purchasing" },
];

// Role-based access map
const rolePages = {
  admin: ["index.html", "ncrlog.html", "create.html", "report.html", "engineering.html", "createPurchasing.html", "email.html", "edit.html", "details.html"],
  inspector: ["index.html", "create.html", "ncrlog.html", "email.html", "edit.html", "details.html","report.html"],
  engineer: ["index.html", "inspector.html", "engineering.html", "email.html", "edit.html", "details.html","ncrlog.html"],
  purchasing: ["index.html", "ncrlog.html", "create.html", "createPurchasing.html", "email.html", "edit.html", "details.html"],
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

    // Redirect to the first allowed page for the role
    setTimeout(() => {
      window.location.href = rolePages[user.role][0];
    }, 1000);
  } else {
    messageDiv.textContent = "Invalid credentials.";
    messageDiv.style.color = "white";
  }
});

// Access validation
function checkAccess(currentPage) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Skip validation on login.html
  if (currentPage === "login.html") return;

  if (!user) {
    alert("Please log in to access this page.");
    window.location.href = "login.html";
    return;
  }

  const allowedPages = rolePages[user.role];
  if (!allowedPages.includes(currentPage)) {
    alert("Access Denied! Redirecting to login.");
    window.location.href = "login.html";
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
      // Clear user data from localStorage
      localStorage.removeItem("user");

      // Prevent further code execution on the current page
      window.location.href = "login.html";
    });

  }
}


function manageAccordions() {
  const currentPage = window.location.pathname.split("/").pop();

  // If the user is already on the login page, skip accordion management
  if (currentPage === "login.html") return;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please log in to access this page.");
    window.location.href = "login.html";
    return;
  }

  // Get accordion elements
  const inspectorAccordion = document.getElementById("inspectorAccordion");
  const engineerAccordion = document.getElementById("engineeringAccordion");
  const purchasingAccordion = document.getElementById("purchasingAccordion");

  // Hide all accordions by default
  if (inspectorAccordion) inspectorAccordion.style.display = "none";
  if (engineerAccordion) engineerAccordion.style.display = "none";
  if (purchasingAccordion) purchasingAccordion.style.display = "none";

  // Determine which accordions to show based on role
  switch (user.role) {
    case "inspector":
      if (inspectorAccordion) inspectorAccordion.style.display = "block";
      break;
    case "engineer":
      if (inspectorAccordion) inspectorAccordion.style.display = "block";
      if (engineerAccordion) engineerAccordion.style.display = "block";
      break;
    case "purchasing":
    case "admin":
      if (inspectorAccordion) inspectorAccordion.style.display = "block";
      if (engineerAccordion) engineerAccordion.style.display = "block";
      if (purchasingAccordion) purchasingAccordion.style.display = "block";
      break;
    default:
      alert("Unauthorized access.");
      window.location.href = "login.html";
  }
}

// Function to manage navbar links based on user role
function manageNavbarLinks() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return; // No user logged in, skip

  const notificationLink = document.getElementById("notificationLink");
  const emailLink = document.getElementById("emailLink");

  // Hide all role-specific navbar links by default
  if (notificationLink) notificationLink.style.display = "block";
  if (emailLink) emailLink.style.display = "block";

  // Show links based on role
  if (user.role === "inspector") {
    if (notificationLink) notificationLink.style.display = "none";
    if (emailLink) emailLink.style.display = "none";
  }
}



document.addEventListener("DOMContentLoaded", () => {
  manageAccordions();
  manageNavbarLinks();
});