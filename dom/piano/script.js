let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// "Piano-ish" sound: layered oscillators + filter + envelope
function playPianoLike(freq) {
  const ctx = getAudioContext();

  const now = ctx.currentTime;
  const duration = 1.0; // seconds
  const attack = 0.01;
  const decay = 0.25;

  // Master gain
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0, now);
  masterGain.gain.linearRampToValueAtTime(1, now + attack); // attack up
  masterGain.gain.exponentialRampToValueAtTime(0.001, now + decay); // decay down
  masterGain.connect(ctx.destination);

  // Gentle lowpass filter to warm it up
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(6000, now);
  filter.frequency.exponentialRampToValueAtTime(1500, now + duration);
  filter.connect(masterGain);

  // Layer a few oscillators with slight detune & different timbres
  const oscTypes = ["sine", "triangle", "square"];
  const baseGains = [0.7, 0.3, 0.15];

  oscTypes.forEach((type, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    const detuneCents = (index - 1) * 8; // -8, 0, +8 cents
    osc.frequency.setValueAtTime(freq, now);
    osc.detune.setValueAtTime(detuneCents, now);

    // Each partial has its own quick decay
    gain.gain.setValueAtTime(baseGains[index], now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(filter);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  });
}

function activateKeyVisual(keyEl) {
  if (!keyEl) return;
  keyEl.classList.add("active");
  setTimeout(() => keyEl.classList.remove("active"), 120);
}

// Setup mouse/touch interactions
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  const play = () => {
    const freq = parseFloat(key.dataset.freq);
    if (!isNaN(freq)) {
      playPianoLike(freq);
      activateKeyVisual(key);
    }
  };

  key.addEventListener("mousedown", play);

  key.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      play();
    },
    { passive: false }
  );
});

// Map keyboard keys to piano keys
const keyMap = {};
keys.forEach((k) => {
  const keyboardKey = k.dataset.key;
  if (keyboardKey) {
    keyMap[keyboardKey.toLowerCase()] = k;
  }
});

// Keyboard events
window.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const pianoKey = keyMap[key];
  if (!pianoKey) return;

  // Prevent auto-repeat from flooding sound
  if (pianoKey.dataset.down === "true") return;
  pianoKey.dataset.down = "true";

  const freq = parseFloat(pianoKey.dataset.freq);
  if (!isNaN(freq)) {
    playPianoLike(freq);
    activateKeyVisual(pianoKey);
  }
});

window.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  const pianoKey = keyMap[key];
  if (!pianoKey) return;
  pianoKey.dataset.down = "false";
});
