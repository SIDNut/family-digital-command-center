// Function to fetch to-do items.
// Replace the endpoint with your actual Home Assistant API endpoint or integration as needed.
export async function fetchTodoItems() {
    try {
      const response = await fetch('/api/todo');
      const data = await response.json();
      return data.todoItems || [];
    } catch (error) {
      console.error("Error fetching to-do items:", error);
      return [];
    }
  }
  
  // Function to render a single to-do item.
  export function renderTodoItem(item) {
    const element = document.createElement('div');
    element.className = 'todo-item';
    element.innerHTML = `<input type="checkbox" ${item.completed ? 'checked' : ''} />
                         <span>${item.content}</span>`;
    // Optionally, add event listeners to handle interactions and sync state.
    return element;
  }
  