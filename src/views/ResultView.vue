<template>
    <div class="" style="background-color: #e4f0fe;">
        <div class="container" v-if="loading" style="height: calc(100vh - 88px);">
            <div class="h-100 d-flex justify-content-center  align-items-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-primary mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                
            </div>
        </div>
        <div class="container" v-else>
            <div class="pt-5">
                <div v-for="item in 15" :key="item">
                    <div class="bg-white px-3 mb-5 d-flex justify-content-center">
                        <div class="right w-75 p-5 d-flex justify-content-between align-items-center">
                            <!-- {{ item.itineraries[0].segments[0].departure.at.slice(11, 16) }} -->
                            <font-awesome-icon class="ms-5 fs-2 mb-0" style="color: rgb(255, 136, 0);" :icon="['fas', 'cart-flatbed-suitcase']" />
                            <div class="d-flex justify-content-center align-items-center">
                                <h2 class="mb-0">
                                05:15
                                </h2>
                                <font-awesome-icon class="mx-5" :icon="['fas', 'left-long']" style="color: #777;" />
                                <h2 class="mb-0">
                                    16:10
                                </h2>
                            </div>
                            <div class="d-flex flex-column justify-content-between">
                                <font-awesome-icon class="fs-2 mb-3" style="color: rgba(255, 136, 0, 0.799);" :icon="['fas', 'chair']" />
                                <p class="text-center fs-5" style="color: rgba(22, 141, 38, 0.737);">اختر</p>
                            </div>
                            
                            <!-- {{ item.itineraries[0].segments[item.itineraries[0].segments.length - 1].departure.at.slice(11, 16) }} -->
                        </div>
                        <div class="left w-25 p-5 d-flex justify-content-center flex-column align-items-center">
                            <h2>
                                600 يورو
                            </h2>
                            <button class="btn btn-primary w-75 text-center p-2">اختيار</button>
                            <!-- {{ item.price.total }} -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapState } from 'vuex'
import resultService from "@/services/ResultServices"
export default {
    name: "ResultView",
    data(){
        return {
            loading: true,
            result: []
        }
    },
    computed: {
        ...mapState({
            fromCity: "fromCity",
            toCity:"toCity",
            fromDate: "fromDate",
            toDate:"toDate"
        })
    },
    async created(){
        // await this.getResults()
        this.loading = false
    },
    methods: {
        async getResults(){
            await resultService.GetResult(
                this.fromCity.iataCode,
                this.toCity.iataCode,
                this.fromDate
            ).then(res => {
                console.log(res.data)
                this.result = res.data.data
            })
        }
    }
}
</script>

<style scoped>
.right {
    border-left: 1px dashed #777;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}
.left {
    border-right: 1px dashed #777;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
</style>