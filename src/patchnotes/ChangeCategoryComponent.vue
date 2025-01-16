<template>
    <div class="category">
      <h3 :class="category.typeName">{{ category.title }}</h3>
      <ul>
        <ChangeCategoryComponent
          v-for="(x, index) in category.innerCategories"
          :key="index"
          :category="x"
        />
      </ul>
      <ul>
        <li v-for="(change, index) in category.changes" :key="index">
          <DisplayedChange :change="change" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import DisplayedChange from './DisplayedChange.vue';
  
  export default {
    name: 'ChangeCategoryComponent',
    components: {
      DisplayedChange,
    },
    props: {
      category: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .patch-note h2 {
    color: #ffcc00;
    border-bottom: 1px solid #ffcc00;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
  
  .category h3 {
    color: #ff9900;
    margin-bottom: 5px;
  }
  
  .category ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .category ul li {
    margin-bottom: 5px;
  }

  .druid{
    color:#ff9900;
  }

  .category h3 .deathknight{
    color:darkred;
  }
  </style>
  