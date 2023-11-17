<template>
    <div class="navbar">
        <div class="container">
                <div class="d-flex justify-content-between pt-3 pb-3  w-100 align-items-center">
                    <div class="pe-5 d-flex justify-content-between align-items-center">
                        <router-link to="/">
                            <img  src="@/assets/Log.png" class="img" width="140" alt="">
                        </router-link>
                        
                        <div class="lang me-5">English</div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="company ">
                            الشركات
                        </div>
                        <div class="login ">
                            تسجيل الدخول
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navBarComponents",
    methods:{
        
    }
}
</script>

<style scoped>

.navbar {
    background-color: #1a1f71;
    color: white;
}

.company {
    background-color: #196dfb;
    color: white;
    text-align: center;
    margin-left: 1rem;
    padding: 0.5rem 1.5rem;
    cursor: pointer;

}
.login {
    background-color: white;
    color: #196dfb;
    text-align: center;
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    cursor: pointer;

}
.lang {
    /* background-color: #196dfb; */
    border-radius: 25px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.lang:hover {
    background-color: #196dfb;
}
</style>