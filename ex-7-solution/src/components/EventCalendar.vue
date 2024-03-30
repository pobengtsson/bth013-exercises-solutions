<template>
  <v-fab-transition>
  <v-btn fab dark color="pink" @click="addEvent">
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</v-fab-transition>
  <v-container>
    <v-row>
      <v-calendar
        v-model="monthToShow"
        :events="eventDateList"
        :type="type"
        :hide-week-number="false"
        :weekdays="[1,2,3,4,5,6,0]"
      >
      </v-calendar>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed} from 'vue'
import { useEventStore } from '../stores/eventStore.js'
import router from '../router/index.js'

const eventDateList = ref([])
const monthToShow = ref([new Date()])
const type = ref('month')

const updateRange = () => {
  eventDateList.value = useEventStore().eventList.map((e)=> {
      return {...e, end: e.start, allDay: false, color: 'red'} }
    )
}

const addEvent = () => {
  router.push({ name: 'add-event' })
}

onMounted(() => {
    updateRange()
})
</script>
