let currentLanguage = 'ru';
let isShifted = false;

let displayedText = '';

function createKeyboardWithLines() {
  const keyboard = document.createElement('div');
  keyboard.setAttribute('class', 'keyboard');

  for (let i = 1; i < 6; i++) {
    const line = document.createElement('div');
    line.setAttribute('class', `line line${i}`);
    keyboard.appendChild(line);
  }
  return keyboard;
}

function createDom() {
  const mainContainer = document.createElement('main');
  mainContainer.setAttribute('class', 'main');
  document.body.appendChild(mainContainer);

  const title = document.createElement('h1');
  title.setAttribute('class', 'title');
  title.innerHTML = 'Virtual Keyboard';
  mainContainer.appendChild(title);

  const screen = document.createElement('textarea');
  screen.setAttribute('class', 'screen');
  mainContainer.appendChild(screen);

  mainContainer.appendChild(createKeyboardWithLines());
  
  const notes = document.createElement('p');
    notes.setAttribute('class', 'notes');
    notes.innerHTML = 'Создано на ОС Windows <br> Для смены языка используйте левые ctrl+ alt';
    mainContainer.appendChild(notes);

}

createDom();
document.querySelector('.screen').value = displayedText;

const ENGLINES = [
  [
      {
          'type': 'letter',
          'initial': '`',
          'shifted': '~',
      },
      {
          'type': 'letter',
          'initial': '1',
          'shifted': '!',
      },
      {
          'type': 'letter',
          'initial': '2',
          'shifted': '@',
      },
      {
          'type': 'letter',
          'initial': '3',
          'shifted': '#',
      },
      {
          'type': 'letter',
          'initial': '4',
          'shifted': '$',
      },
      {
          'type': 'letter',
          'initial': '5',
          'shifted': '%',
      },
      {
          'type': 'letter',
          'initial': '6',
          'shifted': '^',
      },
      {
          'type': 'letter',
          'initial': '7',
          'shifted': '&',
      },
      {
          'type': 'letter',
          'initial': '8',
          'shifted': '*',
      },
      {
          'type': 'letter',
          'initial': '9',
          'shifted': '(',
      },
      {
          'type': 'letter',
          'initial': '0',
          'shifted': ')',
      },
      {
          'type': 'letter',
          'initial': '-',
          'shifted': '_',
      },
      {
          'type': 'letter',
          'initial': '=',
          'shifted': '+',
      },
      {
          'type': 'non-letter backspace',
          'initial': 'Backspace',
          'shifted': 'Backspace',
      },
      
  ],
  [
      {
          'type': 'non-letter',
          'initial': 'Tab',
          'shifted': 'Tab',
      },
      {
          'type': 'letter',
          'initial': 'q',
          'shifted': 'Q',
      },
      {
          'type': 'letter',
          'initial': 'w',
          'shifted': 'W',
      },
      {
          'type': 'letter',
          'initial': 'e',
          'shifted': 'E',
      },
      {
          'type': 'letter',
          'initial': 'r',
          'shifted': 'R',
      },
      {
          'type': 'letter',
          'initial': 't',
          'shifted': 'T',
      },
      {
          'type': 'letter',
          'initial': 'y',
          'shifted': 'Y',
      },
      {
          'type': 'letter',
          'initial': 'u',
          'shifted': 'U',
      },
      {
          'type': 'letter',
          'initial': 'i',
          'shifted': 'I',
      },
      {
          'type': 'letter',
          'initial': 'o',
          'shifted': 'O',
      },
      {
          'type': 'letter',
          'initial': 'p',
          'shifted': 'P',
      },
      {
          'type': 'letter',
          'initial': '[',
          'shifted': '{',
      },
      {
          'type': 'letter',
          'initial': ']',
          'shifted': '}',
      },
      {
          'type': 'letter',
          'initial': '\\',
          'shifted': '|',
      },
      {
          'type': 'non-letter',
          'initial': 'Del',
          'shifted': 'Del',
      },
  ],
  [
      {
          'type': 'non-letter',
          'initial': 'CapsLock',
          'shifted': 'CapsLock',
      },
      {
          'type': 'letter',
          'initial': 'a',
          'shifted': 'A',
      },
      {
          'type': 'letter',
          'initial': 's',
          'shifted': 'S',
      },
      {
          'type': 'letter',
          'initial': 'd',
          'shifted': 'D',
      },
      {
          'type': 'letter',
          'initial': 'f',
          'shifted': 'F',
      },
      {
          'type': 'letter',
          'initial': 'g',
          'shifted': 'G',
      },
      {
          'type': 'letter',
          'initial': 'h',
          'shifted': 'H',
      },
      {
          'type': 'letter',
          'initial': 'j',
          'shifted': 'J',
      },
      {
          'type': 'letter',
          'initial': 'k',
          'shifted': 'K',
      },
      {
          'type': 'letter',
          'initial': 'l',
          'shifted': 'L',
      },
      {
          'type': 'letter',
          'initial': ';',
          'shifted': ':',
      },
      {
          'type': 'letter',
          'initial': "'",
          'shifted': '"',
      },
      {
          'type': 'non-letter',
          'initial': 'Enter',
          'shifted': 'Enter',
      },
  ],
  [
      {
          'type': 'non-letter',
          'initial': 'Shift',
          'shifted': 'Shift',
      },
      {
          'type': 'letter',
          'initial': 'z',
          'shifted': 'Z',
      },
      {
          'type': 'letter',
          'initial': 'x',
          'shifted': 'X',
      },
      {
          'type': 'letter',
          'initial': 'c',
          'shifted': 'C',
      },
      {
          'type': 'letter',
          'initial': 'v',
          'shifted': 'V',
      },
      {
          'type': 'letter',
          'initial': 'b',
          'shifted': 'B',
      },
      {
          'type': 'letter',
          'initial': 'n',
          'shifted': 'N',
      },
      {
          'type': 'letter',
          'initial': 'm',
          'shifted': 'M',
      },
      {
          'type': 'letter',
          'initial': ',',
          'shifted': '<',
      },
      {
          'type': 'letter',
          'initial': '.',
          'shifted': '>',
      },
      {
          'type': 'letter',
          'initial': '/',
          'shifted': '?',
      },
      {
          'type': 'non-letter',
          'initial': '↑',
          'shifted': '↑',
      },
      {
          'type': 'non-letter',
          'initial': 'Shift',
          'shifted': 'Shift',
      },
  ],
  [
      {
          'type': 'non-letter',
          'initial': 'Ctrl',
          'shifted': 'Ctrl',
      },
      {
          'type': 'non-letter',
          'initial': 'Win',
          'shifted': 'Win',
      },
      {
          'type': 'non-letter',
          'initial': 'Alt',
          'shifted': 'Alt',
      },
      {
          'type': 'letter',
          'initial': ' ',
          'shifted': ' ',
      },
      {
          'type': 'non-letter',
          'initial': 'Alt',
          'shifted': 'Alt',
      },
      {
          'type': 'non-letter',
          'initial': '←',
          'shifted': '←',
      },
      {
          'type': 'non-letter',
          'initial': '↓',
          'shifted': '↓',
      },
      {
          'type': 'non-letter',
          'initial': '→',
          'shifted': '→',
      },
      {
          'type': 'non-letter',
          'initial': 'Ctrl',
          'shifted': 'Ctrl',
      },
  ]
]

