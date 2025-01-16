<template>
  <div>
    <div class="patch-notes">
      <div class="patch-note">
        <h1>Changes</h1>
        <div v-for="category in categories" :key="category.title">
          <ChangeCategoryComponent :category="category"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import type { ChangeCategory } from './Change';
import GetPatchNotes from './PatchNotesService';
import ChangeCategoryComponent from './ChangeCategoryComponent.vue';

export default defineComponent({
  name: 'ChangeList',
  components: {
    ChangeCategoryComponent,
  },
  setup() {
    const categories = ref<ChangeCategory[]>([]);

    // Fetch patch notes when the component is mounted
    onMounted(() => {
      categories.value = GetPatchNotes();
    });

    return {
      categories,
    };
  },
});
</script>

<style scoped>
/* Include your styles here, as you had in React */
.patch-notes {
  font-family: 'Arial', sans-serif;
    color: #ffd700;
    background-color: #1a1a1a;
    padding: 20px;
    border: 1px solid #333;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
}

.patch-note {
  margin-bottom: 20px;
}
</style>
