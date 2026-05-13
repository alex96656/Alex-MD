// Alex-MD Command Handler
// This file contains all bot commands and their handlers

export const commands = {
  
  // ===== GENERAL COMMANDS =====
  ping: {
    name: 'ping',
    description: 'Check if bot is online',
    category: 'general',
    handler: async (sock, sender, args) => {
      await sock.sendMessage(sender, { text: '🏓 Pong! Bot is active!' })
    }
  },

  owner: {
    name: 'owner',
    description: 'Show owner information',
    category: 'general',
    handler: async (sock, sender, args) => {
      const owner = "〖ᴹᴿ•ᴀʟᴇ᥊᭄𓋆 ⁰⁰³"
      await sock.sendMessage(sender, { 
        text: `👤 Owner: ${owner}\n\n🤖 Bot: Alex-MD\n✨ Status: Online` 
      })
    }
  },

  info: {
    name: 'info',
    description: 'Bot information',
    category: 'general',
    handler: async (sock, sender, args) => {
      const info = `
╔════════════════════════════════╗
║        Alex-MD BOT INFO        ║
╠════════════════════════════════╣
║ 🤖 Bot Name: Alex-MD
║ 👤 Owner: 〖ᴹᴿ•ᴀʟᴇ᥊᭄𓋆 ⁰⁰³
║ 📱 Platform: WhatsApp
║ 🔧 Framework: Baileys
║ 💻 Language: JavaScript
║ ⚡ Status: Online
║ 📅 Version: 1.0.0
╚════════════════════════════════╝`
      await sock.sendMessage(sender, { text: info })
    }
  },

  // ===== GAME COMMANDS =====
  dice: {
    name: 'dice',
    description: 'Roll a dice',
    category: 'games',
    handler: async (sock, sender, args) => {
      const result = Math.floor(Math.random() * 6) + 1
      const emojis = ['', '✨', '⭐', '🌟', '💫', '⚡', '🔥']
      await sock.sendMessage(sender, { 
        text: `🎲 You rolled a: ${result}\n\n${emojis[result].repeat(result)}` 
      })
    }
  },

  coin: {
    name: 'coin',
    description: 'Flip a coin',
    category: 'games',
    handler: async (sock, sender, args) => {
      const result = Math.random() < 0.5 ? 'Heads' : 'Tails'
      await sock.sendMessage(sender, { 
        text: `🪙 Coin Flip Result: ${result}` 
      })
    }
  },

  rps: {
    name: 'rps',
    description: 'Rock Paper Scissors game',
    category: 'games',
    handler: async (sock, sender, args) => {
      const choices = ['rock', 'paper', 'scissors']
      const userChoice = args[0]?.toLowerCase()
      
      if (!userChoice || !choices.includes(userChoice)) {
        await sock.sendMessage(sender, { 
          text: '❌ Usage: .rps <rock|paper|scissors>' 
        })
        return
      }

      const botChoice = choices[Math.floor(Math.random() * choices.length)]
      const choiceEmojis = { rock: '🪨', paper: '📄', scissors: '✂️' }
      
      let result = 'Draw!'
      if ((userChoice === 'rock' && botChoice === 'scissors') ||
          (userChoice === 'paper' && botChoice === 'rock') ||
          (userChoice === 'scissors' && botChoice === 'paper')) {
        result = 'You won! 🎉'
      } else if (userChoice === botChoice) {
        result = 'Draw!'
      } else {
        result = 'I won! 😎'
      }
      
      await sock.sendMessage(sender, { 
        text: `🎮 Rock Paper Scissors\n\nYou: ${userChoice} ${choiceEmojis[userChoice]}\nBot: ${botChoice} ${choiceEmojis[botChoice]}\n\n${result}` 
      })
    }
  },

  // ===== MUSIC COMMANDS =====
  music: {
    name: 'music',
    description: 'Search for music',
    category: 'music',
    handler: async (sock, sender, args) => {
      if (!args.length) {
        await sock.sendMessage(sender, { 
          text: '🎵 Usage: .music <song name>\n\nExample: .music Blinding Lights' 
        })
        return
      }
      const songName = args.join(' ')
      await sock.sendMessage(sender, { 
        text: `🎵 Searching for: ${songName}...\n\n⏳ Please wait...` 
      })
      // Music search API would be integrated here
    }
  },

  play: {
    name: 'play',
    description: 'Play a song',
    category: 'music',
    handler: async (sock, sender, args) => {
      if (!args.length) {
        await sock.sendMessage(sender, { 
          text: '🎵 Usage: .play <song name>' 
        })
        return
      }
      const songName = args.join(' ')
      await sock.sendMessage(sender, { 
        text: `▶️ Now playing: ${songName}\n\n⏳ Processing...` 
      })
    }
  },

  lyrics: {
    name: 'lyrics',
    description: 'Get song lyrics',
    category: 'music',
    handler: async (sock, sender, args) => {
      if (!args.length) {
        await sock.sendMessage(sender, { 
          text: '📝 Usage: .lyrics <song name>' 
        })
        return
      }
      const songName = args.join(' ')
      await sock.sendMessage(sender, { 
        text: `🔍 Searching lyrics for: ${songName}...\n\n⏳ Please wait...` 
      })
    }
  },

  // ===== MEDIA COMMANDS =====
  vv: {
    name: 'vv',
    description: 'View-once message',
    category: 'media',
    handler: async (sock, sender, args) => {
      await sock.sendMessage(sender, { 
        text: '👁️ View-once message activated!\n\nReply to a message with .vv to send it as view-once' 
      })
    }
  },

  sticker: {
    name: 'sticker',
    description: 'Convert image to sticker',
    category: 'media',
    handler: async (sock, sender, args) => {
      await sock.sendMessage(sender, { 
        text: '🖼️ Sticker Converter\n\nReply to an image with .sticker to convert it to a sticker' 
      })
    }
  },

  image: {
    name: 'image',
    description: 'Convert sticker to image',
    category: 'media',
    handler: async (sock, sender, args) => {
      await sock.sendMessage(sender, { 
        text: '🖼️ Sticker to Image Converter\n\nReply to a sticker with .image to convert it to image' 
      })
    }
  },

  // ===== UTILITY COMMANDS =====
  time: {
    name: 'time',
    description: 'Current time',
    category: 'utility',
    handler: async (sock, sender, args) => {
      const time = new Date().toLocaleTimeString()
      await sock.sendMessage(sender, { 
        text: `🕐 Current Time: ${time}` 
      })
    }
  },

  date: {
    name: 'date',
    description: 'Current date',
    category: 'utility',
    handler: async (sock, sender, args) => {
      const date = new Date().toLocaleDateString()
      await sock.sendMessage(sender, { 
        text: `📅 Current Date: ${date}` 
      })
    }
  },

  calc: {
    name: 'calc',
    description: 'Simple calculator',
    category: 'utility',
    handler: async (sock, sender, args) => {
      if (!args.length) {
        await sock.sendMessage(sender, { 
          text: '🧮 Usage: .calc <expression>\n\nExample: .calc 5+5' 
        })
        return
      }
      try {
        const result = eval(args.join(''))
        await sock.sendMessage(sender, { 
          text: `🧮 Result: ${result}` 
        })
      } catch (err) {
        await sock.sendMessage(sender, { 
          text: '❌ Invalid calculation' 
        })
      }
    }
  },

  quote: {
    name: 'quote',
    description: 'Random quote',
    category: 'utility',
    handler: async (sock, sender, args) => {
      const quotes = [
        '💭 The only way to do great work is to love what you do. - Steve Jobs',
        '💭 Innovation distinguishes between a leader and a follower. - Steve Jobs',
        '💭 Life is what happens when you\'re busy making other plans. - John Lennon',
        '💭 The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
        '💭 It is during our darkest moments that we must focus to see the light. - Aristotle'
      ]
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      await sock.sendMessage(sender, { text: randomQuote })
    }
  }
}

export function getCommandHelp() {
  const help = `
╔════════════════════════════════╗
║      Alex-MD COMMAND HELP      ║
╠════════════════════════════════╣
║ 📌 GENERAL:
║ • .ping - Check status
║ • .owner - Show owner
║ • .info - Bot info
║
║ 🎮 GAMES:
║ • .dice - Roll dice
║ • .coin - Flip coin
║ • .rps - Rock Paper Scissors
║
║ 🎵 MUSIC:
║ • .music - Search music
║ • .play - Play song
║ • .lyrics - Get lyrics
║
║ 🖼️ MEDIA:
║ • .sticker - Image to sticker
║ • .vv - View-once
║ • .image - Sticker to image
║
║ 🔧 UTILITY:
║ • .time - Show time
║ • .date - Show date
║ • .calc - Calculator
║ • .quote - Random quote
╚════════════════════════════════╝`
  return help
}
