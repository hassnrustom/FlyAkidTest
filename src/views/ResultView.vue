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
            <div class="row mb-5 pb-5" style="min-height: calc(100vh - 88px);;">
                <div class="col-lg-3">
                    <div class="pt-5">
                        <p class="text-primary fs-5">خطوط الطيران</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <input type="checkbox" checked name="" id="">
                                <label class="me-2 text-sm" for="">QATAR AIRWAYS</label>
                            </div>
                            <div>
                                <label for="">2,291 ريال</label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-1">
                            <div>
                                <input type="checkbox" checked name="" id="">
                                <label class="me-2 text-sm" for="">AIR CANADA</label>
                            </div>
                            <div>
                                <label for="">13,834 ريال</label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-1">
                            <div>
                                <input type="checkbox" checked name="" id="">
                                <label class="me-2 text-sm" for="">EMIRATES</label>
                            </div>
                            <div>
                                <label for="">12,009 ريال</label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-1">
                            <div>
                                <input type="checkbox" checked name="" id="">
                                <label class="me-2 text-sm" for="">UNITED AIRLINES</label>
                            </div>
                            <div>
                                <label for="">12,227 ريال</label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-1">
                            <div>
                                <input type="checkbox" checked name="" id="">
                                <label class="me-2 text-sm" for="">LUFTHANSA</label>
                            </div>
                            <div>
                                <label for="">11,779 ريال</label>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p class="text-primary fs-5">السعر</p>
                        <input type="number" v-model="lowprice" placeholder="السعر الأدنى" class="form-control">
                        <input type="number" v-model="hieghprice" placeholder="السعر الأعلى" class="mt-2 form-control">
                    </div>
                </div>
                <div class="col-lg-9">
                    <!--  -->
                    
                    <div class="pt-5" v-if="result.length > 0">
                        <select class="mb-3" v-model="sort" :disabled="result.length == 0" id="">
                            <option value="" selected disabled>ترتيب</option>
                            <option value="inc">تصاعدي</option>
                            <option value="dec">تنازلي</option>
                        </select>
                        <div v-for="item in result" :key="item">
                            <div class=" px-3 mb-5 d-flex justify-content-center">
                                <div class="right bg-white w-75 p-5 d-flex justify-content-between align-items-center">
                                    <!--  -->
                                    <font-awesome-icon class="ms-5 fs-2 mb-0" style="color: rgb(255, 136, 0);" :icon="['fas', 'cart-flatbed-suitcase']" />
                                    <div class="d-flex justify-content-center align-items-center">
                                        <h2 class="mb-0">
                                            {{ item.itineraries[0].segments[0].departure.at.slice(11, 16) }}
                                        </h2>
                                        <font-awesome-icon class="mx-5" :icon="['fas', 'left-long']" style="color: #777;" />
                                        <h2 class="mb-0">
                                            {{ item.itineraries[0].segments[item.itineraries[0].segments.length - 1].departure.at.slice(11, 16) }}
                                        </h2>
                                    </div>
                                    <div class="d-flex flex-column justify-content-between">
                                        <font-awesome-icon class="fs-2 mb-3" style="color: rgba(255, 136, 0, 0.799);" :icon="['fas', 'chair']" />
                                        <p class="text-center fs-5" style="color: rgba(22, 141, 38, 0.737);">اختر</p>
                                    </div>
                                    
                                    <!--  -->
                                </div>
                                <div class="left bg-white w-25 p-5 d-flex justify-content-center flex-column align-items-center">
                                    <h4>
                                        {{ item.price.total }} يورو
                                    </h4>
                                    <button class="btn btn-primary w-75 text-center p-2">اختيار</button>
                                    <!-- {{ item.price.total }} -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="d-flex justify-content-center align-items-center h-100">
                        <h1 class="text-danger">لا يوجد نتائج للعرض</h1>
                    </div>
                    <!--  -->
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
            result: [],
            resultAll: [],
            lowprice: '',
            hieghprice: '',
            sort:""
        }
    },
    computed: {
        ...mapState({
            fromCity: "fromCity",
            toCity:"toCity",
            fromDate: "fromDate",
            toDate:"toDate",
        })
    },
    async created(){
        window.scrollTo(0, 0);
        await this.getResults()
        this.loading = false
    },
    methods: {
        filterbyloworice(){
            // console.log(this.lowprice)
            this.result = this.resultAll.filter(item => item.price.total > this.lowprice)
            if(this.hieghprice == '' && this.lowprice == '') {
                this.result = this.resultAll
            }
            if(this.hieghprice != '' && this.lowprice == '') {
                this.result = this.resultAll.filter(item => item.price.total < this.hieghprice)
            }
            if(this.hieghprice == '' && this.lowprice != '') {
                this.result = this.resultAll.filter(item => item.price.total > this.lowprice)

            }
            if(this.hieghprice != '' && this.lowprice != '') {
                this.result = this.resultAll.filter(item => item.price.total < this.hieghprice && item.price.total < this.hieghprice )
            }
            
        },
        async getResults(){
            await resultService.GetResult(
                this.fromCity.iataCode,
                this.toCity.iataCode,
                this.fromDate
            ).then(res => {
                // console.log(res.data)
                this.result = res.data.data
                this.resultAll = res.data.data
            })
        }
    },
    watch: {
        lowprice(){
            this.filterbyloworice()
        },
        hieghprice(){
            this.filterbyloworice()
        },
        sort(){
            if(this.sort == 'inc'){
                // console.log('تصاعدي')
                this.result = this.result.sort((a,b) => {
                    return a.price.total - b.price.total
                })
            }
            if(this.sort == 'dec'){
                this.result = this.result.sort((a,b) => {
                    return b.price.total - a.price.total
                })
            }
        }
    }
}
</script>

<style scoped>
.right {
    border-left: 1px dashed #777;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.left {
    border-right: 1px dashed #777;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>