const RULINES = 
[
    [
        {
            'type': 'letter',
            'initial': 'ё',
            'shifted': 'Ё',
        },
        {
            'type': 'letter',
            'initial': '1',
            'shifted': '!',
        },
        {
            'type': 'letter',
            'initial': '2',
            'shifted': "'",
        },
        {
            'type': 'letter',
            'initial': '3',
            'shifted': '№',
        },
        {
            'type': 'letter',
            'initial': '4',
            'shifted': ';',
        },
        {
            'type': 'letter',
            'initial': '5',
            'shifted': '%',
        },
        {
            'type': 'letter',
            'initial': '6',
            'shifted': ':',
        },
        {
            'type': 'letter',
            'initial': '7',
            'shifted': '?',
        },
        {
            'type': 'letter',
            'initial': '8',
            'shifted': '*',
        },
        {
            'type': 'letter',
            'initial': '9',
            'shifted': '(',
        },
        {
            'type': 'letter',
            'initial': '0',
            'shifted': ')',
        },
        {
            'type': 'letter',
            'initial': '-',
            'shifted': '_',
        },
        {
            'type': 'letter',
            'initial': '=',
            'shifted': '+',
        },
        {
            'type': 'non-letter backspace',
            'initial': 'Backspace',
            'shifted': 'Backspace',
        },
        
    ],
    [
        {
            'type': 'non-letter',
            'initial': 'Tab',
            'shifted': 'Tab',
        },
        {
            'type': 'letter',
            'initial': 'й',
            'shifted': 'Й',
        },
        {
            'type': 'letter',
            'initial': 'ц',
            'shifted': 'Ц',
        },
        {
            'type': 'letter',
            'initial': 'у',
            'shifted': 'У',
        },
        {
            'type': 'letter',
            'initial': 'к',
            'shifted': 'К',
        },
        {
            'type': 'letter',
            'initial': 'е',
            'shifted': 'Е',
        },
        {
            'type': 'letter',
            'initial': 'н',
            'shifted': 'Н',
        },
        {
            'type': 'letter',
            'initial': 'г',
            'shifted': 'Г',
        },
        {
            'type': 'letter',
            'initial': 'ш',
            'shifted': 'Ш',
        },
        {
            'type': 'letter',
            'initial': 'щ',
            'shifted': 'Щ',
        },
        {
            'type': 'letter',
            'initial': 'з',
            'shifted': 'З',
        },
        {
            'type': 'letter',
            'initial': 'х',
            'shifted': 'Х',
        },
        {
            'type': 'letter',
            'initial': 'ъ',
            'shifted': 'Ъ',
        },
        {
            'type': 'letter',
            'initial': '\\',
            'shifted': '|',
        },
        {
            'type': 'non-letter',
            'initial': 'Del',
            'shifted': 'Del',
        },
    ],
    [
        {
            'type': 'non-letter',
            'initial': 'CapsLock',
            'shifted': 'CapsLock',
        },
        {
            'type': 'letter',
            'initial': 'ф',
            'shifted': 'Ф',
        },
        {
            'type': 'letter',
            'initial': 'ы',
            'shifted': 'Ы',
        },
        {
            'type': 'letter',
            'initial': 'в',
            'shifted': 'В',
        },
        {
            'type': 'letter',
            'initial': 'а',
            'shifted': 'А',
        },
        {
            'type': 'letter',
            'initial': 'п',
            'shifted': 'П',
        },
        {
            'type': 'letter',
            'initial': 'р',
            'shifted': 'Р',
        },
        {
            'type': 'letter',
            'initial': 'о',
            'shifted': 'О',
        },
        {
            'type': 'letter',
            'initial': 'л',
            'shifted': 'Л',
        },
        {
            'type': 'letter',
            'initial': 'д',
            'shifted': 'Д',
        },
        {
            'type': 'letter',
            'initial': 'ж',
            'shifted': 'Ж',
        },
        {
            'type': 'letter',
            'initial': 'э',
            'shifted': 'Э',
        },
        {
            'type': 'non-letter',
            'initial': 'Enter',
            'shifted': 'Enter',
        },
    ],
    [
        {
            'type': 'non-letter',
            'initial': 'Shift',
            'shifted': 'Shift',
        },
        {
            'type': 'letter',
            'initial': 'я',
            'shifted': 'Я',
        },
        {
            'type': 'letter',
            'initial': 'ч',
            'shifted': 'Ч',
        },
        {
            'type': 'letter',
            'initial': 'с',
            'shifted': 'С',
        },
        {
            'type': 'letter',
            'initial': 'м',
            'shifted': 'М',
        },
        {
            'type': 'letter',
            'initial': 'и',
            'shifted': 'И',
        },
        {
            'type': 'letter',
            'initial': 'т',
            'shifted': 'Т',
        },
        {
            'type': 'letter',
            'initial': 'ь',
            'shifted': 'Ь',
        },
        {
            'type': 'letter',
            'initial': 'б',
            'shifted': 'Б',
        },
        {
            'type': 'letter',
            'initial': 'ю',
            'shifted': 'Ю',
        },
        {
            'type': 'letter',
            'initial': '.',
            'shifted': ',',
        },
        {
            'type': 'non-letter',
            'initial': '↑',
            'shifted': '↑',
        },
        {
            'type': 'non-letter',
            'initial': 'Shift',
            'shifted': 'Shift',
        },
    ],
    [
        {
            'type': 'non-letter',
            'initial': 'Ctrl',
            'shifted': 'Ctrl',
        },
        {
            'type': 'non-letter',
            'initial': 'Win',
            'shifted': 'Win',
        },
        {
            'type': 'non-letter',
            'initial': 'Alt',
            'shifted': 'Alt',
        },
        {
            'type': 'letter',
            'initial': ' ',
            'shifted': ' ',
        },
        {
            'type': 'non-letter',
            'initial': 'Alt',
            'shifted': 'Alt',
        },
        {
            'type': 'non-letter',
            'initial': '←',
            'shifted': '←',
        },
        {
            'type': 'non-letter',
            'initial': '↓',
            'shifted': '↓',
        },
        {
            'type': 'non-letter',
            'initial': '→',
            'shifted': '→',
        },
        {
            'type': 'non-letter',
            'initial': 'Ctrl',
            'shifted': 'Ctrl',
        },
    ]
]

