function encodeToMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map(findBySymbol)
    .join(" ");
}

function decodeFromMorse(text) {
  return text
    .split(SIGNAL_SPACE)
    .map(findByMorseCode)
    .join(" ");
}

function findBySymbol(symbol) {
  const el = MORSE_CODE.find(el => el.symbol === symbol);
  return el?.morseCode || "";
}

function findByMorseCode(morseCode) {
  return morseCode
    .split(" ")
    .map(c => MORSE_CODE.find(el => el.morseCode === c)?.symbol || "")
    .join("");
}

async function playMorseCode(morseCode) {
  const words = morseCode
    .split(SIGNAL_SPACE)
    .map(word => word.trim().split(" "));

  for (const word of words) {
    for (const letter of word) {
      for (const signal of letter) {
        const time = signal === SHORT_SIGNAL_SYMBOL ? SHORT_SIGNAL_BEEP_TIME : LONG_SIGNAL_BEEP_TIME;
        await makeBeep(time);
        await makePause(LETTER_SPACE_BEEP_TIME);
      }
      await makePause(LETTER_SPACE_BEEP_TIME);
    }
    await makePause(WORD_SPACE_BEEP_TIME);
  }
}


