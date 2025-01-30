<template>
  <div className="wotlk-container">
      <header className="wotlk-banner">
        <h1 className="wotlk-title">World of GuzzlerCraft</h1>
        <h1 className="wotlk-title">A WOTLK+ Realm</h1>
      </header>
      <div className="realm-info-box">
        <h2 className="realm-info-title">Realm Info</h2>
        <p>Realmlist: Coming soon</p>
        <a
          href=""
          @click="downloadPatch"
          download
          className="download-link"
        >
          Patch File Coming Soon
        </a>
        <p>Place downloaded file in the Data folder of your WOTLK directory</p>
      </div>
      <div class="form-container">
        <form @submit.prevent="registerUser">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit" class="register-button">Register</button>
          <p v-if="submitResult" class="error">{{ submitResult }}</p>
        </form>
      </div>
      <main className="wotlk-content">
        <p className="wotlk-intro">
          Welcome to the world of GuzzlerCraft, a place of endless adventure and
          camaraderie. Embark on epic quests, defeat mighty foes, and shape your
          destiny!
        </p>
      </main>
      <ChangeList/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { downloadPatchFile } from "../downloads/PatchfileService";
import ChangeList from "../patchnotes/ChangeList.vue";

export default defineComponent({
  name: 'WotlkServerLandingPage',
  components: { ChangeList },
  methods:{
    downloadPatch(){downloadPatchFile()}
  },
  setup() {
    const username = ref("");
    const password = ref("");
    const submitResult = ref("");

    const registerUser = async () => {
      fetch('https://guzzler-registration.guzzlerdevelopment.workers.dev/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        username: username.value,
        password: password.value
    })
})
.then(response => response.json())
.then(data => {console.log('Success:', data); submitResult.value = "Registered"})
.catch(error => {console.error('Error:', error); submitResult.value = error.response?.data?.error || "Something went wrong."; });
    };

    return {
      username,
      password,
      submitResult,
      registerUser,
    };
  },
});
</script>

<style>
.wotlk-container {
    background: url("../../public/img/wotlk/wotlk-background.png.bmp") no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    font-family: "Friz Quadrata", sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .wotlk-banner {
    text-align: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  }
  
  .wotlk-logo {
    max-width: 400px;
    width: 100%;
  }
  
  .wotlk-title {
    font-size: 2.5rem;
    margin: 10px 0 0;
    text-shadow: 2px 2px 4px #000;
  }

  .realm-info-box {
    position: absolute;
    top: 200px;
    left: 20px;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
    color: #fff;
    width: 200px;
  }
  
  .realm-info-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    text-shadow: 1px 1px 3px #000;
  }
  
  .download-link {
    color: #00bfff;
    text-decoration: none;
    font-weight: bold;
    display: block;
    margin-top: 10px;
    text-align: center;
  }
  
  .download-link:hover {
    text-decoration: underline;
  }
  
  .wotlk-content {
    text-align: center;
    margin-top: 50px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    max-width: 800px;
  }
  
  .wotlk-intro {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .form-container {
  position: absolute;
  top: 200px;
  right: 20px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>