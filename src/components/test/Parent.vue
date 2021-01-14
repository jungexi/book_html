<template>
    <div>

        <h1>父组件{{message}}</h1>

        <button @click="setMessage('学生信息')">学生列表</button>
        <button @click="setMessage('教师信息')">教师列表</button>
        <Child :message="message" :key="message" v-on:fttt="setMessage"></Child>


    </div>
</template>

<script>
  /*  引入子组件 */
  import Child from "@/components/test/Child";
    export default {
        name: "Parent",
      components:{Child},
      data(){
          return{
             message:""
          }
      },methods:{
        setMessage:function (mes) {
          this.message=mes;
        }
      }
    }
</script>

<style scoped>

</style>
