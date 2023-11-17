<template>
    <div class="form pt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <!--  -->
                    <ul class="nav nav-pills d-flex justify-content-between bg-white " id="pills-tab" role="tablist">
                        <li class="nav-item " role="presentation">
                            <button  data-index="travel" class="nav-link active"  id="v-pills-travel-tab" data-bs-toggle="pill" data-bs-target="#v-pills-travel" type="button" role="tab" aria-controls="v-pills-travel" aria-selected="true">
                                <span class=" fs-5 ms-2">رحلات</span>
                                <font-awesome-icon :icon="['fas', 'plane-departure']" />
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button  data-index="hotel" class="nav-link "  id="v-pills-hotel-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hotel" type="button" role="tab" aria-controls="v-pills-hotel" aria-selected="true">
                                <span class=" fs-5 ms-2">فنادق</span>
                                <font-awesome-icon :icon="['fas', 'hotel']" style="color: #0a60f5;" />
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-travel" role="tabpanel" aria-labelledby="v-pills-travel-tab">
                            <SubNavPills />
                        </div>
                        <div class="tab-pane fade show " id="v-pills-hotel" role="tabpanel" aria-labelledby="v-pills-hotel-tab">
                        </div>
                    </div>
                    <!--  -->
                </div>
                <div class="col-lg-8 text-center overflow-hidden">
                    <img  src="@/assets/airplane.png" class="img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SubNavPills from "@/components/Home/SubNavPills"
export default {
    name: "FormComponents",
    components: {
        SubNavPills
    }
}
</script>

<style scoped>
.form {
    background-color: #e4f0fe;
}

.img {
    width: 90%;
    height: 500px;
    object-fit: cover;
}

.nav-pills {
    border-radius: 50px;
    padding: 0.4rem 0.8rem;
}

.nav-item {
    /* width: 120px; */
    /* background-color: red; */
    text-align: center;
}

.nav-link {
    padding: 0.2rem 3rem !important;
    border-radius: 40px !important;
    width: 100%;
}
.nav-link:active {
    border-radius: 40px !important;
}
</style>