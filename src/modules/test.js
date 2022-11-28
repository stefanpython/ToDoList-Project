 // function renderTaskList(selectedList) {

    //         selectedList.tasks.forEach(task => {
    //             const taskDiv = document.createElement('div')
    //             taskDiv.classList.add('task-button')
    //             taskDiv.innerHTML = `
    //             <div class="leftSide-task">
    //                             <input type="checkbox" id="task-1" data-check-box>
    //                             <p class="task-content">${task.name}</p>
    //                             <input type="text" class="input-task-name" data-input-task-name>
    //                         </div>

    //                         <div class="rightSide-task">
    //                             <p class="due-date" id="due-date"></p>
    //                             <input type="date" class="input-due-date" data-input-due-date>
    //                             <i class="fa fa-times xTask" aria-hidden="true"></i>
    //                         </div>
    //             `;
    //             tasksContainer.appendChild(taskDiv)
    //          })
       
        
    // }


    // DELETE BUTTON
    // Make selectedListId equal to each individual listing id
//     listContainer.addEventListener('click', e => {
//       if (e.target.tagName.toLowerCase() === 'li') {
//           selectedListId = e.target.dataset.listId;
//           save();
//           render();
//       }

//       // Delete specific project when the x in it`s container is pressed
//       if (e.target.tagName.toLowerCase() === 'i') {
//           // console.log(e.target.dataset.deleteListButton)
//           lists = lists.filter(list => list.id !== e.target.dataset.deleteListButton);
//           selectedListId = null;
//           save();
//           render();
//       }
//   })



// function renderTaskList () {
    // // Display on html checked box checked after refreshing page
                // if (task.complete === true) {
                //     const checkBox = document.getElementById(task.id)
                //     taskDiv.innerHTML = `
                //     <div class="leftSide-task">
                //             <input class="checkIt" type="checkbox" checked=true id=${task.id} data-check-box>
                //             <p class="task-content">${task.name}</p>
                            
                //         </div>

                //         <div class="rightSide-task">
                //             <p class="due-date" id="due-date"></p>
                //             <input type="date" class="input-due-date" data-input-due-date>
                //             <i class="fa fa-times xTask" data-delete-task-list="${task.id}"  aria-hidden="true"></i>
                //         </div>
                //     `;
                    
                // } else {
                //     taskDiv.innerHTML = `
                //     <div class="leftSide-task">
                //             <input class="checkIt" type="checkbox" id=${task.id} data-check-box>
                //             <p class="task-content">${task.name}</p>
                            
                //         </div>
    
                //         <div class="rightSide-task">
                //             <p class="due-date" id="due-date"></p>
                //             <input type="date" class="input-due-date" data-input-due-date>
                //             <i class="fa fa-times xTask" data-delete-task-list="${task.id}" aria-hidden="true"></i>
                //         </div>
                //     `;
                // }
// }


// if (task.complete === true) {
//     const dualContainer = document.createElement('div')
//     dualContainer.setAttribute('id', 'task-button')
    
//     const leftDiv = document.createElement('div')
//     leftDiv.classList.add('leftSide-task')
//     const inputLeft = document.createElement('input')
//     inputLeft.classList.add('checkIt')
//     inputLeft.setAttribute('type', 'checkbox')
//     inputLeft.setAttribute('id', task.id)
//     inputLeft.setAttribute('checked', true)
//     const leftP = document.createElement('p')
//     leftP.classList.add('task-content')
//     leftP.innerText = `${task.name}`
    
//     leftDiv.append(inputLeft)
//     leftDiv.appendChild(leftP)

//     const rightDiv = document.createElement('div')
//     rightDiv.classList.add('rightSide-task')
//     const rightP = document.createElement('p')
//     rightP.classList.add('due-date')
//     const inputRight = document.createElement('input')
//     inputRight.classList.add('input-due-date')
//     inputRight.setAttribute('type', 'date')
//     const xButton = document.createElement('i')
//     xButton.setAttribute('data-delete-task-list', '')
//     xButton.classList.add('fa', 'fa-times', 'xTask')
//     xButton.setAttribute('id', task.id)
    
//     rightDiv.append(rightP)
//     rightDiv.appendChild(inputRight)
//     rightDiv.appendChild(xButton)

//     taskDiv.append(leftDiv)
//     taskDiv.append(rightDiv)

//     } else {

//     const dualContainer = document.createElement('div')
//     dualContainer.setAttribute('id', 'task-button')
    
//     const leftDiv = document.createElement('div')
//     leftDiv.classList.add('leftSide-task')
//     const inputLeft = document.createElement('input')
//     inputLeft.classList.add('checkIt')
//     inputLeft.setAttribute('type', 'checkbox')
//     inputLeft.setAttribute('id', task.id)
    
//     const leftP = document.createElement('p')
//     leftP.classList.add('task-content')
//     leftP.innerText = `${task.name}`
    
//     leftDiv.append(inputLeft)
//     leftDiv.appendChild(leftP)

//     const rightDiv = document.createElement('div')
//     rightDiv.classList.add('rightSide-task')
//     const rightP = document.createElement('p')
//     rightP.classList.add('due-date')
//     const inputRight = document.createElement('input')
//     inputRight.classList.add('input-due-date')
//     inputRight.setAttribute('type', 'date')
//     const xButton = document.createElement('i')
//     xButton.setAttribute('data-delete-task-list', '')
//     xButton.classList.add('fa', 'fa-times', 'xTask')
    
//     rightDiv.append(rightP)
//     rightDiv.appendChild(inputRight)
//     rightDiv.appendChild(xButton)

//     taskDiv.append(leftDiv)
//     taskDiv.append(rightDiv)
//     }
    
//     tasksContainer.appendChild(taskDiv)