function createKeys(line, number) {
  line.forEach( elem => {
    let newEl = document.createElement("div");
    newEl.setAttribute("class", elem.type);
    newEl.setAttribute("id", isShifted ? elem.shifted : elem.initial);
    let elText = document.createElement("p");
    elText.setAttribute("class", "letter-text");
    elText.innerHTML = isShifted ? elem.shifted : elem.initial;

    if (elem.type.includes("non-letter")) {
      newEl.addEventListener("click", doCommand);
    } else newEl.addEventListener("click", typeALetter);

    switch(true) {
      case (elText.innerHTML.toLowerCase().includes("shift") 
              || elText.innerHTML.includes("Enter")):
              newEl.classList.add("shift");
              break;

      case (elText.innerHTML.includes("Del") 
              || elText.innerHTML.includes("Tab")):
              newEl.classList.add("tab");
              break;
          
      case (elText.innerHTML.includes("↑")
            || elText.innerHTML.includes("←")
            || elText.innerHTML.includes("→")
            || elText.innerHTML.includes("↓")):
              newEl.classList.add("arrow");
              break;

      case (elText.innerHTML.includes(" ")):
            newEl.classList.add("spb");
            elText.innerHTML = " ";
            break;
    }

    newEl.appendChild(elText);
    document.querySelector(`.line${number}`).appendChild(newEl);
  } )
}

