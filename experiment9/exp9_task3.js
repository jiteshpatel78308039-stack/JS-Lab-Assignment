// Name: Jitesh Patel | Roll: 2510303242 | Experiment 9 | Task 3
function save() {
      const value = document.getElementById("user").value;
      localStorage.setItem("username", value);
      show();
    }
    function show() {
      const n = localStorage.getItem("username");
      const out = document.getElementById("out");
      out.textContent = n ? "Saved name: " + n : "No name saved";
    }
    show();
