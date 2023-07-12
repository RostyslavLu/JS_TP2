class Form {

    /**
     * constructor
     * @param {*} element 
     */

    constructor(element) {
        this._element = element;
        this._elForm = this._element.querySelector('[data-js-input]');
        this._elInputTask = this._elForm.querySelector('input[name="task"]');
        this._elInputDescr = this._elForm.querySelector('input[name="description"]');
        this._elInputsImportance = this._elForm.querySelectorAll('input[name="importance"]');
        
        this._elBtn = this._elForm.querySelector('[data-js-btn]');

        this._displayTask = document.querySelector('[data-js-task-list]');
        this.index = 1;
        this.init();
    }

    /**
     * initialisation
     */

    init() {
        this._elBtn.addEventListener('click', this.processForm.bind(this));
        
    }

    /**
     * fonction de traitement de formulaire
     * @param {*} e 
     */

    processForm(e) {
        e.preventDefault();
        
        if (this.validForm() && this.validRadio()) {
            let task = this._elInputTask.value,
            description = this._elInputDescr.value,
            arrImportance = this._elInputsImportance;
        let importance;

        for (let i = 0, l = arrImportance.length; i < l; i++) {

            if (arrImportance[i].checked) {
                importance = parseInt(arrImportance[i].value);
            }

           
        }
        let arrTask = {
            task: task,
            description: description,
            importance: importance
        }
        aTask.push(arrTask); 
        this.addTask(arrTask);
        }
        
        this.clearForm();
    }

    /**
     * fonction de vérification des champs <input>
     * @returns variable -> vrai ou false
     */

    validForm() {
        let valid = false;
            
        if (!this._elInputTask.value == '' ) {
            valid = true;
        }
        if (valid == false) {
            this._element.querySelector('[data-js-input]').classList.add('error');
        } else {
            this._element.querySelector('[data-js-input]').classList.remove('error');
        }
        
        return valid;
    }

    /**
     * fonction de vérification des champs <input>
     * @returns variable -> vrai ou false
     */

    validRadio() {
        let valid = false,
            arrImportance = this._elInputsImportance;
        for (let i = 0, l = arrImportance.length; i < l; i++) {
            
            if (arrImportance[i].checked) {
                valid = true;
            }
        }
        if (valid == false) {
            this._element.querySelector('[data-js-radio]').classList.add('error');
        } else {
            this._element.querySelector('[data-js-radio]').classList.remove('error');
        }

        return valid;
    }

    /**
     * fonction pour vider les champs du formulaire
     */

    clearForm () {
        this._elInputTask.value = '';
        this._elInputDescr.value = '';
        for (let i = 0, l = this._elInputsImportance.length; i < l; i++) {
            this._elInputsImportance[i].checked = false;
            
        }
    }

    /**
     * fonction d'injection de chaque tâche dans un bloc liste des tâches [data-js-task-list]
     * @param {*} arrTask 
     */
    addTask(arrTask) {
        
        let dom = `
                    <div class="tasks_list" data-js-task-item=${this.index}>
                    <p>Tache: ${arrTask.task}</p><span>Importance: ${arrTask.importance}</span>
                    <button data-js-detail-btn>Afficher le details</button><button data-js-delete-btn>Effacer</button>
                    </div>
                    `;
        this._displayTask.insertAdjacentHTML('beforeend', dom);
        new Task(this._displayTask.lastElementChild);
        this.index ++;
    }

}