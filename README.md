# Employee Directory Web Interface

A front-end-only Employee Directory interface built using **HTML**, **CSS**, **Vanilla JavaScript**, and **Freemarker templates** (simulated). The project allows viewing, adding, editing, deleting, filtering, sorting, searching, and paginating employee data without any backend or database. All data is handled in-memory via JavaScript arrays.

---


---

## 🚀 How to Run the Project

### Option 1: Without Freemarker Setup (Recommended for simplicity)

1. Open the `index.ftl` file directly in your browser (rename it to `index.html` if needed).
2. It will load mock employee data from `data.js` and render the app.
3. No backend setup required.

### Option 2: With Freemarker Setup (If you have Java)

1. Set up a simple Java project with Freemarker engine (e.g., using Spring Boot or a minimal Java servlet).
2. Inject mock data into `index.ftl` using `<#assign>` directive.
3. Serve the file and static assets via the embedded server.

---

## ✨ Features

Features include add/edit/delete, search, filter, sort, and infinite scroll for a seamless, modern user experience

### 📋 Dashboard

- Displays a list of employees in a responsive grid format.
- Each card shows: ID, Name, Email, Department, Role.
- Edit/Delete buttons per employee.

### ➕ Add / ✏️ Edit Employee

- Add new employee with unique ID.
- Edit existing employee data via form.
- Fields: First Name, Last Name, Email, Department, Role.
- Form is validated for required fields and email format.

### ❌ Delete Employee

- Deletes employee from array and re-renders list.
- Includes confirmation dialog.

### 🔍 Search / 🔽 Filter / 🔃 Sort

- **Search** by name or email.
- **Filter** by Department and Role using a sidebar/popup.
- **Sort** by First Name or Department.
- All three features work in combination.


