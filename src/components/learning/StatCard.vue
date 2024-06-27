<!-- This Component is responsible for creating the small cards with simple statics
   that displayed under the header -->
<!-- <template>
    <div class="card bg-white shadow-md p-4">
      <div class="flex justify-between items-center">
        <h3>{{ title }}</h3>
        <div :class="changeType === 'up' ? 'text-green-500' : 'text-red-500'">
          {{ changeType === 'up' ? '▲' : '▼' }} {{ change }}
        </div>
      </div>
      <div class="text-2xl font-bold">{{ value }}</div>
    </div>
  </template>
  <script>
  export default {
    props: {
      title: String,
      value: String,
      change: String,
      changeType: String
    }
  }
  </script> -->
  

  <!-- <template>
    <div
      class="card bg-white shadow-md p-4"
    >
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-blueGray-400 uppercase font-bold text-xs">
              {{ statSubtitle }}
            </h5>
            <span class="font-semibold text-xl text-blueGray-700">
              {{ statTitle }}
            </span>
          </div>
          <div class="relative w-auto pl-4 flex-initial">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
              :class="[statIconColor]"
            >
              <i :class="[statIconName]"></i>
            </div>
          </div>
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              :class="[
                statArrow === 'up' ? `fas fa-arrow-up` : `fas fa-arrow-down`,
              ]"
            ></i>
            {{ statPercent }}%
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron }}</span>
        </p>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "card-stats",
    props: {
      statSubtitle: {
        type: String,
        default: "Traffic",
      },
      statTitle: {
        type: String,
        default: "350,897",
      },
      statArrow: {
        default: "up",
        validator: function (value) {
          // The value must match one of these strings
          return ["up", "down"].indexOf(value) !== -1;
        },
      },
      statPercent: {
        type: String,
        default: "3.48",
      },
      // can be any of the text color utilities
      // from tailwindcss
      statPercentColor: {
        type: String,
        default: "text-emerald-500",
      },
      statDescripiron: {
        type: String,
        default: "Since last month",
      },
      statIconName: {
        type: String,
        default: "far fa-chart-bar",
      },
      // can be any of the background color utilities
      // from tailwindcss
      statIconColor: {
        type: String,
        default: "bg-red-500",
      },
    },
  };
  </script> -->


  <template>
  <div>
    <ul v-draggable>
      <li v-for="card in cards" :key="card.title" class="card bg-white shadow-md p-4" v-draggable-item>
        <div class="flex-auto p-4">
          <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                {{ card.statSubtitle }}
              </h5>
              <span class="font-semibold text-xl text-blueGray-700">
                {{ card.statTitle }}
              </span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
                :class="[card.statIconColor]"
              >
                <i :class="[card.statIconName]"></i>
              </div>
            </div>
          </div>
          <p class="text-sm text-blueGray-400 mt-4">
            <span class="mr-2" :class="[card.statPercentColor]">
              <i
                :class="[
                  card.statArrow === 'up' ? `fas fa-arrow-up` : `fas fa-arrow-down`,
                ]"
              ></i>
              {{ card.statPercent }}%
            </span>
            <span class="whitespace-nowrap">{{ card.statDescripiron }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Draggable } from 'vuedraggable';

export default {
  components: {
    Draggable,
  },
  setup() {
    const cards = ref([
      {
        statSubtitle: 'Revenue',
        statTitle: '$587.54',
        statIconName: 'fas fa-chart-pie',
        statIconColor: 'bg-red-500',
        statPercent: '10.8%',
        statPercentColor: 'text-red-500',
        statDescripiron: '+112.58 than past week',
        statArrow: 'up',
      },
      // ... other cards
    ]);

    return {
      cards,
    };
  },
};
</script>