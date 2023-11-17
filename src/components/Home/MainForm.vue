<template>
    <div class="px-3">
        <div class="from bg-white p-2 position-relative">
            <div class="">
                <font-awesome-icon :icon="['fas', 'plane-departure']" style="color: #ff56a1;" />
                <span class="me-2 spexial-color">من</span>
            </div>
            <input type="text" v-model="from" placeholder="المدينة أو المطار" class="input_class mt-2">
            <span class="text-danger fw-bold" v-if="messagefrom != ''">{{ messagefrom }}</span>
            <div class="resultfrom" v-if="showresult">
                <div class="d-flex justify-content-center pt-3" v-if="waitingfrom">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div v-else>
                    <div v-if="rsultfromfrom.length > 0">
                        <div @click="selectitem(item)" class="iteminrsultfromfrom d-flex pt-2 justify-content-between px-3 align-items-center mb-2" v-for="item in rsultfromfrom " :key="item.id">
                            <div>
                                <h5 class="mb-1 fw-bold">{{ item.name }}</h5>
                                <p style="font-size: 12px;" class="mb-0 text-muted">
                                    <span v-if="item.subType == 'AIRPORT'">حميع المطارات</span>
                                    <span v-else>{{ item.address.countryName }}</span>
                                </p>
                            </div>
                            <div>{{ item.iataCode }}</div>
                        </div>
                    </div>
                    <div class="text-center px-3 pb-3" v-else>
                        لا يوجد نتائج
                    </div>
                </div>
            </div>
        </div>
        <div class="fromtow p-2 position-relative">
            <div>
                <font-awesome-icon :icon="['fas', 'plane-arrival']" style="color: #ff56a1;" />
                <span class="me-2 spexial-color">إلى</span>
            </div>
            <input type="text" placeholder="المدينة أو المطار" v-model="to" class="input_class mt-2">
            <span class="text-danger fw-bold" v-if="messagefromto != ''">{{ messagefromto }}</span>

            <div class="resultfromtoclass" v-if="showresultto">
                <div class="d-flex justify-content-center pt-3" v-if="waitingfromto">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div v-else>
                    <div v-if="rsultfromfromto.length > 0">
                        <div @click="selectitemto(item)" class="iteminrsultfromfrom d-flex pt-2 justify-content-between px-3 align-items-center mb-2" v-for="item in rsultfromfromto " :key="item.id">
                            <div>
                                <h5 class="mb-1 fw-bold">{{ item.name }}</h5>
                                <p style="font-size: 12px;" class="mb-0 text-muted">
                                    <span v-if="item.subType == 'AIRPORT'">حميع المطارات</span>
                                    <span v-else>{{ item.address.countryName }}</span>
                                </p>
                            </div>
                            <div>{{ item.iataCode }}</div>
                        </div>
                    </div>
                    <div class="text-center px-3 pb-3" v-else>
                        لا يوجد نتائج
                    </div>
                </div>
            </div>
        </div>

        <div class="date mt-2 d-flex justify-content-between">
            <div class="bg-white" style="width: 49%;">
                <p class="mb-1 px-3 pt-1">تاريخ المغادرة</p>
                <div class="d-flex justify-content-center">
                    <div  class=" w-50 d-flex justify-content-center align-items-center"><h5>{{ date1 == '' ? date.getDate() : date1.slice(8,10) }}</h5></div>
                    <div class=" w-50 text-center">
                        <h5 > {{ date1 == '' ? monthsOfYear[date.getMonth()] : monthsOfYear[parseInt(date1.slice(5,7)) -1 ] }}</h5>
                        <h4>{{ date1 == '' ? date.getFullYear() : date1.slice(0,4) }}</h4>
                    </div>
                </div>
                <input type="date" class=" dateall"  v-model="date1">
                
            </div>
            <div class="bg-white" style="width: 49%;">
                <p class="mb-1 px-3 pt-1">تاريخ العودة</p>
                <div class="d-flex justify-content-center">
                    <div  class=" w-50 d-flex justify-content-center align-items-center"><h5>{{ date2 == '' ? date.getDate() : date2.slice(8,10) }}</h5></div>
                    <div class=" w-50 text-center">
                        <h5 > {{ date2 == '' ? monthsOfYear[date.getMonth()] : monthsOfYear[parseInt(date2.slice(5,7)) -1 ] }}</h5>
                        <h4>{{ date2 == '' ? date.getFullYear() : date2.slice(0,4) }}</h4>
                    </div>
                </div>
                
                <input type="date" class=" dateall"  v-model="date2">
            </div>
        </div>

        <div class="number mt-2 d-flex justify-content-between">
            <div class="bg-white" style="width: 32%;">
                <h5 class="px-3 pt-2" style="color: blue;">بالغ</h5>
                <div class="px-2 d-flex justify-content-around ">
                    <div class="d-flex flex-column ms-2">
                        <font-awesome-icon :icon="['fas', 'chevron-up']" style="color: #ff56a1;" />
                        <font-awesome-icon :icon="['fas', 'chevron-down']"  style="color: #ff56a1;"/>
                        
                    </div>
                    <h5 class="me-2">1</h5>
                </div>
            </div>
            <div class="bg-white" style="width: 32%;">
                <h5 class="px-3 pt-2" style="color: blue;">طفل</h5>
                <div class="px-2 d-flex justify-content-around ">
                    <div class="d-flex flex-column ms-2">
                        <font-awesome-icon :icon="['fas', 'chevron-up']" style="color: #ff56a1;" />
                        <font-awesome-icon :icon="['fas', 'chevron-down']"  style="color: #ff56a1;"/>
                        
                    </div>
                    <h5 class="me-2">0</h5>
                </div>
            </div>
            <div class="bg-white " style="width: 32%;">
                <h5 class="px-3 pt-2" style="color: blue;">رضيع</h5>
                <div class="px-2 d-flex justify-content-around ">
                    <div class="d-flex flex-column ms-2">
                        <font-awesome-icon :icon="['fas', 'chevron-up']" style="color: #ff56a1;" />
                        <font-awesome-icon :icon="['fas', 'chevron-down']"  style="color: #ff56a1;"/>
                        
                    </div>
                    <h5 class="me-2">0</h5>
                </div>
            </div>
        </div>

        <div class="mt-2 mb-3">
            <ul class="nav nav-pills d-flex justify-content-center p-0 bg-white " id="pillstype-tab" role="tablist">
                <li class="nav-item " style="width: calc(100% / 3);" role="presentation">
                    <button style="border-radius: 0; width: 100%;"  data-index="travel" class="nav-link active"  id="v-pillstype-travel-tab" data-bs-toggle="pill" data-bs-target="#v-pillstype-travel" type="button" role="tab" aria-controls="v-pillstype-travel" aria-selected="true">
                        <span class=" fs-5 ms-2">السياحة</span>
                    </button>
                </li>
                <li class="nav-item " role="presentation" style="width: calc(100% / 3);">
                    <button style="border-radius: 0; width: 100%;"  data-index="tourism" class="nav-link "  id="v-pillstype-tourism-tab" data-bs-toggle="pill" data-bs-target="#v-pillstype-tourism" type="button" role="tab" aria-controls="v-pillstype-tourism" aria-selected="true">
                        <span class=" fs-5 ms-2">الأعمال</span>
                    </button>
                </li>
                <li class="nav-item " role="presentation" style="width: calc(100% / 3);">
                    <button style="border-radius: 0; width: 100%;"  data-index="first" class="nav-link "  id="v-pillstype-first-tab" data-bs-toggle="pill" data-bs-target="#v-pillstype-first" type="button" role="tab" aria-controls="v-pillstype-first" aria-selected="true">
                        <span class=" fs-5 ms-2">الأولى</span>
                    </button>
                </li>
            </ul>
        </div>

        <div>
            <!--  -->
            <button @click="GoToListTravel()"  :disabled="from == '' || to == ''" style="width: 100%;" class="px-3 mb-2 fs-5 btn btn-primary">ابحث عن رحلة</button>
        </div>
    </div>
