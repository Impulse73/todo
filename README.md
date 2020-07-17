# ToDoList
### Author:
Tyugashev Ilya / Тюгашев Илья
### Тестовое задание на Vue.js
ToDo List - приложение на стеке Vue/Vuex.
### Описание проекта
Данный проект состоит из нескольких компонентов: AddTask, ListTask, DeletedListTask и GetStarted.<br/>
Компонент GetStarted - Toolbar страницы, с помощью которой реализуется маршрутицазия по проекту.<br/>
Компонент AddTask - форма добавления задачи и одновременно форма для редактирования уже существующей задачи<br/>
Компонент ListTask - список задач, с фильтрами и сортировками по возрастанию и убыванию.<br/>
Компонент DeletedListTask - список удаленных задач.<br/>
С помощью VueRouter была реализована маршрутизация.<br/>
Данные хранятся в стеке Vuex.store<br/>
<br/>
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
