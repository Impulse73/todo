# ToDoList
### Author:
Tyugashev Ilya / Тюгашев Илья
### Тестовое задание на Vue.js
ToDo List - приложение на стеке Vue/Vuex.
### Описание проекта
Данный проект состоит из нескольких компонентов: AddTask, ListTask, DeletedListTask и GetStarted.
Компонент GetStarted - Toolbar страницы, с помощью которой реализуется маршрутицазия по проекту.
Компонент AddTask - форма добавления задачи и одновременно форма для редактирования уже существующей задачи
Компонент ListTask - список задач, с фильтрами и сортировками по возрастанию и убыванию.
Компонент DeletedListTask - список удаленных задач.
С помощью VueRouter была реализована маршрутизация.
Данные хранятся в стеке Vuex.store

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
