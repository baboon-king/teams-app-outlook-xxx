<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import DxButton from "devextreme-vue/button";
import { ref } from "vue";

const btnText = ref("Click me");
const sayHelloWorld = () => {
  if (btnText.value === "Click me") {
    btnText.value = "ClicKed";
    return;
  }
  if (btnText.value === "ClicKed") {
    btnText.value = "Click me";
    return;
  }
};
</script>

<template>
  <header>
    <div class="wrapper">
      <header class="ms-welcome__header ms-bgColor-neutralLighter">
        <img width="90" height="90" src="/appPackage/assets/logo-filled.png" alt="Contoso" title="Contoso" />
        <h1 class="ms-font-su">Welcome</h1>
      </header>
      <section id="sideload-msg" class="ms-welcome__main">
        <h2 class="ms-font-xl">
          Please
          <a
            target="_blank"
            href="https://learn.microsoft.com/office/dev/add-ins/testing/test-debug-office-add-ins#sideload-an-office-add-in-for-testing"
            >sideload</a
          >
          your add-in to see app body.
        </h2>
      </section>
      <main id="app-body" class="ms-welcome__main" style="display: none">
        <h2 class="ms-font-xl">Discover what Office Add-ins can do for you today!</h2>
        <ul class="ms-List ms-welcome__features">
          <li class="ms-ListItem">
            <i class="ms-Icon ms-Icon--Ribbon ms-font-xl"></i>
            <span class="ms-font-m">Achieve more with Office integration</span>
          </li>
          <li class="ms-ListItem">
            <i class="ms-Icon ms-Icon--Unlock ms-font-xl"></i>
            <span class="ms-font-m">Unlock features and functionality</span>
          </li>
          <li class="ms-ListItem">
            <i class="ms-Icon ms-Icon--Design ms-font-xl"></i>
            <span class="ms-font-m">Create and visualize like a pro</span>
          </li>
        </ul>
        <p class="ms-font-l">Modify the source files, then click <b>Run</b>.</p>
        <div role="button" id="run" class="ms-welcome__action ms-Button ms-Button--hero ms-font-xl">
          <span class="ms-Button-label">Run</span>
        </div>
        <p><label id="item-subject"></label></p>
      </main>

      <DxButton :text="btnText" @click="sayHelloWorld" />
      <nav>
        <RouterLink to="/">Taskpane Home</RouterLink>
        <RouterLink to="/about">Taskpane About</RouterLink>
        <a href="/">Home</a>
        <a href="/commands/">Commands</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
