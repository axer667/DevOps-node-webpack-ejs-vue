<template>
  <div id="event-handling">
    <p>{{ counter }}</p>
    <p>{{ message }}</p>
    <input type="text" v-on:input="setMessage" />
    <ul>
      <li v-for="tag in tags">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>`

<script>
export default {
  data() {
    return {
      message: "It's Hell!!!",
      counter: 0,
      tags: ['Vue', 'Front-end', 'JavaScript']
    }
  },

  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },

  methods: {
    setMessage(event){
      this.message = event.target.value;
    }
  }
};
</script>