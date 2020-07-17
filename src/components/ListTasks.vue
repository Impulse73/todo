<template>
    <div id="app" class="q-pa-md">
        <div class="fit row inline wrap justify-center ">
            <q-field class="text-h6" borderless>
                <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0"> Сортировка по</div>
                </template>
            </q-field>
            <div style=" padding-block: 15px; margin: 15px">
                <q-btn class="q-pa-xs" style="margin-left: 10px" label="возрастанию" @click="sortASC"></q-btn>
                <q-btn class="q-pa-xs" style="margin-left: 10px" label="убыванию" @click="sortDESC"></q-btn>
            </div>
            <q-field class="text-h6" borderless>
                <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">Фильтр</div>
                </template>
            </q-field>
            <q-select
                    @change="filter"
                    clearable
                    filled
                    v-model="select"
                    :options="options"
                    label="Статус"
                    style="margin-left: 15px; width: 150px"
            />
            <q-btn style="margin: 10px" @click="filter" icon="done"></q-btn>
        </div>
        <ul class="justify-center items-start content-start">
            <li id="list" style="list-style: none"
                v-for="(task) in Tasks"
                :key="task.key.id">
                <div id="block" class="fit row inline wrap justify-center ">
                    <q-field
                            class="text-h5"
                            style="margin-bottom: 20px; margin-right: 10px; width: 25px;"
                            borderless
                            stack-label>
                        <template v-slot:control>
                            <div
                                    class="self-center full-width no-outline"
                                    tabindex="0">
                                {{task.key.id}}
                            </div>
                        </template>
                    </q-field>
                    <q-field
                            style="margin-bottom: 20px; width: 300px"
                            label="Задача"
                            type="text"
                            v-model="task.value.text"
                            filled>
                        <template v-slot:control>
                            <div
                                    class="self-center full-width no-outline"
                                    tabindex="0">
                                {{task.value.text}}
                            </div>
                        </template>
                    </q-field>
                    <q-field
                            style="margin-bottom: 20px; margin-left: 10px; width: 200px"
                            label="Статус"
                            type="text"
                            v-model="task.value.status"
                            filled
                    >
                        <template v-slot:control>
                            <div
                                    class="self-center full-width no-outline"
                                    tabindex="0"
                            >
                                {{task.value.status}}
                            </div>
                        </template>
                    </q-field>
                    <router-link v-model="task.key.id"
                                 style="margin-bottom: 20px; margin-left: 10px"
                                 tag="q-btn"
                                 color="red"
                                 :to="{ path: '/list/id', query:{task: task.key.id}}">edit
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    import {QField, QSelect} from "quasar";

    export default {
        components: {QField, QSelect},
        name: "ListTasks",
        data() {
            return {
                select: null,
                options: ['Выполнить',
                    'Выполняется',
                    'Выполнено'
                ],
                list: null,
                text: '',
                Tasks: [],
                val: [],
            };
        },
        methods: {
            filterbyStatus(status, tasks) {
                let tasksFiltered = [];
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].value.status == status) {
                        tasksFiltered.push(tasks[i])
                    }
                }
                return tasksFiltered
            },
            getListNotDeleted(list){
                let listTmp = []
                for(let i = 0; i < list.length; i++){
                    if (list[i].value.isDeleted == false) {
                        listTmp.push(list[i])
                    }
                }
                return listTmp
            },
            filter() {
                let tmp = this.getListNotDeleted(this.$store.getters.getList)
                this.Tasks = []
                if (this.select == null) {
                    this.Tasks = tmp
                }
                if (this.select === "Выполнить") {
                    this.Tasks = this.filterbyStatus('Выполнить', tmp)
                }
                if (this.select == 'Выполняется') {
                    this.Tasks = this.filterbyStatus('Выполняется', tmp)
                }
                if (this.select == 'Выполнено') {
                    this.Tasks = this.filterbyStatus('Выполнено', tmp)
                }
            },
            sortDESC() {
                let tmp = this.Tasks
                this.Tasks = null
                tmp.sort(function (a, b) {
                    if (a.value.text < b.value.text) {
                        return 1
                    }
                    if (a.value.text > b.value.text) {
                        return -1
                    }
                    // a должно быть равным b
                    return 0
                })
                this.Tasks = tmp
            },
            sortASC() {
                let tmp = this.Tasks
                this.Tasks = null
                tmp.sort(function (a, b) {
                    if (a.value.text > b.value.text) {
                        return 1;
                    }
                    if (a.value.text < b.value.text) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                })
                this.Tasks = tmp
            },
            getList() {
                let tmp = this.$store.getters.getList;
                for (let i = 0; i < tmp.length; i++) {
                    if (tmp[i].value.isDeleted == false) {
                        this.Tasks.push(tmp[i])
                    }
                }
            },
        },
        beforeMount() {
            this.getList()
        }
    }
</script>

<style scoped>

</style>