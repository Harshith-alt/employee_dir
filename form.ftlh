<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Add Employee</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="form-wrapper">
    <div class="form-card">
      <h2>Add Employee</h2>
      <form id="employeeForm">
        <input type="hidden" id="empId" />

        <div class="form-box">
          <h3>Personal Info</h3>
          <div class="form-section">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" required />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" required />
            </div>
          </div>
        </div>

        <div class="form-box">
          <h3>Contact & Department</h3>
          <div class="form-section">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div class="form-group">
              <label for="department">Department</label>
              <select id="department" required>
                <option value="">Select department</option>
                <option>HR</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-box">
          <h3>Role Information</h3>
          <div class="form-section single">
            <div class="form-group">
              <label for="role">Role</label>
              <select id="role" required>
                <option value="">Select role</option>
                <option>Manager</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Intern</option>
              </select>
            </div>
          </div>
        </div>

        <div class="button-row">
          <button type="button" class="cancel-btn" onclick="window.location.href='index.html'">Cancel</button>
          <button type="submit" class="add-btn">Add</button>
        </div>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

