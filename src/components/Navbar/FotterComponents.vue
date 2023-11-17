<template>
    <div class="bg-white p-5">
        <div class="container">
            <div class="row justify-content-around pt-4 pb-4">
                <div class="col-lg-2">
                    <img  src="@/assets/logofooter.png" class="img" width="140" alt="">
                    <img  src="@/assets/paymentMethods.png" class="img mt-5" alt="">
                </div>
                <div class="col-lg-2">
                    <h5 class="linktitle">فلاي أكيد</h5>
                    <router-link class="link text-decoration-none mt-4" to="#">من نحن</router-link>
                    <router-link class="link text-decoration-none mt-3" to="#">فلاي أكيد أعمال</router-link>
                </div>
                <div class="col-lg-2">
                    <h5 class="linktitle">الدعم</h5>
                    <router-link class="link text-decoration-none mt-4" to="#">تواصل معنا </router-link>
                    <router-link class="link text-decoration-none mt-3" to="#">الاأسئلة الشائعة</router-link>
                </div>
                <div class="col-lg-2">
                    <h5 class="linktitle">الأمور القانونية</h5>
                    <router-link class="link text-decoration-none mt-4" to="#"> الشروط والأحكام</router-link>
                    <router-link class="link text-decoration-none mt-3" to="#">شروط الخصوصية</router-link>
                </div>
                <div class="col-lg-2">
                    <h5 class="linktitle">روابط التحميل </h5>
                    <img  src="@/assets/apple_store.png" class="mb-3 mt-4" width="200" alt="">
                    <img  src="@/assets/google_play.png" class="" width="200" alt="">
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FotterComponents"
}
</script>

<style scoped>
.link{
    color: #1a1f71;
    display: block;
    font-size: .85em;
}

.linktitle {
    color: #1a1f71;
    font-size: 1.2em;
}
</style>