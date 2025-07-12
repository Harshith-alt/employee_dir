function openForm() {
  window.location.href = "form.html";
}

function editEmployee(id) {
  localStorage.setItem("editId", id);
  window.location.href = "form.html";
}

function deleteEmployee(id) {
  const data = JSON.parse(localStorage.getItem("employeeData"));
  const updated = data.filter((e) => e.id !== id);
  localStorage.setItem("employeeData", JSON.stringify(updated));
  document.dispatchEvent(new Event("DOMContentLoaded"));
}

function renderEmployees(
  searchTerm = "",
  filterDept = "",
  filterRole = "",
  sortKey = ""
) {
  let data = JSON.parse(localStorage.getItem("employeeData")) || [];

  // Filter
  if (filterDept) {
    data = data.filter(
      (e) => e.department.toLowerCase() === filterDept.toLowerCase()
    );
  }
  if (filterRole) {
    data = data.filter(
      (e) => e.role.toLowerCase() === filterRole.toLowerCase()
    );
  }

  // Search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    data = data.filter(
      (e) =>
        e.firstName.toLowerCase().includes(term) ||
        e.lastName.toLowerCase().includes(term) ||
        e.email.toLowerCase().includes(term)
    );
  }

  // Sort
  if (sortKey) {
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }

  const list = document.getElementById("employeeList");
  if (!list) return;

  list.innerHTML = "";

  data.forEach((emp) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <p><b>${emp.firstName} ${emp.lastName}</b></p>
      <p>${emp.email}</p>
      <p>${emp.department}</p>
      <p>${emp.role}</p>
      <button onclick="editEmployee('${emp.id}')">Edit</button>
      <button onclick="deleteEmployee('${emp.id}')">Delete</button>
    `;
    list.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employeeForm");
  const data = JSON.parse(localStorage.getItem("employeeData")) || [];

  // Populate dropdowns
  const deptSet = new Set();
  const roleSet = new Set();
  data.forEach((e) => {
    deptSet.add(e.department);
    roleSet.add(e.role);
  });

  const deptSelect = document.getElementById("departmentFilter");
  const roleSelect = document.getElementById("roleFilter");

  if (deptSelect && roleSelect) {
    deptSet.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = opt.textContent = d;
      deptSelect.appendChild(opt);
    });
    roleSet.forEach((r) => {
      const opt = document.createElement("option");
      opt.value = opt.textContent = r;
      roleSelect.appendChild(opt);
    });
  }

  // Handle filters & search
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortBy");

  const triggerRender = () => {
    renderEmployees(
      searchInput?.value || "",
      deptSelect?.value || "",
      roleSelect?.value || "",
      sortSelect?.value || ""
    );
  };

  if (searchInput) searchInput.addEventListener("input", triggerRender);
  if (deptSelect) deptSelect.addEventListener("change", triggerRender);
  if (roleSelect) roleSelect.addEventListener("change", triggerRender);
  if (sortSelect) sortSelect.addEventListener("change", triggerRender);

  // Form handling (as already present)
  if (form) {
    const editId = localStorage.getItem("editId");
    if (editId) {
      const emp = data.find((e) => e.id === editId);
      if (emp) {
        document.getElementById("empId").value = emp.id;
        document.getElementById("firstName").value = emp.firstName;
        document.getElementById("lastName").value = emp.lastName;
        document.getElementById("email").value = emp.email;
        document.getElementById("department").value = emp.department;
        document.getElementById("role").value = emp.role;
      }
      localStorage.removeItem("editId");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newEmp = {
        id: document.getElementById("empId").value || Date.now().toString(),
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        role: document.getElementById("role").value,
      };

      const index = data.findIndex((e) => e.id === newEmp.id);
      if (index >= 0) {
        data[index] = newEmp;
      } else {
        data.push(newEmp);
      }

      localStorage.setItem("employeeData", JSON.stringify(data));
      alert("Saved successfully!");
      window.location.href = "index.html";
    });
  }

  renderEmployees(); // Initial render
});
