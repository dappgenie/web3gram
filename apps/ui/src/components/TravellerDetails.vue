<script lang="ts" setup>
import { ISearchRoom } from '~/utils/interface';

const props = defineProps<ITravellerProps>()
interface ITravellerProps {
  rooms: ISearchRoom[]
}
const roomDetails = ref<ISearchRoom[]>([{
  adults: 1,
  children: [],
}])
const addRoom = () => {
  roomDetails.value.push({
    adults: 1,
    children: [],
  })
}
const removeRoom = (index: number) => {
  roomDetails.value.splice(index, 1)
}
const ages = ['<1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']
onMounted(() => {
  roomDetails.value = props.rooms
})
</script>

<template>
  <div>
    <h2 text-base font-bold>
      Travellers
    </h2>
    <div>
      <div v-for="(room, rid) in roomDetails" :key="rid" class="room-item">
        <div v-if="room.adults + room.children.length">
          <div class="title">
            Room {{ rid + 1 }}
          </div>
          <div class="content">
            <div>Adults</div>
            <FormNumber v-model="room.adults" :disabled="room.adults >= 14" />
          </div>
          <div class="content">
            <div>Children</div>
            <FormNumber v-model="room.children.length" :disabled="room.children.length >= 6 " />
          </div>
          <div flex w-full flex-wrap justify-between>
            <FormSelect
              v-for="(idx) in room.children"
              :key="idx"
              v-model="roomDetails[rid].children[idx]"
              placeholder="Child Age"
              width="w-[49%]"
              :options="ages"
              :get-label="(option) => option"
              :get-value="(option) => option"
              @update:model-value="roomDetails[rid].children[idx] = $event"
            />
          </div>
          <div flex justify-end w-full>
            <Button v-if="(roomDetails.length > 1)" id="home-add-room-btn" name="home-add-room-btn" mt-4 color="base" rounded="none" @click="removeRoom(rid)">
              <template #content>
                Remove Room
              </template>
            </Button>
          </div>
        </div>
      </div>
      <Button v-if="(roomDetails.length < 8)" id="home-add-room-btn" name="home-add-room-btn" mt-4 color="base" rounded="none" @click="addRoom()">
        <template #content>
          Add Room
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="css">
.room-item .title {
    @apply text-sm font-bold py-4;
}
.room-item .content {
    @apply text-sm flex justify-between items-center pb-4;
}
</style>
