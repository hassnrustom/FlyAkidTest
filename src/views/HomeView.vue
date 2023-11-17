<template>
    <div>
        <FormComponents />
        <TestComponents />
        <UsersComponents />
        <!-- <TakeTravel /> -->
    </div>
</template>

<script>
import FormComponents from "@/components/Home/FormComponents"
import TestComponents from "@/components/Home/TestComponents"
import UsersComponents from "@/components/Home/UsersComponents"
// import TakeTravel from "@/components/Home/TakeTravel"
export default {
    name: "HomeView",
    components: {
        FormComponents,
        TestComponents,
        UsersComponents,
        // TakeTravel
    }
}
</script>