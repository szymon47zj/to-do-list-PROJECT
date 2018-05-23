var tasks = [
	"zadanie 1",
	"zadanie 2",
];
var newTaskInput = document.querySelector('.new-task-container form');
var tasksContainer = document.querySelector('.tasks-container ul');

// on DOM load
document.addEventListener('DOMContentLoaded', function () {
	addTaskEvents();
	showTasks();
});

/* ========== prepare tasks list ========== */
function showTasks() {
	tasks.forEach(function (title) {
		addNewTask(title);
	});
};

function addNewTask(title) {
	var taskLi = document.createElement('li');
	taskLi.classList.add('single-task');
	taskLi.innerHTML = prepareTaskHTML(title);

	// toggle and delete tasks from the list
	var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
	var deleteBtn = taskLi.querySelector('.delete-task-btn');

	toggleCompleteBtn.addEventListener('click', function () {
		toggleTaskComplete(this);
	});

	deleteBtn.addEventListener('click', function () {
		deleteTask(this);
	});

	// add task to DOM
	tasksContainer.appendChild(taskLi);
}

function prepareTaskHTML(title) {
	return '<div class="input-group">' +
		'<span class="input-group-btn">' +
		'<button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>' +
		'</span>' +
		'<input type="text" class="form-control" placeholder="nazwa zadania..." value="' + title + ' ">' +
		'<span class="input-group-btn">' +
		'<button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>' +
		'</span>' +
		'</div>';
};


// toggle complete button
function toggleTaskComplete(task) {
	task.classList.toggle('btn-success');
};

// delete task button
function deleteTask(task) {
	var liToDelete = task.closest('li');
	task.closest('ul').removeChild(liToDelete);
};

/* ========== add new task to the list ========== */

function addTaskEvents() {

	// on submit
	newTaskInput.addEventListener('submit', function (e) {
		e.preventDefault();

		var title = this.querySelector('input').value; //this = element which caused event submit = newTaskInput

		// prevent adding empty tasks
		if (title) {
			addNewTask(title);
		}
	});
};
