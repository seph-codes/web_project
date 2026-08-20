// hello.js (or hello.ts)

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

const greeting = `${green}${bold}👋 Hello, World! Welcome to Bun.${reset}\n${magenta}⚡ Shocking fast JavaScript runtime.${reset}\n`;

// An asynchronous typewriter effect leveraging modern async/await
async function typeWriter(text) {
  const encoder = new TextEncoder();
  
  for (let i = 0; i < text.length; i++) {
    // Write directly to Bun's standard output stream
    await Bun.write(Bun.stdout, encoder.encode(text.charAt(i)));
    await Bun.sleep(20); // Bun's native lightning-fast sleep function
  }
  console.log(); 
}

// Run the animation
console.clear();
console.log(asciiArt);
await typeWriter(greeting); // Bun supports top-level await out of the box!