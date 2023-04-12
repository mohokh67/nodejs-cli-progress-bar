import ProgressBar from "progress";
import { setTimeout } from "timers/promises";

const progressBar = new ProgressBar("Progress: [:bar] :percent :etas", {
  complete: "-",
  incomplete: " ",
  width: 50,
  total: 100,
});

const simulateTask = async () => {
  for (let i = 0; i < 100; i++) {
    progressBar.tick(); // Update the progress bar
    await setTimeout(100); // Wait 100ms to simulate an asynchronous task
  }
};

simulateTask();
