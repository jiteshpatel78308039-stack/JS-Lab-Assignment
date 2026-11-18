// Name: Jitesh Patel | Roll: 2510303242 | Experiment 9 | Task 2
function check() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value;
      const age = Number(document.getElementById("age").value);
      const msg = document.getElementById("msg");
      let text = "Form submitted successfully";
      if (name === "") text = "Name is required";
      else if (!email.includes("@")) text = "Enter a valid email";
      else if (isNaN(age) || age < 18) text = "Age must be 18 or more";
      msg.style.color = text.startsWith("Form") ? "green" : "red";
      msg.textContent = text;
    }
