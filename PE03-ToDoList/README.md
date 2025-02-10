# Input

Users type what they need to do in a box.  When they click "Add Task," the computer remembers what they typed.  Also, when the program starts, it checks if it saved a list of things to do before. If it did, it loads that list.

# Process

The program keeps track of the things to do using something called "useState."  When a user adds a new task, the program adds it to this list. The handleAddTask function does this.  The program uses something called useRef to keep track of the box where the user types. This makes it easy to get what the user typed.  If a user wants to delete a task, the handleDeleteTask function removes it from the list.  Whenever the list changes, the program updates what the user sees.  The program also uses something called useEffect. One useEffect makes sure the list is saved to the computer's storage so it remembers the tasks even if the user closes the program.  Another useEffect is used to load the saved tasks when the program starts. The ToDoTask component shows each task and the button to delete it.

# Output

The program shows the user a list of the things they need to do.  Each task has a button to delete it.  When the user adds or deletes tasks, the list changes right away.  The list is also saved so the user can see it again later.