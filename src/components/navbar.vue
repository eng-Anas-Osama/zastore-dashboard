<template>
    <div class="navbar bg-base-100">
        <!-- Adding the left za-store button -->
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">Za-Store Mangment</a>
        </div>

        <div class="flex-none">
            <switchButton />
            <userDrobdowen />
        </div>
    </div>
</template>
<script>
import api from '../services/api.js'
import switchButton from './theme/switchButton.vue';
import userDrobdowen from './Dropdowens/userDrobdowen.vue';
export default {
    name: 'navbar',
    data(){
        return{
            userName:null,
            userPhone:null,
            userImage:null,
            
        }
    },
    components:{
        userDrobdowen,
        switchButton,
    }
}
</script>