import { format } from "date-fns"
import { hr } from "date-fns/locale";

export function projectLogic() {
    
    
    const listContainer = document.querySelector('[data-lists]')
    const newListForm = document.querySelector('[data-new-list-form]');
    const newListInput = document.querySelector('[data-new-list-input]');

    // Tasks side querySeletors
    const listDisplayContainer = document.querySelector('[data-list-display-container]');
    const listTitleElement = document.querySelector('[data-list-title]');
    const listCountElement = document.querySelector('[data-list-count]');
    const tasksContainer = document.querySelector('[data-tasks]');
    tasksContainer.classList.add('task-list')

    const newTaskFrom = document.querySelector('[data-new-task-form]');
    const newTaskInput = document.querySelector('[data-new-task-input]');
    const newTaskDate = document.querySelector('[data-input-due-date]')

    // Home div container selectors
    const homeContainer = document.querySelector('.home-links')
    const rightScreenContainer = document.querySelector('.task-list')
    const hrLine = document.getElementById('hrLine')

     // Retrieve list of objects from localStorage or empty list if there is none
     const LOCAL_STORAGE_LIST_KEY = 'task.lists';
     const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
     let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
     let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
     

    const addTaskBtn = document.querySelector('.button-add-task')

    // Add event listener to home list container
    homeContainer.addEventListener('click', e => {
        
        // All Tasks button
        if (e.target.classList.contains('allTasks')) {
            clearElement(rightScreenContainer)
            renderAllTasks()
            addTaskBtn.style.display = 'none'
            newTaskFrom.style.display = 'none'
            hrLine.style.display = 'none'
        }

        // Today button
        if (e.target.classList.contains('todayTasks')) {
            clearElement(rightScreenContainer)
            renderAllTodayTasks()
            addTaskBtn.style.display = 'none'
            newTaskFrom.style.display = 'none'
            hrLine.style.display = 'none'
        }
    })

    // Render today tasks
    function renderTodayTasks(selectedList) {
        selectedList.tasks.forEach(task => {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task-button')

        const todayDate = format(new Date(Date.now()), 'MM/dd/yyyy')

        // Display on html checked box checked after refreshing page
        if (task.date === todayDate) {
            
            taskDiv.innerHTML = `
            <div class="leftSide-task">
                <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                    <p class="task-content">${task.name}</p>
                    <input type="text" class="input-task-name" data-input-task-name>
                </div>

                <div class="rightSide-task">
                    <p class="due-date" id="due-date">Due date: ${task.date}</p>
                    <i class="fa fa-times xToday" data-delete-task-list=${task.id} aria-hidden="true"></i>
                </div>
            `;  
        } else {
            taskDiv.classList.remove('task-button')
        } 

        tasksContainer.appendChild(taskDiv)
     })
    }


    function renderAllTodayTasks() {
        
        const allTasksTitle = document.createElement('h1')
        allTasksTitle.innerText = 'Today'
        rightScreenContainer.append(allTasksTitle)

        const lineHr = document.createElement('hr')
        lineHr.style.width = '100%'
        rightScreenContainer.appendChild(lineHr)
        
        
        document.querySelector('.remaining-tasks').innerText = ''
        document.querySelector('.task-count').innerText = ''
        listTitleElement.innerText = ''
        // addTaskBtn.innerHTML = ''
        
        lists.forEach(list => {
            renderTodayTasks(list)
        })
    }



    // Function to render all tasks
    function renderAllTasks() {
        
        const allTasksTitle = document.createElement('h1')
        allTasksTitle.innerText = 'All Tasks'
        rightScreenContainer.append(allTasksTitle)

        const lineHr = document.createElement('hr')
        lineHr.style.width = '100%'
        rightScreenContainer.appendChild(lineHr)
        
        
        document.querySelector('.remaining-tasks').innerText = ''
        document.querySelector('.task-count').innerText = ''
        listTitleElement.innerText = ''
        // addTaskBtn.innerHTML = ''
        
        lists.forEach(list => {
            renderHomeTasks(list)
        })
    }


    function renderHomeTasks(selectedList) {
        selectedList.tasks.forEach(task => {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task-button')

        // Display on html checked box checked after refreshing page
        if (task.complete === true) {
            const checkBox = document.getElementById(task.id)
            taskDiv.innerHTML = `
            <div class="leftSide-task">
                <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                    <p class="task-content">${task.name}</p>
                    <input type="text" class="input-task-name" data-input-task-name>
                </div>

                <div class="rightSide-task">
                    <p class="due-date" id="due-date">Due date: ${task.date}</p>
                    <i class="fa fa-times xHome" data-delete-task-list=${task.id} aria-hidden="true"></i>
                </div>
            `;
            
        } else {
            taskDiv.innerHTML = `
            <div class="leftSide-task">
                    <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                    <p class="task-content">${task.name}</p>
                    <input type="text" class="input-task-name" data-input-task-name>
                </div>

                <div class="rightSide-task">
                    <p class="due-date" id="due-date">Due date: ${task.date}</p> 
                    <i class="fa fa-times xHome" data-delete-task-list=${task.id} aria-hidden="true"></i>
                </div>
            `;
        }

        tasksContainer.appendChild(taskDiv)
     })
}


    // Make selectedListId equal to each individual listing id
    listContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {
            selectedListId = e.target.dataset.listId;
            document.querySelector('.remaining-tasks').innerText = 'Remaining Tasks:'
            addTaskBtn.style.display = 'block'
            hrLine.style.display = 'none'
            save();
            render();
        }

        // Delete specific project when the x in it`s container is pressed
        if (e.target.tagName.toLowerCase() === 'i') {
            lists = lists.filter(list => list.id !== e.target.dataset.deleteListButton);
            selectedListId = null;
            clearElement(rightScreenContainer)
            save();
            render();
            document.querySelector('.remaining-tasks').innerText = ''
            addTaskBtn.style.display = 'none'    
            listTitleElement.innerText = ''      
        }
        })

    tasksContainer.addEventListener('click', e => {
        if (e.target.classList.contains('checkIt')) {
            const selectedList = lists.find(list => list.id === selectedListId)
            const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
            selectedTask.complete = e.target.checked
            save()
            renderTaskCount(selectedList)
            
        }

        // Task delete button
        if (e.target.classList.contains('xTask')) {
            const selectedList = lists.find(list => list.id === selectedListId)
            selectedList.tasks = selectedList.tasks.filter(task => task.id !== e.target.dataset.deleteTaskList)
            save()
            render()
        }

        // Add and display date on each task
        if (e.target.classList.contains('input-due-date')) {
            const pDate = document.querySelector('.due-date')
            const inputDate = document.querySelector('.input-due-date')
            console.log(inputDate.value)
            pDate.innerText = inputDate.value
        }


        // Home All Tasks Delete
        if (e.target.classList.contains('xHome')) {
        const selectedList = lists.find(list => list.id === selectedListId)
        selectedList.tasks = selectedList.tasks.filter(task => task.id !== e.target.dataset.deleteTaskList)

        const notSelectedList = lists.find(list => list.id !== selectedListId)
        notSelectedList.tasks = notSelectedList.tasks.filter(task => task.id !== e.target.dataset.deleteTaskList)
        save()
        clearElement(tasksContainer)
        renderAllTasks()     
        }


        // Today Tasks Delete 
        if (e.target.classList.contains('xToday')) {
            const selectedList = lists.find(list => list.id === selectedListId)
            selectedList.tasks = selectedList.tasks.filter(task => task.id !== e.target.dataset.deleteTaskList)
    
            const notSelectedList = lists.find(list => list.id !== selectedListId)
            notSelectedList.tasks = notSelectedList.tasks.filter(task => task.id !== e.target.dataset.deleteTaskList)
            save()
            clearElement(tasksContainer)
            renderAllTodayTasks()    
            }
    })

    //PROJECT FORM - Extract user input, create a list object and render it to the page container
    newListForm.addEventListener('submit', e => {
        e.preventDefault()
        const listName = newListInput.value;
        if (listName == null || listName === '') return
        const list = createList(listName);
        newListInput.value = null;
        lists.push(list);
        save();
        render();
    })

    // TASK FORM 
    newTaskFrom.addEventListener('submit', e => {
        e.preventDefault()
        const taskName = newTaskInput.value;
        const dueDate = format(new Date(newTaskDate.value), 'MM/dd/yyyy')
        if (taskName == null || taskName === '') return
        
        const task = createTask(taskName, dueDate)
        newTaskInput.value = null;
        const selectedList = lists.find(list => list.id === selectedListId)
        selectedList.tasks.push(task);
        save()
        render()
    })

    // Function to create a list object with an ID, name, and tasks
    function createList(name) {
        return { id: Math.floor(Math.random() * 1000000).toString(), name: name, tasks: []}
        // Date.now().toString() - cool way to generate random number based on current time
    }

    function createTask(name, date) {
        return { id: Math.floor(Math.random() * 100000).toString(), name: name, complete: false, date: date }
    }


    // Function to save list objects to localStorage && save selectedListId
    function save() {
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
    }


    function render() {
        clearElement(listContainer)
        renderList()

         // Extract list details of the currently selected list
         const selectedList = lists.find(list => list.id === selectedListId)

         if ( selectedListId == null) {
             listDisplayContainer.style.display = 'none'
         } else {
             listDisplayContainer.style.display = ''
             listTitleElement.innerText = selectedList.name
             renderTaskCount(selectedList)
             clearElement(tasksContainer)
             renderTasks(selectedList)
         }
    }

    function renderTasks(selectedList) {
                selectedList.tasks.forEach(task => {
                const taskDiv = document.createElement('div')
                taskDiv.classList.add('task-button')

                // Display on html checked box checked after refreshing page
                if (task.complete === true) {
                    const checkBox = document.getElementById(task.id)
                    taskDiv.innerHTML = `
                    <div class="leftSide-task">
                            <input class="checkIt" type="checkbox" checked=true id=${task.id} data-check-box>
                            <p class="task-content">${task.name}</p>
                            <input type="text" class="input-task-name" data-input-task-name>
                        </div>

                        <div class="rightSide-task">
                            <p class="due-date" id="due-date">| Due date: ${task.date}</p>
                            <i class="fa fa-times xTask" data-delete-task-list=${task.id} aria-hidden="true"></i>
                        </div>
                    `;
                    
                } else {
                    taskDiv.innerHTML = `
                    <div class="leftSide-task">
                            <input class="checkIt" type="checkbox" id=${task.id} data-check-box>
                            <p class="task-content">${task.name}</p>
                            <input type="text" class="input-task-name" data-input-task-name>
                        </div>
    
                        <div class="rightSide-task">
                            <p class="due-date" id="due-date">| Due date: ${task.date}</p> 
                            <i class="fa fa-times xTask" data-delete-task-list=${task.id} aria-hidden="true"></i>
                        </div>
                    `;
                }

                
                
                tasksContainer.appendChild(taskDiv)
             })
    }

    function renderTaskCount(selectedList) {
        const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
        listCountElement.innerText = incompleteTaskCount
    }

    function renderList() {
        lists.forEach(list => {

            const listElement = document.createElement('li'); // Create list element
            const delButton = document.createElement('i'); // Create X (delete) button on each list elem

            delButton.classList.add('fa', 'fa-times', 'xProject'); // Add class to each delete button
            delButton.setAttribute('data-delete-list-button', list.id); // Set data attribute on each del btn

            listElement.dataset.listId = list.id; // Set data-id == random generated id
            listElement.classList.add('button-project');
            listElement.innerHTML = `<i class="fa fa-tasks" aria-hidden="true"></i>${list.name}`
            if (list.id === selectedListId) {
                listElement.classList.add('active-list');
            }

            listElement.appendChild(delButton);
            listContainer.appendChild(listElement);

        });
    }

    // Clear div container
    function clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }



    render();
}
