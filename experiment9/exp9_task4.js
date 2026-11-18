// Name: Jitesh Patel | Roll: 2510303242 | Experiment 9 | Task 4
function result() {
      let score = 0;
      const a1 = document.querySelector('input[name="q1"]:checked');
      const a2 = document.querySelector('input[name="q2"]:checked');
      if (a1 && a1.value === "const") score++;
      if (a2 && a2.value === "number") score++;
      const out = document.getElementById("score");
      out.textContent = "Your score: " + score + " / 2";
    }