function mapKeys(currentLanguage) {
  let currentKeysSet = currentLanguage === "eng" ? ENGLINES : RULINES;
  console.log(".............",currentKeysSet)
  let keyboardContainer = document.querySelector(".keyboard");
  if (keyboardContainer) {
    // keyboardContainer.innerHTML = "";
    // while (keyboardContainer.firstChild) {
    //   keyboardContainer.removeChild(keyboardContainer.firstElementChild);
    // }
    document.querySelector(".main").removeChild(keyboardContainer);

    document.querySelector(".screen").after(createKeyboardWithLines());

  }
  currentKeysSet.forEach( (elem, index) => createKeys(elem, index+1));
}

mapKeys(currentLanguage);

// ENGLINES.forEach( (elem, index) => createKeys(elem, index+1));
// RULINES.forEach( (elem, index) => createKeys(elem, index+1));

function typeALetter(event) {
  if (event.target.classList.contains("letter")) {
      displayedText += event.target.id;
  } else {
      displayedText += event.target.parentNode.id;
  }
  document.querySelector(".screen").value = displayedText;
}

function doCommand(event) {

  //tab button
  if (event.target.classList.contains("tab") 
      || event.target.parentNode.classList.contains("tab")) {
        displayedText += '    ';
    }

  //capslock button
  if (event.target.id === "CapsLock" 
      || event.target.parentNode.id === "CapsLock") {
        isShifted =!isShifted;
        mapKeys(currentLanguage);
    }

  if (event.target.classList.contains("non-letter")) {
    if (event.target.classList.contains("arrow")) {
      displayedText += event.target.id;
    }
    
  } else {
    if (event.target.parentNode.classList.contains("arrow")) {
      displayedText += event.target.innerHTML;
    }
  }
document.querySelector(".screen").value = displayedText;
}