</template>

<script>
import CityService from '@/services/CityService'
export default {
    name: "MainForm",
    data() {
        return {
            from : "",
            messagefrom:"",
            waitingfrom: null,
            showresult : null,
            rsultfromfrom: [],
            to:"",
            messagefromto:"",
            waitingfromto: null,
            showresultto : null,
            rsultfromfromto: [],

            daysOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthsOfYear : ["كانون الثاني", "شباط", "أذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين أول", "تشرين ثاني", "كانون اول"],

            date: new Date(),
            date1: '',
            date2: ""
        }
    },
    methods: {
        selectitem(item){
            // this.enogh = true
            this.from = item.name
            this.showresult = null
            this.$store.commit('SET_FROMCITY', item)
        },
        selectitemto(item){
            // this.enogh = true
            this.to = item.name
            this.showresultto = null
            this.$store.commit('SET_TOCITY', item)

        },
        async filter(data){
            this.waitingfrom = true
            await CityService.SearchCiteies(data).then(res => {
                // console.log(res.data.data)
                // console.log(res.data.data[0])
                this.rsultfromfrom = res.data.data
            })
            this.waitingfrom = null
        },
        async filterto(data){
            this.waitingfromto = true
            await CityService.SearchCiteies(data).then(res => {
                // console.log(res.data.data)
                // console.log(res.data.data[0])
                this.rsultfromfromto = res.data.data
            })
            this.waitingfromto = null
        },

        GoToListTravel(){
            // console.log(this.date1)
            let datetransparent = ''
            if(this.date1 == ''){
                let datetransparent1  =''
                datetransparent1 = new Date()
                datetransparent1.setDate(datetransparent1.getDate()+1)
                datetransparent = datetransparent1.toISOString().slice(0,10)
            }else {
                if(new Date(this.date1) <= new Date() ){
                    let datetransparent1  =''
                    datetransparent1 = new Date()
                    datetransparent1.setDate(datetransparent1.getDate()+1)
                    datetransparent = datetransparent1.toISOString().slice(0,10)
                }else {
                    datetransparent = this.date1
                }
                
            }
            this.$store.commit('SET_FROMDATE', datetransparent)
            if(this.date2 != ''){
                this.$store.commit('SET_TODATE', this.date2)
            }
            this.$router.push({ name: "Result" });
        }
    },
    watch : {
        from(){
            if(this.from.length >= 3) {
                this.showresult = true
                this.messagefrom = ''
                // if(!this.enogh) {
                    this.filter(this.from)
                // }
                
            }else {
                this.messagefrom = "Showd Be Than 3 Characters"
                this.showresult = null
            }
        },
        to(){
            if(this.to.length >= 3) {
                this.showresultto = true
                this.messagefromto = ''
                // if(!this.enogh) {
                    this.filterto(this.to)
                // }
                
            }else {
                this.messagefromto = "Showd Be Than 3 Characters"
                this.showresultto = null
            }
        }
    }
}
</script>

<style scoped>
.input_class {
    background-color: transparent;
    width: 100%;
    padding: 0.5rem 1rem;
    color: #777;
    font-size: 20px !important;
    border: none !important;
}


.input_class:focus-visible {
    border: none !important;
}


.input_class::placeholder {
    color: #777;
    opacity: 1 !important;
    font-size: 20px !important;
}

.fromtow {
    background-color: #f1f1f1;
}

.spexial-color {
    color: #ff56a1;
}

.resultfrom {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    max-height: 300px;
    overflow-y: auto;
    z-index: 99;
}
.resultfromtoclass {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    max-height: 300px;
    overflow-y: auto;
}

.iteminrsultfromfrom {
    cursor: pointer;
}
.iteminrsultfromfrom:hover {
    background-color: blue;
    color: white !important;
}
.iteminrsultfromfrom:hover .text-muted {
    color: white !important;
}
.dateall {
    width: 100% !important;
    border: none;
}
</style>