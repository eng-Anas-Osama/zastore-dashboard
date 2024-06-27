<template>
        <div aria-label="Card" class="card bg-base-300 shadow-md">
        <div class="card-body gap-2">
            <div class="flex items-start justify-between gap-2 text-sm">
                <div>
                    <h2 class="font-medium text-base-content/70">{{statTitle}}</h2>
                    <div class="mt-4 flex items-center gap-2">
                        <h5 class="inline text-2xl/none font-semibold">{{statSubtitle}}</h5>
                        
                        <div aria-label="Badge"
                            class="badge gap-1 border-0 bg-success/10 py-3 text-xs font-semibold text-success badge-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" font-size="14" width="1em" height="1em"
                                viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" :d="[statArowIcon]"></path><!--//m5 12l7-7l7 7m-7 7V5-->
                            </svg>{{statPercent}}</div>
                    </div>
                </div>
                <div class="rounded bg-base-200 p-2 "><svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        class="text-base-content/80" font-size="20" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2">
                            <!-- <circle cx="12" cy="12" r="10"></circle> -->
                            <path :d="[statIcon]"></path><!--M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6-->
                        </g>
                    </svg></div>
            </div>
            <p class="text-sm font-medium"><span class="text-success">{{addSign, statAmount}}</span><span
                    class="ms-1.5 text-base-content/60">{{statAmountUpdate}}</span></p>
        </div>
    </div>

</template>
<script>
export default {
    name: 'statCard',
    props:{
      statSubtitle: {
        type: String,
        default: '350,897',
      },
      statTitle: {
        type: String,
        default: 'Downloads',
      },
      statIcon: { 
        type: String,
        default: 'M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333'
      },
      statArowIcon: {
        type: String,
        default:'m5 12l7-7l7 7m-7 7V5'
      },
      statPercent: {
        type: String,
        default: '3.48',
      },
      statAmount: {
        type: String,
        default: '20'
      },
      statAmountUpdate: {
        type: String,
        default: 'last week'
      },
      increase:{
        type: Boolean,
        default: true
      }
    },computed:{
      addSign(){
        if(this.increase) {
          return '+' + this.statAmount
        }
        else {
          return '-' + this.statAmount
        }
      }
    }
}
</script>
<style>
.card{
  transition: transform 0.2s ease;
}
.card:hover{
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  transform: scale(1.02); /* Adjust scale as needed */
  transition: transform 0.2s ease;
}
</style>