export function displayInputs() {

    function addTaskButton () {

        const addTask = document.querySelector('.button-add-task');
        const taskPopup = document.querySelector('.add-task-popup');
        addTask.addEventListener('click', () => {
            taskPopup.style.display = 'block';
        })
    
        const cancelPopup = document.querySelector('.button-cancel-task-popup');
        cancelPopup.addEventListener('click', () => {
            taskPopup.style.display = 'none';
        })
        
    }

    function addProjectButton () {

        const addBtn = document.getElementById('project-btn');
        const projectPopup = document.querySelector('.projectInputDiv');
        addBtn.addEventListener('click', () => {
            projectPopup.style.display = 'block';
        })

        const cancelProject = document.getElementById('project-button-cancel');
        cancelProject.addEventListener('click', () => {
            projectPopup.style.display = 'none';
        })
    }

    

    return { addTaskButton, addProjectButton }
    
}


