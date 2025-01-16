<template>
  <div class="category">
    <li @click="toggleExplanation">
      <div>
        {{ change.text }}
        <div v-if="showingExplanation && change.explanation !== ''">
          {{ change.explanation }}
        </div>
      </div>
    </li>
  </div>
  </template>
  
  <script>
  export default {
    name: 'DisplayedChange',
    props: {
      change: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        showingExplanation: false,
      };
    },
    methods: {
      toggleExplanation() {
        this.showingExplanation = !this.showingExplanation;
      },
    },
  };
  </script>
  
  <style scoped>
  .category ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .category li {
    margin-bottom: 5px;
  }
  </style>
  