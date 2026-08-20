// hello.js

// ANSI Escape Codes for text styling
const green = "\x1b[32m";
const cyan = "\x1b[36m";
const magenta = "\x1b[35m";
const bold = "\x1b[1m";
const reset = "\x1b[0m";

const asciiArt = `
${cyan}  _    _      _ _         
 | |  | |    | | |        
 | |__| | ___| | | ___    
 |  __  |/ _ \\ | |/ _ \\   
 | |  | |  __/ | | (_) |  
 |_|  |_|\\___|_|_|\\___/   
${reset}`;

const greeting = `${green}${bold}👋 Hello, World! Welcome to Node.js.${reset}\n${magenta}🚀 Let's build something awesome today.${reset}\n`;

// A simple function to simulate a typing effect in the terminal
function typeWriter(text, index = 0) {
  if (index < text.length) {
    process.stdout.write(text.charAt(index));
    setTimeout(() => typeWriter(text, index + 1), 20); // 20ms per character
  } else {
    console.log(); // Print a final newline
  }
}

// Run the animation
console.clear(); // Clears the terminal screen first for a clean look
console.log(asciiArt);
typeWriter(greeting);