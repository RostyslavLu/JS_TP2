class Task {
    /**
     * constructor
     * @param {*} element 
     */
    constructor(element) {
        this._element = element;
        this._elP = this._element.querySelector('p');
        this._elSpan = this._element.querySelector('span');

        this._elBtnDetail = this._element.querySelector('[data-js-detail-btn]');
        this._elBtnDelete = this._element.querySelector('[data-js-delete-btn]');

        this._elBtnDetailsTask = document.querySelector('[data-js-chevron]');

        this.init();
    }

    /**
     * initialisation
     */

    init() {
        if (this._element.childElementCount > 0) {
            this._elBtnDetail.addEventListener('click', this.detailTask.bind(this));
            this._elBtnDelete.addEventListener('click', this.deleteTask.bind(this)); 
        }
    }

    /**
     * fonction de suppression de tâche
     * @param {*} task 
     */

    deleteTask(task) {
        let elParent = task.target.parentNode,
            taskIndex = parseInt(elParent.dataset.jsTaskItem);

        aTask.splice(taskIndex, 1);
        elParent.remove();
    }

    /**
     * la fonction d'injection des détails de la tâche dans un bloc [data-js-details]
     * @param {*} task 
     */

    detailTask(task) {
        let elParent = task.target.parentNode,
            taskIndex = parseInt(elParent.dataset.jsTaskItem);
        let currentTask = aTask[taskIndex-1];
        let sectionDetail = document.querySelector('[data-js-details]');
        
        if (currentTask.description == '') {
            currentTask.description = 'Aucune description disponible';
        }

        let dom = `
                <div data-js-current-task >
                    <p>Tache: ${currentTask.task}</p>
                    <p>Description: ${currentTask.description}</p>
                    <p>Importance: ${currentTask.importance}</p>
                </div>`;
        sectionDetail.innerHTML = dom;
    }

}