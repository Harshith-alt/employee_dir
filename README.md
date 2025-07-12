# Employee Directory Web Interface

A front-end-only Employee Directory interface built using **HTML**, **CSS**, **Vanilla JavaScript**, and **Freemarker templates** (simulated). The project allows viewing, adding, editing, deleting, filtering, sorting, searching, and paginating employee data without any backend or database. All data is handled in-memory via JavaScript arrays.

---

## 📁 Project Structure


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

### 📄 Pagination

- Select number of employees per page (10, 25, 50, 100).
- Navigate using Previous/Next and page numbers.
- Pagination works with filters and search.

### 📱 Responsive Design

- Fully responsive layout using Flexbox and media queries.
- Mobile-first design for best UX on all screen sizes.

---

## 🧪 Screenshots

| Desktop View | Mobile View |
|--------------|-------------|
| ![desktop](screenshots/desktop.png) | ![mobile](screenshots/mobile.png) |

- Add/Edit Form  
  ![form](screenshots/form.png)

- Filter/Sort/Search in action  
  ![filters](screenshots/filters.png)

---

## 🧠 Reflection

### 🔧 Challenges Faced

- Managing state across filtering, searching, and pagination without a framework.
- Simulating Freemarker template rendering without an actual backend.
- Ensuring all operations re-render the list correctly in real-time.
- Validating form inputs in a user-friendly yet simple way.

### 💡 Potential Improvements

- Add animations for transitions and modals.
- Use localStorage to persist data across page reloads.
- Improve accessibility with better ARIA roles and keyboard navigation.
- Implement unit tests for critical JS functions.
- Expand filtering with multi-select or fuzzy search.

---

## ✅ Self-Assessment Checklist

| Feature | Status |
|--------|--------|
| Semantic HTML structure | ✅ |
| Responsive CSS (Flexbox/Grid, Media Queries) | ✅ |
| Vanilla JS DOM manipulation | ✅ |
| Add/Edit/Delete employee functionality | ✅ |
| Filter/Search/Sort employees | ✅ |
| Pagination works with filters/search | ✅ |
| Client-side form validation (required, email format) | ✅ |
| Freemarker template simulated properly | ✅ |
| Clean, modular code with comments | ✅ |
| Clear UX design and UI layout | ✅ |
| README with screenshots and reflection | ✅ |

---

## 📌 Author & Acknowledgments

Made with 💻 for the AJACKUS Frontend Assignment.

Feel free to reach out with questions or feedback!
