<template>
    <div id="container" class="row no-wrap">
        <q-toolbar class="col-11 bg-blue-grey-1 text-center">
            <q-btn flat dense icon="menu">
                <q-menu auto-close>
                    <q-list style="min-width: 100px">
                        <q-item clickable @click="routeToAdd">
                            <q-item-section>Новая задача</q-item-section>
                        </q-item>
                        <q-item clickable @click="routeToList">
                            <q-item-section>Список задач</q-item-section>
                        </q-item>
                        <q-item clickable @click="routeToDeletedTasks">
                            <q-item-section>Удаленные задачи</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
            <q-toolbar-title>ToDo list</q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="col-2 bg-primary text-white">
            <q-btn flat round dense icon="whatshot" class="q-mr-sm"/>
        </q-toolbar>
    </div>
</template>

<style>
    #container {

    }
</style>

<script>
    import {
        QToolbar,
        QMenu,
        ClosePopup
    } from 'quasar'

    export default {
        components: {QToolbar, QMenu},
        directives: {ClosePopup},
        data() {
            return {
                model: 'one'
            }
        },
        methods: {
            routeToList() {
                this.$router.push('/list')
            },
            routeToAdd() {
                this.$router.push('/add')
            },
            routeToDeletedTasks() {
                this.$router.push('/deletedList')
            }
        }
    }
</script>
