<template>
    <div class="flex min-h-screen flex-col">
        <LayoutTheHeader />
        <main class="flex-1 pt-16">
            <slot />
        </main>
        <LayoutTheFooter />
    </div>
</template>
