<template>
    <div class="app">
        <nav class="navbar">
            <h1>Student Task Manager</h1>

            <div class="links">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/courses">Courses</RouterLink>
                <RouterLink to="/tasks">Tasks</RouterLink>
            </div>
        </nav>

        <main class="content">
            <RouterView />
        </main>

        <footer class="footer">
    Student Task Manager © 2026
</footer>

    </div>
</template>

<style scoped>
.app {
    font-family: Arial, sans-serif;
}

.navbar {
    background-color: #2c3e50;
    color: white;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar h1 {
    font-size: 22px;
    margin: 0;
}

.links {
    display: flex;
    gap: 16px;
}

.links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.links a:hover {
    text-decoration: underline;
}

.content {
    padding: 24px;
}

.footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 40px;
}

</style>