<template>
    <div class="q-pa-md text-center" style="max-width: 30%; margin-left: 35% ">
        <q-form class="q-gutter-md">
            <q-input
                    filled
                    v-model="name"
                    label="Задача"

            />
            <q-select
                    filled
                    v-model="selected"
                    :options="options"
                    label="Статус"
            />
            <div>
                <q-btn
                        label="Добавить"
                        type="submit"
                        color="primary"
                        @click="onSubmit"
                />
                <q-btn
                        v-if="edit"
                        label="Удалить"
                        flas
                        @click="deleteTask"
                        type="delete"
                        color="primary"
                        flat
                        class="q-ml-sm">
                </q-btn>
            </div>
        </q-form>
    </div>
</template>

<script>
    import {
        QInput,
        QForm,
        QSelect,
    } from 'quasar'

    export default {
        components: {QForm, QInput, QSelect},
        data() {
            return {
                edit: null,
                tasks: null,
                id: null,
                name: null,
                age: null,
                selected: null,
                options: ['Выполнить',
                    'Выполняется',
                    'Выполнено'
                ],
                accept: false
            }
        },

        methods: {
            checkForm() {
                if (this.selected != null) {
                    if (this.name != null) {
                        return true
                    }
                }
            },
            onSubmit() {
                let isTrue = this.checkForm();
                if (isTrue) {
                    if (this.edit) {
                        this.$store.dispatch('editTask', {
                            key: {
                                id: this.id

                            },
                            value: {
                                id: this.id,
                                text: this.name,
                                status: this.selected,
                                isDeleted: false,
                            }
                        })
                        this.$router.push('/list')
                    } else {
                        let length = this.$store.getters.getIdList;
                        this.id = length + 1;
                        this.$store.dispatch('setTask', {
                            key: {
                                id: this.id

                            },
                            value: {
                                id: this.id,
                                text: this.name,
                                status: this.selected,
                                isDeleted: false,
                            }
                        })
                    }
                    this.onReset()

                }
            },
            onReset() {
                this.name = null
                this.selected = null
                this.accept = false
                this.edit = false
            },
            deleteTask() {
                this.$store.dispatch('deleteTask', this.id)
                this.onReset()
                this.$router.push('/list')
            },
            getList() {
                this.tasks = this.$store.getters.getList;
            },
            getQuery() {
                let idTask = this.$route.query
                this.id = idTask.task
                for (let i = 0; i < this.tasks.length; i++) {
                    if (this.tasks[i].key.id == this.id) {
                        this.name = this.tasks[i].value.text;
                        this.selected = this.tasks[i].value.status;
                        this.accept = true
                        this.edit = true
                    }
                }
            },
        },
        beforeMount() {
            this.getList()
            this.getQuery()

        },
    }
</script>

<style scoped>

</style>