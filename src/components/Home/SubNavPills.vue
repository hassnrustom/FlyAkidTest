<template>
    <div class="mt-3">
        <ul class="nav nav-pills d-flex justify-content-between bg-white " id="pillstow-tab" role="tablist">
            <li class="nav-item " role="presentation">
                <button  data-index="travel" class="nav-link active"  id="v-pillstow-travel-tab" data-bs-toggle="pill" data-bs-target="#v-pillstow-travel" type="button" role="tab" aria-controls="v-pillstow-travel" aria-selected="true">
                    <span class="fs-5 ">ذهاب فقط</span>
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button  data-index="hotel" class="nav-link "  id="v-pillstow-hotel-tab" data-bs-toggle="pill" data-bs-target="#v-pillstow-hotel" type="button" role="tab" aria-controls="v-pillstow-hotel" aria-selected="true">
                    <span class="fs-5 ">ذهاب وعودة</span>
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button  data-index="go" class="nav-link "  id="v-pillstow-go-tab" data-bs-toggle="pill" data-bs-target="#v-pillstow-go" type="button" role="tab" aria-controls="v-pillstow-go" aria-selected="true">
                    <span class="fs-5 ">وجهات متعددة</span>
                </button>
            </li>
        </ul>
        <div class="tab-content mt-3" id="pillstow-tabContent">
            <div class="tab-pane fade show active" id="v-pillstow-travel" role="tabpanel" aria-labelledby="v-pillstow-travel-tab">
                <MainForm/>
            </div>
            <div class="tab-pane fade show " id="v-pillstow-hotel" role="tabpanel" aria-labelledby="v-pillstow-hotel-tab">
            </div>
            <div class="tab-pane fade show " id="v-pillstow-go" role="tabpanel" aria-labelledby="v-pillstow-go-tab">
            </div>
        </div>
    </div>
</template>

<script>
import MainForm from "./MainForm.vue"
export default {
    name: "SubNavPills",
    components : {
        MainForm
    }
}
</script>

<style scoped>

.nav-pills {
    border-radius: 50px;
    padding: 0.4rem 0.8rem;
}

.nav-item {
    /* background-color: red; */
    text-align: center;
}

.nav-link {
    padding: 0.2rem 0.5rem !important;
    border-radius: 40px !important;
    width: 100%;
}
.nav-link:active {
    border-radius: 40px !important;
}
</style>