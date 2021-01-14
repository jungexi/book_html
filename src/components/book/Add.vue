<template>
    <div>
        <h1 align="center">书籍信息</h1>

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
                  <input type="button" @click="add" value="新增"/>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    export default {
        name: "Add",
      data(){
          return{
            book:{
              peopless:[],
              area:-1
            }
          }
      },methods:{
          add:function(){

            //处理一下 复选框
            var peoples="";
            if(this.book.peopless.length>0){
              for (var i = 0; i <this.book.peopless.length ; i++) {
                  peoples+=this.book.peopless[i]+",";
              }
              //处理一下 多余的，hao
              peoples=peoples.substr(0,(peoples.length-1));
            }
            this.book.peoples=peoples;
            console.log(this.book);
            var athis=this;
            //发送请求
            axios.post("http://localhost:8082/api/book/add",qs.stringify(this.book)).then(function (res) {
               alert("新增成功");
               //调用父类的查询方法
              athis.$emit('childQuery')
            }).catch(function () {
              alert("新增异常");
            })

          }
      }
    }
</script>

<style scoped>

</style>
