const users = [
    { username: "admin", password: "password", role: "admin" },
    { username: "inspector", password: "Pa55w@rd", role: "inspector" },
    { username: "engineer", password: "Pa55w@rd", role: "engineer" },
    { username: "purchasing", password: "Pa55w@rd", role: "purchasing" },
  ];
  
  // Role-based access map
  const rolePages = {
    admin: ["index.html", "ncrlog.html", "create.html", "report.html","engineering.html","createPurchasing.html","email.html"],
    inspector: ["index.html","create.html","ncrlog.html","email.html"],
    engineer: ["index.html","inspector.html","engineering.html","email.html"],
    purchasing: ["index.html", "ncrlog.html", "create.html", "createPurchasing.html","email.html"],
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
      messageDiv.style.color = "red";
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
  
        // Redirect to the login page
        window.location.href = "login.html";
      });
    }
  }
  