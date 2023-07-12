//
window.addEventListener('DOMContentLoaded', function(){

    let elsForm = document.querySelectorAll('[data-js-form]'),
        elsTaches = document.querySelectorAll('[data-js-task-list]'),
        elsSortTask = document.querySelectorAll('[data-js-task]')

    for (let i = 0, l = elsForm.length; i < l; i++) {
        new Form (elsForm[i]);
    
    }
    
    for (let i = 0, l = elsTaches.length; i < l; i++) {
        new Task (elsTaches[i]);
        
    }
    for (let i = 0; i < elsSortTask.length; i++) {
        new SortTask(elsSortTask[i]);
        
    }
})