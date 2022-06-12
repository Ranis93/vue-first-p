const App = {
    data() {
        return {
            placeholderStr: "Введите название заметки (не более 20 символов)",
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3', 'Заметка 4', 'Заметка 5']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
            this.inputValue = '';
            }
        },
        deleteNote(i) {
            this.notes.splice(i, 1);
        },
        inputKeyPress(event) {
            if(event.key === 'Enter') {
                this.addNewNote();
            }
        },
        toUpperCase(item) {
            return item.toUpperCase();
        }
    },
    computed: {                             // вычисляемые свойства помещаем сюда чтобы Vue не вызывал их много раз например при imput
        sumButtonsComputed() {
            return this.notes.length + 1;
        }
    }, 
    watch: {
        inputValue(value) {                      // имя метода должно соответствовать названию переменной
            if (value.length > 20) {
                this.inputValue = '';
            }
        }
    }
}

Vue.createApp(App).mount('#app');
