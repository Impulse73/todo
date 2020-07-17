<template>
    <div id="app" class="q-pa-md">
        <div class="text-center text-h4">Удаленные задачи</div>
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
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {QField} from "quasar";

    export default {
        components: {QField},
        name: "DeletedListTasks",
        data() {
            return {
                list: null,
                text: '',
                Tasks: [],
                val: [],
            };
        },
        methods: {
            getList() {
                let tmp = this.$store.getters.getList;
                for (let i = 0; i < tmp.length; i++) {
                    if (tmp[i].value.isDeleted == true) {
                        this.Tasks.push(tmp[i])
                    }
                }
            }
        },
        beforeMount() {
            this.getList()
        }
    }
</script>

<style scoped>

</style>