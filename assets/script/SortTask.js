class SortTask {
    /**
     * constructor
     * @param {*} element 
     */
    constructor(element) {
        this._element = element;
        this._BtnSortImportance = this._element.querySelector('[data-js-btn-sort-importance]');
        this._BtnSortAlphabet = this._element.querySelector('[data-js-btn-sort-alphabet]');

        this.sortTasksByImportance = this.sortTasksByImportance.bind(this);
        this.sortTasksByAlphabet = this.sortTasksByAlphabet.bind(this);

        this._elDetailsTask = document.querySelector('[data-js-details]');
        this._elBtnDetailsTask = document.querySelector('[data-js-chevron]');
    
        this.init();
    }
    /**
     * initialisation
     */
    init(){
        this._BtnSortImportance.addEventListener('click', this.sortTasksByImportance);
        this._BtnSortAlphabet.addEventListener('click', this.sortTasksByAlphabet);

        this._elBtnDetailsTask.addEventListener('click', this.showDetails);
    }

/**
 * la fonction de tri des tâches par importance
 */
sortTasksByImportance() {
    aTask.sort(function(a, b) {
        return a.importance - b.importance;
    });

    let displayTask = document.querySelector('[data-js-task-list]');
    displayTask.innerHTML = ''; 

    for (let i = 0; i < aTask.length; i++) {
        let arrTask = aTaches[i];
        let dom = `
                    <div class="tasks_list" data-js-task-item=${i+1}><p>Tache: ${arrTask.task}</p>
                    <span>Importance: ${arrTask.importance}</span>
                    <button data-js-detail-btn>Afficher le details</button>
                    <button data-js-delete-btn>Effacer</button></div>
                    `;
        displayTask.insertAdjacentHTML('beforeend', dom);
        new Task(displayTask.lastElementChild);
    }
}
/**
 * la fonction de trier les noms des tâches par ordre alphabétique
 */
sortTasksByAlphabet() {
    aTask.sort(function(a, b) {
        let taskA = a.task.toLowerCase(),
        taskB = b.task.toLowerCase();
        
        if (taskA < taskB) {
            return -1;
        }
        if (taskA > taskB) {
            return 1;
        }
        return 0;
    });

    let displayTask = document.querySelector('[data-js-task-list]');
    displayTask.innerHTML = ''; 

    for (let i = 0; i < aTask.length; i++) {
        let arrTask = aTask[i];
        let dom = `
                    <div class="tasks_list" data-js-task-item=${i+1}><p>Tache: ${arrTask.task}</p>
                    <span>Importance: ${arrTask.importance}</span>
                    <button data-js-detail-btn>Afficher le details</button>
                    <button data-js-delete-btn>Effacer</button></div>
                    `;
        displayTask.insertAdjacentHTML('beforeend', dom);
        new Task(displayTask.lastElementChild);
    }
}
/**
 * fonction masquer-afficher les détails de la tâche
 */
showDetails() {
    let elementDetails = document.querySelector('[data-js-details]'),
        elementChevron = document.querySelector('[data-js-chevron]');
    
    elementDetails.classList.toggle('show');
    elementChevron.classList.toggle('expanded');
}
}