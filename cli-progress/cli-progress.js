import _progress from "cli-progress";
import { setTimeout } from "timers/promises";

async function showPreset() {
  const bar = new _progress.Bar(
    {
      align: "left",
    },
    _progress.Presets["shades_classic"] || _progress.Presets.legacy
  );

  bar.start(100, 0);

  for (let i = 1; i <= 100; i++) {
    await setTimeout(50);
    bar.update(i);
  }

  bar.stop();
  console.log("");
}

showPreset();
