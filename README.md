# 📝 My Visually Stunning To-Do List Application

Welcome to a modern and intuitive To-Do List application built with React! This project focuses on a clean, eye-catching design while providing all the essential task management functionalities.

---

## ✨ Features

* **Dynamic Task Management:**
    * **Add Tasks:** Quickly add new tasks with input validation.
    * **Mark Complete:** Easily toggle tasks as completed or active.
    * **Remove Tasks:** Delete unwanted tasks from your list.
* **Persistent Storage:** Your tasks are saved automatically using **Local Storage**, so they'll be there even after you close and reopen your browser.
* **Advanced Organization:**
    * **Filtering:** View all tasks, only active tasks, or only completed tasks.
    * **Sorting:** Organize your tasks by the date they were added or alphabetically.
* **Beautiful UI/UX:**
    * **Modern Design:** Clean, intuitive, and visually appealing layout.
    * **Vibrant Color Palette:** Thoughtfully selected colors for a harmonious look.
    * **Elegant Typography:** Uses the 'Rubik' font for excellent readability.
    * **Dynamic Background:** A subtle, animated gradient background for a lively feel.
    * **Responsive:** Adapts seamlessly to different screen sizes, from desktop to mobile.

---

## 🚀 Getting Started

Follow these steps to get the To-Do List application up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and `npm` (Node Package Manager) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/priyam-343/to_do_list.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd to_do_list
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 💻 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.
It bundles React in production mode and optimizes the build for the best performance. Your app is ready to be deployed!

---

## ✅ Brief Testing Guidance

Once the application is running (using `npm start`), perform the following checks to ensure everything works as expected:

1.  **Task Addition:**
    * Type a task (e.g., "Buy groceries") into the input and click "Add Task."
    * **_Verify:_** The task appears in the list.
    * **_Negative Test:_** Try adding an empty task or a task with less than 3 characters.
    * **_Verify:_** Appropriate error messages appear.

2.  **Task Completion/Incompletion:**
    * Click the **checkbox** next to any task.
    * **_Verify:_** The task text gets a line-through, and its styling changes to indicate completion.
    * Click the checkbox again.
    * **_Verify:_** The line-through is removed, and the task reverts to an active state.

3.  **Task Removal:**
    * Click the **"Remove" button** next to any task.
    * **_Verify:_** The task instantly disappears from the list.

4.  **Data Persistence (Local Storage):**
    * Add a few tasks, mark some as complete, and remove others.
    * **Refresh your browser page** (`Ctrl/Cmd + R`).
    * **_Verify:_** All tasks and their statuses are retained exactly as you left them.

5.  **Filtering:**
    * Ensure you have a mix of active and completed tasks.
    * Use the **"Filter" dropdown** to select "Active Tasks," "Completed Tasks," and "All Tasks."
    * **_Verify:_** The list updates correctly to show only the selected category of tasks.

6.  **Sorting:**
    * Add tasks in a mixed order (e.g., "Zebra", then "Apple", then "Banana").
    * Use the **"Sort by" dropdown** to select "Sort Alphabetically."
    * **_Verify:_** Tasks are reordered alphabetically.
    * Select "Sort by Added Date."
    * **_Verify:_** Tasks are reordered by their creation time (newest first).

7.  **Visuals & Responsiveness:**
    * Observe the **animated background** and overall design.
    * **_Verify:_** The UI looks visually appealing and professional.
    * **Resize your browser window** to a smaller size (like a mobile device).
    * **_Verify:_** The layout adjusts gracefully, and elements remain well-aligned.

---

## 📚 Learn More

You can learn more about React in the official [React documentation](https://react.dev/).
This project was initially set up using [Create React App](https://create-react-app.dev/).
