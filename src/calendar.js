// Function to fetch calendar data.
// Note: Replace the URL or fetching logic with your actual Home Assistant API endpoint if needed.
export async function fetchCalendars() {
    try {
      const response = await fetch('/api/calendars');
      const data = await response.json();
      return data.calendars || [];
    } catch (error) {
      console.error("Error fetching calendars:", error);
      return [];
    }
  }
  
  // Function to render an event with an icon based on the event type.
  export function renderEvent(event) {
    // Define mappings for event summaries to icons.
    const eventIcons = {
      birthday: '🎂',
      meeting: '📅',
      appointment: '🩺'
      // Add more mappings as required.
    };
  
    // Use event summary as a key; default to a pin icon if not found.
    const typeKey = event.summary.toLowerCase();
    const icon = eventIcons[typeKey] || '📌';
  
    // Create a container for the event.
    const element = document.createElement('div');
    element.className = 'event';
    element.innerHTML = `<span class="icon">${icon}</span><span class="title">${event.summary}</span>`;
    return element;
  }
  