const app = new Vue({

    el: '#app',
    data:{
        alertActive: false,
        strTodo:'',
        todos: [
            {
                todo: 'Comprare una macchina',
                checked: false
            },
            {
                todo: 'Guidare la macchina',
                checked: false
            },
            {
                todo: 'Andare in pringione',
                checked: true
            },
            {
                todo: 'Farsi pagare la cauzione',
                checked: false
            },
        ]
    },
    methods:{
        removeTodo(index){
            this.todos.splice(index, 1);
        },
        addTodo(){
            if(this.strTodo.length > 2){
                this.todos.push({todo: this.strTodo, checked: false});
                this.strTodo = '';
            }else{
                this.alertActive = true;
                setTimeout(() => {
                    this.alertActive = false;
                }, 2000);
            }
        },
    },
    

});