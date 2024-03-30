import { defineStore } from 'pinia'
import { daysFromNow } from '../utils.js'
import { v4 as uuid_v4 } from 'uuid'


const initialEvents = [
    {
        title: 'Beatles Reimagined: A Symphony',
        description: 'An evening with the city’s philharmonic orchestra, reinterpreting the timeless classics of The Beatles, blending rock with classical music.',
        start: daysFromNow(-3),
        id: uuid_v4()
    },
    {
        title: 'Stones and Brews Festival',
        description: 'A rock-themed beer festival featuring Rolling Stones tribute bands, craft beer tastings, and Stones-inspired art installations.',
        start: daysFromNow(0),
        id: uuid_v4()
    },
    {
        title: 'Queen’s Crown: A Rock Opera',
        description: 'A theatrical rock opera celebrating the music of Queen, with a narrative that weaves through their greatest hits in a stunning visual spectacle.',
        start: daysFromNow(1),
        id: uuid_v4()
    },
    {
        title: 'Fleetwood Mac Fleet Fest',
        description: 'A day-long festival celebrating the legacy of Fleetwood Mac, with cover bands, solo artist tributes, and a Rumours album live playthrough.',
        start: daysFromNow(3),
        id: uuid_v4()
    }
]


export const useEventStore = defineStore('events', {
    state: () => ({
        eventList: [...initialEvents],
    }),
    actions: {
        addEvent(event) {
            this.eventList.push({ ...event, canceled: false, id: uuid_v4()})
        },
        deleteEvent(eventId) {
            this.eventList = this.eventList.filter(event => event.id !== eventId)
        },
        cancelEvent(eventId) {
            const index = this.eventList.findIndex(event => event.id === eventId)
            if (index !== -1) {
                this.eventList[index].canceled = true
            }
        },
        editEvent(eventId, newEventData) {
            const index = this.eventList.findIndex(event => event.id === eventId)
            if (index !== -1) {
                this.eventList[index] = { ...this.eventList[index], ...newEventData }
            }
        },
    },
})