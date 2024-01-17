import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TodoItemComponent extends Component {
    @service('todo-data') todos;
    @action
    toggleIsComplete(text) {
        console.log(text);
        this.todos.toggleIsComplete(text);
    }
}
