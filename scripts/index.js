const { fromEvent } = rxjs;
const { tap, map } = rxjs.operators;

const inputTextArea = document.getElementById('inputTextArea');
const morseCodeArea = document.getElementById('morseCodeArea');
const copyBtn = document.getElementById('copyBtn');
const playSoundBtn = document.getElementById('playSoundBtn');

const inputTextArea$ = fromEvent(inputTextArea, 'input');
const morseCodeArea$ = fromEvent(morseCodeArea, 'input');
const copyBtn$ = fromEvent(copyBtn, 'click');
const playSoundBtn$ = fromEvent(playSoundBtn, 'click');

inputTextArea$
  .pipe(
    map(({ target }) => {
      const { value } = target;
      return encodeToMorse(value);
    }),
    tap(value => {
      morseCodeArea.value = value;
    })
  )
  .subscribe();

morseCodeArea$
  .pipe(
    map(({ target }) => {
      const { value } = target;
      return decodeFromMorse(value);
    }),
    tap(value => {
      inputTextArea.value = value;
    })
  )
  .subscribe();

copyBtn$
  .pipe(
    tap(() => {
      const morseCode = morseCodeArea.value;
      if (morseCode) {
        copyToClipboard(morseCodeArea.value);
      }
    })
  )
  .subscribe();

playSoundBtn$
  .pipe(
    tap(async () => {
      const morseCode = morseCodeArea.value;
      if (morseCode) {
        await playMorseCode(morseCode);
      }
    })
  ).subscribe();
