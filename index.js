const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
     state = {}
     showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)    }
  
    textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
        if (nextTextNodeId <=0) {
            return startGame()
        }
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
    }

const textNodes = [
    {
        id: 1,
        text:'GAME OVER\n\n WOULD YOU LIKE TO CONTINUE?',
        options: [
            {
                text: 'yes',
                nextText:5
            },
            {
                text: 'no',
                nextText:2
            }
        ]
    },
    {
        id:2,
        text: 'WOULD YOU LIKE TO CONTINUE?',
        options: [
            {
                text: 'yes',
                nextText:5
            },
            {
                text: 'no',
                nextText:3
            }
        ]
    },
    {
        id:3,
        text: 'CONTINUE?',
        options: [
            {
                text: 'yes',
                nextText:5
            },
            {
                text:'no',
                nextText:4
            }
        ]
    },
    {
        id:4,
        text: '｢(ﾟﾍﾟ)?',
        options: [
            {
                text: 'yes?',
                nextText:5
            }
        ]
    },
    {
        id:5,
        text: 'Your saved data is corrupted.\n\nPlease delete the saved data from your system.',
        options: [
            {
                text: 'yes',
                nextText:1
            },
            {
                text:'no',
                nextText:4
            }
        ]
    }
]

startGame()