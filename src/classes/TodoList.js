class TodoList {
  /**
   * @param {Todo[]} todos - 할 일 데이터
   */
  constructor(todos) {
    this.todos = todos;
  }

  /**
   * 할 일을 추가한다
   * @param {Todo} newTodo - 새로운 할 일
   * @return {Todo[]} todoList - 기존 Todo 와 새로운 Todo 가 포함된 todoList
   */
  addTodo(newTodo) {}

  /**
   * 모든 할 일을 조회한다
   * @return {Todo[]}
   */
  getAllTodo() {}

  /**
   * ID를 기반으로 특정 할 일을 조회한다
   * @param {string} id - 조회할 아이디
   * @returns {Todo}
   */
  getTodo(id) {}

  /**
   * ID를 제외한 속성을 수정한다
   * @param {string} id - 수정할 할 일의 아이디
   * @param {TodoProperty} todoProperty - 수정할 속성값
   */
  updateTodo(id, todoProperty) {}

  /**
   * 특정 할 일의 특정 태그를 수정한다
   * @param {string} id - 수정할 할 일의 아이디
   * @param {string} originTag - 특정 태그
   * @param {string} newTag - 특정 태그를 수정할 태그값
   */
  updateTag(id, originTag, newTag) {}

  /**
   * ID를 기반으로 특정 할 일을 삭제한다
   * @param {string} id - 삭제할 할 일의 아이디
   */
  deleteTodo(id) {}

  /**
   * 모든 할 일을 제거한다
   */
  deleteAllTodo() {}

  /**
   * 특정 할 일의 특정 태그를 삭제한다
   * @param {string} id - 특정 할 일의 아이디
   * @param {string} tag - 삭제할 태그명
   */
  deleteTag(id, tag) {}

  /**
   * 특정 할 일의 모든 태그를 삭제한다
   * @param {string} id - 특정 할 일의 아이디
   */
  deleteAllTag(id) {}
}
