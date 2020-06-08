<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link tag="li" class="nav-item" exact to="/" active-class="active">
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/cars" active-class="active">
                        <a class="nav-link">Cars</a>
                    </router-link>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>