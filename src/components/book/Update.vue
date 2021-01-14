<template>
  <div>
    <h1 align="center">书籍信息{{id}}</h1>

    <table border="1" align="center">
      <tr>
        <td>名称:</td>
        <td><input v-model="book.name"/></td>
      </tr>
      <tr>
        <td>价格:</td>
        <td><input v-model="book.price"/></td>
      </tr>
      <tr>
        <td>适用人群:</td>
        <td>
          幼年<input type="checkbox" v-model="book.peopless" value="幼年"/>
          中年<input type="checkbox" v-model="book.peopless" value="中年"/>
          老年<input type="checkbox" v-model="book.peopless" value="老年"/>
        </td>
      </tr>
      <tr>
        <td>类型:</td>
        <td>
          电子版<input type="radio" v-model="book.type" value="0"/>
          纸质版<input type="radio" v-model="book.type" value="1"/>
        </td>
      </tr>
      <tr>
        <td>出版时间:</td>
        <td><input type="text" v-model="book.createDate"/></td>
      </tr>
      <tr>
        <td>销售地区:</td>
        <td>
          <select v-model="book.area">
            <option value="-1">请选择</option>
            <option value="0">河南</option>
            <option  value="1">河北</option>
            <option value="2">山东</option>
            <option value="3">东北</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="button" @click="updateBook" value="修改"/>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Update",
        props:["id"],

       data(){
          return{
                book:{}
          }
       },methods:{
        updateBook:function(){

        },
        queryBookById(id){
             var uthis=this;
            axios.get("http://localhost:8082/api/book/queryBookById?id="+id).then(function (res) {
                uthis.book=res.data.data;
                //处理复选项的回显
              uthis.book.peopless=res.data.data.peoples.split(",");
            })
        }
      },created:function () {// 相当于页面加载事件
        this.queryBookById(this.id);
      },watch:{ //监听事件   属性变化
         id:function(){
           this.queryBookById(this.id);
         }
      }
    }
</script>

<style scoped>

</style>
