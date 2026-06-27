console.log("Space DMV App Loaded");

// Example: dynamic greeting
export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning, Captain.";
  if (hour < 18) return "Good afternoon, Captain.";
  return "Good evening, Captain.";
}
