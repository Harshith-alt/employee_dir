if (!localStorage.getItem("employeeData")) {
  const initialData = [
    {
      id: "1",
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@company.com",
      department: "HR",
      role: "Manager",
    },
    {
      id: "2",
      firstName: "Bob",
      lastName: "Jones",
      email: "bob@company.com",
      department: "Engineering",
      role: "Developer",
    },
  ];
  localStorage.setItem("employeeData", JSON.stringify(initialData));
}

window.employeeData = JSON.parse(localStorage.getItem("employeeData"));
