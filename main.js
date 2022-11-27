(()=>{"use strict";function t(){return{addTaskButton:function(){const t=document.querySelector(".button-add-task"),e=document.querySelector(".add-task-popup");t.addEventListener("click",(()=>{e.style.display="block"})),document.querySelector(".button-cancel-task-popup").addEventListener("click",(()=>{e.style.display="none"}))},addProjectButton:function(){const t=document.getElementById("project-btn"),e=document.querySelector(".projectInputDiv");t.addEventListener("click",(()=>{e.style.display="block"})),document.getElementById("project-button-cancel").addEventListener("click",(()=>{e.style.display="none"}))}}}t().addTaskButton(),t().addProjectButton(),function(){const t=document.querySelector("[data-lists]"),e=document.querySelector("[data-new-list-form]"),a=document.querySelector("[data-new-list-input]"),n=document.querySelector("[data-list-display-container]"),d=document.querySelector("[data-list-title]"),s=document.querySelector("[data-list-count]"),i=document.querySelector("[data-tasks]"),c=document.querySelector("[data-new-task-form]"),l=document.querySelector("[data-new-task-input]"),o="task.lists",u="task.selectedListId";let r=JSON.parse(localStorage.getItem(o))||[],p=localStorage.getItem(u);function m(){localStorage.setItem(o,JSON.stringify(r)),localStorage.setItem(u,p)}function k(){y(t),r.forEach((e=>{const a=document.createElement("li"),n=document.createElement("i");n.classList.add("fa","fa-times","xProject"),n.setAttribute("data-delete-list-button",e.id),a.dataset.listId=e.id,a.classList.add("button-project"),a.innerHTML=`<i class="fa fa-tasks" aria-hidden="true"></i>${e.name}`,e.id===p&&a.classList.add("active-list"),a.appendChild(n),t.appendChild(a)}));const e=r.find((t=>t.id===p));null==p?n.style.display="none":(n.style.display="",d.innerText=e.name,f(e),y(i),function(t){t.tasks.forEach((t=>{const e=document.createElement("div");e.classList.add("task-button"),!0===t.complete?(document.getElementById(t.id),e.innerHTML=`\n                    <div class="leftSide-task">\n                            <input class="checkIt" type="checkbox" checked=true id=${t.id} data-check-box>\n                            <p class="task-content">${t.name}</p>\n                            <input type="text" class="input-task-name" data-input-task-name>\n                        </div>\n\n                        <div class="rightSide-task">\n                            <p class="due-date" id="due-date"></p>\n                            <input type="date" class="input-due-date" data-input-due-date>\n                            <i class="fa fa-times xTask" aria-hidden="true"></i>\n                        </div>\n                    `):e.innerHTML=`\n                    <div class="leftSide-task">\n                            <input class="checkIt" type="checkbox" id=${t.id} data-check-box>\n                            <p class="task-content">${t.name}</p>\n                            <input type="text" class="input-task-name" data-input-task-name>\n                        </div>\n    \n                        <div class="rightSide-task">\n                            <p class="due-date" id="due-date"></p>\n                            <input type="date" class="input-due-date" data-input-due-date>\n                            <i class="fa fa-times xTask" aria-hidden="true"></i>\n                        </div>\n                    `,i.appendChild(e)}))}(e))}function f(t){const e=t.tasks.filter((t=>!t.complete)).length;s.innerText=e}function y(t){for(;t.firstChild;)t.removeChild(t.firstChild)}t.addEventListener("click",(t=>{"li"===t.target.tagName.toLowerCase()&&(p=t.target.dataset.listId,m(),k()),"i"===t.target.tagName.toLowerCase()&&(r=r.filter((e=>e.id!==t.target.dataset.deleteListButton)),p=null,m(),k())})),i.addEventListener("click",(t=>{if("input"===t.target.tagName.toLowerCase()){const e=r.find((t=>t.id===p)),a=e.tasks.find((e=>e.id===t.target.id));a.complete=t.target.checked,m(),f(e),console.log(a.complete,t.target.checked)}})),e.addEventListener("submit",(t=>{t.preventDefault();const e=a.value;if(null==e||""===e)return;const n=(d=e,{id:Math.floor(1e6*Math.random()).toString(),name:d,tasks:[]});var d;a.value=null,r.push(n),m(),k()})),c.addEventListener("submit",(t=>{t.preventDefault();const e=l.value;if(null==e||""===e)return;const a=(n=e,{id:Math.floor(1e5*Math.random()).toString(),name:n,complete:!1});var n;l.value=null,r.find((t=>t.id===p)).tasks.push(a),m(),k()})),k()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLFVBQVUyRCxJQUNuQ0EsRUFBRVMsaUJBQ0YsTUFBTVEsRUFBVzdELEVBQWF1RCxNQUM5QixHQUFnQixNQUFaTSxHQUFpQyxLQUFiQSxFQUFpQixPQUN6QyxNQUFNNUIsR0FjVVAsRUFkUW1DLEVBZWpCLENBQUV2QyxHQUFJa0MsS0FBS0MsTUFBc0IsSUFBaEJELEtBQUtFLFVBQW1CQyxXQUFZakMsS0FBTUEsRUFBTVMsVUFBVSxJQUR0RixJQUFvQlQsRUFiaEIxQixFQUFhdUQsTUFBUSxLQUNBcEQsRUFBTTBCLE1BQUtkLEdBQVFBLEVBQUtPLEtBQU9kLElBQ3ZDd0IsTUFBTTRCLEtBQUszQixHQUN4QnhCLElBQ0FHLEdBQU8sSUFvSFhBLEdBQ0osQ0R6TEFrRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUlucHV0cygpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRhc2tCdXR0b24gKCkge1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWFkZC10YXNrJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1wb3B1cCcpO1xuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9KVxuICAgIFxuICAgICAgICBjb25zdCBjYW5jZWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2FuY2VsLXRhc2stcG9wdXAnKTtcbiAgICAgICAgY2FuY2VsUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdEJ1dHRvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnRuJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SW5wdXREaXYnKTtcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1idXR0b24tY2FuY2VsJyk7XG4gICAgICAgIGNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrQnV0dG9uLCBhZGRQcm9qZWN0QnV0dG9uIH1cbiAgICBcbn1cblxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5SW5wdXRzfSBmcm9tIFwiLi9tb2R1bGVzL1VJXCJcbmltcG9ydCB7IHByb2plY3RMb2dpYyB9IGZyb20gXCIuL21vZHVsZXMvYXBwXCJcblxuLy8gQWRkIGhpZGUgcHJvamVjdCBhbmQgdGFzayBmb3Jtc1xuZGlzcGxheUlucHV0cygpLmFkZFRhc2tCdXR0b24oKTtcbmRpc3BsYXlJbnB1dHMoKS5hZGRQcm9qZWN0QnV0dG9uKCk7XG5cbnByb2plY3RMb2dpYygpOyIsImV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TG9naWMoKSB7XG4gICAgXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpc3RzXScpXG4gICAgY29uc3QgbmV3TGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctbGlzdC1mb3JtXScpO1xuICAgIGNvbnN0IG5ld0xpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1saXN0LWlucHV0XScpO1xuXG4gICAgLy8gVGFza3Mgc2lkZSBxdWVyeVNlbGV0b3JzXG4gICAgY29uc3QgbGlzdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0LWRpc3BsYXktY29udGFpbmVyXScpO1xuICAgIGNvbnN0IGxpc3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0LXRpdGxlXScpO1xuICAgIGNvbnN0IGxpc3RDb3VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0LWNvdW50XScpO1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFza3NdJyk7XG5cbiAgICBjb25zdCBuZXdUYXNrRnJvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10YXNrLWZvcm1dJyk7XG4gICAgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRhc2staW5wdXRdJyk7XG5cblxuICAgICAvLyBSZXRyaWV2ZSBsaXN0IG9mIG9iamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2Ugb3IgZW1wdHkgbGlzdCBpZiB0aGVyZSBpcyBub25lXG4gICAgIGNvbnN0IExPQ0FMX1NUT1JBR0VfTElTVF9LRVkgPSAndGFzay5saXN0cyc7XG4gICAgIGNvbnN0IExPQ0FMX1NUT1JBR0VfU0VMRUNURURfTElTVF9JRF9LRVkgPSAndGFzay5zZWxlY3RlZExpc3RJZCc7XG4gICAgIGxldCBsaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSkpIHx8IFtdO1xuICAgICBsZXQgc2VsZWN0ZWRMaXN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZKTtcbiAgICAgXG4gICAgLy8gTWFrZSBzZWxlY3RlZExpc3RJZCBlcXVhbCB0byBlYWNoIGluZGl2aWR1YWwgbGlzdGluZyBpZFxuICAgIGxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykge1xuICAgICAgICAgICAgc2VsZWN0ZWRMaXN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICAgICAgICAgIHNhdmUoKTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAvLyBEZWxldGUgc3BlY2lmaWMgcHJvamVjdCB3aGVuIHRoZSB4IGluIGl0YHMgY29udGFpbmVyIGlzIHByZXNzZWRcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2knKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZUxpc3RCdXR0b24pXG4gICAgICAgICAgICBsaXN0cyA9IGxpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuaWQgIT09IGUudGFyZ2V0LmRhdGFzZXQuZGVsZXRlTGlzdEJ1dHRvbik7XG4gICAgICAgICAgICBzZWxlY3RlZExpc3RJZCA9IG51bGw7XG4gICAgICAgICAgICBzYXZlKCk7XG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgdGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZClcbiAgICAgICAgICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2F2ZSgpXG4gICAgICAgICAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRhc2suY29tcGxldGUsIGUudGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy9QUk9KRUNUIEZPUk0gLSBFeHRyYWN0IHVzZXIgaW5wdXQsIGNyZWF0ZSBhIGxpc3Qgb2JqZWN0IGFuZCByZW5kZXIgaXQgdG8gdGhlIHBhZ2UgY29udGFpbmVyXG4gICAgbmV3TGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IG5ld0xpc3RJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKGxpc3ROYW1lID09IG51bGwgfHwgbGlzdE5hbWUgPT09ICcnKSByZXR1cm5cbiAgICAgICAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QobGlzdE5hbWUpO1xuICAgICAgICBuZXdMaXN0SW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICBsaXN0cy5wdXNoKGxpc3QpO1xuICAgICAgICBzYXZlKCk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgIH0pXG5cbiAgICAvLyBUQVNLIEZPUk0gXG4gICAgbmV3VGFza0Zyb20uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKHRhc2tOYW1lID09IG51bGwgfHwgdGFza05hbWUgPT09ICcnKSByZXR1cm5cbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza05hbWUpXG4gICAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZClcbiAgICAgICAgc2VsZWN0ZWRMaXN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIHNhdmUoKVxuICAgICAgICByZW5kZXIoKVxuICAgIH0pXG5cbiAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYSBsaXN0IG9iamVjdCB3aXRoIGFuIElELCBuYW1lLCBhbmQgdGFza3NcbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHsgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApLnRvU3RyaW5nKCksIG5hbWU6IG5hbWUsIHRhc2tzOiBbXX1cbiAgICAgICAgLy8gRGF0ZS5ub3coKS50b1N0cmluZygpIC0gY29vbCB3YXkgdG8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlciBiYXNlZCBvbiBjdXJyZW50IHRpbWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHsgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkudG9TdHJpbmcoKSwgbmFtZTogbmFtZSwgY29tcGxldGU6IGZhbHNlIH1cbiAgICB9XG5cblxuICAgIC8vIEZ1bmN0aW9uIHRvIHNhdmUgbGlzdCBvYmplY3RzIHRvIGxvY2FsU3RvcmFnZSAmJiBzYXZlIHNlbGVjdGVkTGlzdElkXG4gICAgZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSwgSlNPTi5zdHJpbmdpZnkobGlzdHMpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSwgc2VsZWN0ZWRMaXN0SWQpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBjbGVhckVsZW1lbnQobGlzdENvbnRhaW5lcilcbiAgICAgICAgcmVuZGVyTGlzdCgpXG5cbiAgICAgICAgIC8vIEV4dHJhY3QgbGlzdCBkZXRhaWxzIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbGlzdFxuICAgICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKVxuXG4gICAgICAgICBpZiAoIHNlbGVjdGVkTGlzdElkID09IG51bGwpIHtcbiAgICAgICAgICAgICBsaXN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIGxpc3REaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgICAgICAgIGxpc3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRMaXN0Lm5hbWVcbiAgICAgICAgICAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KVxuICAgICAgICAgICAgIGNsZWFyRWxlbWVudCh0YXNrc0NvbnRhaW5lcilcbiAgICAgICAgICAgICByZW5kZXJUYXNrcyhzZWxlY3RlZExpc3QpXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMaXN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpXG5cbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IG9uIGh0bWwgY2hlY2tlZCBib3ggY2hlY2tlZCBhZnRlciByZWZyZXNoaW5nIHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFNpZGUtdGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNoZWNrSXRcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXRydWUgaWQ9JHt0YXNrLmlkfSBkYXRhLWNoZWNrLWJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stY29udGVudFwiPiR7dGFzay5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXRhc2stbmFtZVwiIGRhdGEtaW5wdXQtdGFzay1uYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFNpZGUtdGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZHVlLWRhdGVcIiBpZD1cImR1ZS1kYXRlXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiaW5wdXQtZHVlLWRhdGVcIiBkYXRhLWlucHV0LWR1ZS1kYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgeFRhc2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0U2lkZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2hlY2tJdFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPSR7dGFzay5pZH0gZGF0YS1jaGVjay1ib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj4ke3Rhc2submFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC10YXNrLW5hbWVcIiBkYXRhLWlucHV0LXRhc2stbmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0U2lkZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkdWUtZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJpbnB1dC1kdWUtZGF0ZVwiIGRhdGEtaW5wdXQtZHVlLWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyB4VGFza1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza0NvdW50KHNlbGV0ZWRMaXN0KSB7XG4gICAgICAgIGNvbnN0IGluY29tcGxldGVUYXNrQ291bnQgPSBzZWxldGVkTGlzdC50YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5jb21wbGV0ZSkubGVuZ3RoXG4gICAgICAgIGxpc3RDb3VudEVsZW1lbnQuaW5uZXJUZXh0ID0gaW5jb21wbGV0ZVRhc2tDb3VudFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckxpc3QoKSB7XG4gICAgICAgIGxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgLy8gQ3JlYXRlIGxpc3QgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpOyAvLyBDcmVhdGUgWCAoZGVsZXRlKSBidXR0b24gb24gZWFjaCBsaXN0IGVsZW1cblxuICAgICAgICAgICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhJywgJ2ZhLXRpbWVzJywgJ3hQcm9qZWN0Jyk7IC8vIEFkZCBjbGFzcyB0byBlYWNoIGRlbGV0ZSBidXR0b25cbiAgICAgICAgICAgIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGVsZXRlLWxpc3QtYnV0dG9uJywgbGlzdC5pZCk7IC8vIFNldCBkYXRhIGF0dHJpYnV0ZSBvbiBlYWNoIGRlbCBidG5cblxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuZGF0YXNldC5saXN0SWQgPSBsaXN0LmlkOyAvLyBTZXQgZGF0YS1pZCA9PSByYW5kb20gZ2VuZXJhdGVkIGlkXG4gICAgICAgICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidXR0b24tcHJvamVjdCcpO1xuICAgICAgICAgICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEgZmEtdGFza3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JHtsaXN0Lm5hbWV9YFxuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKSB7XG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKTtcbn1cbiJdLCJuYW1lcyI6WyJkaXNwbGF5SW5wdXRzIiwiYWRkVGFza0J1dHRvbiIsImFkZFRhc2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXNrUG9wdXAiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkUHJvamVjdEJ1dHRvbiIsImFkZEJ0biIsImdldEVsZW1lbnRCeUlkIiwicHJvamVjdFBvcHVwIiwibGlzdENvbnRhaW5lciIsIm5ld0xpc3RGb3JtIiwibmV3TGlzdElucHV0IiwibGlzdERpc3BsYXlDb250YWluZXIiLCJsaXN0VGl0bGVFbGVtZW50IiwibGlzdENvdW50RWxlbWVudCIsInRhc2tzQ29udGFpbmVyIiwibmV3VGFza0Zyb20iLCJuZXdUYXNrSW5wdXQiLCJMT0NBTF9TVE9SQUdFX0xJU1RfS0VZIiwiTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSIsImxpc3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlbGVjdGVkTGlzdElkIiwic2F2ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW5kZXIiLCJjbGVhckVsZW1lbnQiLCJmb3JFYWNoIiwibGlzdCIsImxpc3RFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImRlbEJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImlkIiwiZGF0YXNldCIsImxpc3RJZCIsImlubmVySFRNTCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkTGlzdCIsImZpbmQiLCJpbm5lclRleHQiLCJyZW5kZXJUYXNrQ291bnQiLCJ0YXNrcyIsInRhc2siLCJ0YXNrRGl2IiwiY29tcGxldGUiLCJyZW5kZXJUYXNrcyIsInNlbGV0ZWRMaXN0IiwiaW5jb21wbGV0ZVRhc2tDb3VudCIsImZpbHRlciIsImxlbmd0aCIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJlIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZGVsZXRlTGlzdEJ1dHRvbiIsInNlbGVjdGVkVGFzayIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJsaXN0TmFtZSIsInZhbHVlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJwdXNoIiwidGFza05hbWUiLCJwcm9qZWN0TG9naWMiXSwic291cmNlUm9vdCI6IiJ9