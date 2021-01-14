<template>
      <div>
            <h1>{{message}}</h1>
        <button v-on:click="changes">切换</button>
      </div>
</template>

<script>
    export default {
        name: "Child",
        props:['message'] //接收 父组件的传值
        ,created(){ //知道的key的作用    绝对是否重新渲染组件
          alert(this.message);
      },methods:{
        changes:function(){
          //改变 message值  （父组件）
          this.$emit("fttt",'test');
        }
      }/*,watch:{
          message:function(){
            alert(this.message)
          }
      }*/
    }
</script>

<style scoped>

</style>
