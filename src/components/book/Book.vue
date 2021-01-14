<!--   根标签有且只有一个 -->

<template>
  <div>
        <h1 align="center">书籍信息</h1>
        名称:<input v-model="param.name" /> 出版时间: <input v-model="param.bdate"/> >>>><input v-model="param.ddate"/>
        适用人群: 幼年<input type="checkbox" v-model="param.peopless" value="幼年"/>
                  中年<input type="checkbox" v-model="param.peopless" value="中年"/>
                  老年<input type="checkbox" v-model="param.peopless" value="老年"/>
       <br/> <button v-on:click="queryData(1,4)">搜索</button>
        <button v-on:click="showAdd">新增</button>
        <table align="center" border="1">
            <tr>
                <td>序号</td>
                <td>书籍名称</td>
                <td>价格</td>
                <td>类型</td>
                <td>适用人群</td>
                <td>地区</td>
                <td>出版时间</td>
                <td>操作</td>
            </tr>
          <!--  遍历数据  -->
          <tr v-for="b in books" :key="b.id">
            <td>{{b.id}}</td>
            <td>{{b.name}}</td>
            <td>{{b.price}}</td>
            <td>{{b.type}}</td>
            <td>{{b.peoples}}</td>
            <td>{{b.area}}</td>
            <td>{{b.createDate}}</td>
            <td>
              <button @click="showUpdate(b.id)">修改</button>
              <button @click="delById(b.id)">删除</button>
            </td>
          </tr>
        </table>

    <font v-for="page in totalPage" :key="page">
      <button  @click="jump(page)">{{page}}</button>
    </font>
    <font>总数据：{{count}}</font>
    <!-- 修改内容   -->
    <Update v-if="showUpdateFlag" :id="updateId"></Update>
    <Add v-on:childQuery="queryData(1,4)" v-if="showAddFlag"></Add>
  </div>
</template>

<script>
   /* 导入 axios  */
   import axios from 'axios';
   import Update from '@/components/book/Update';
   import Add from '@/components/book/Add';
   /*  引入qs */
   import qs from 'qs';
    export default {
        name: "Book",
        data(){ //声明组件的数据
          return{
            books:[],
            count:0,
            size:4,
            totalPage:0,
            updateId:2,
            /* 是否显示相关组件  */
            showUpdateFlag:false,
            showAddFlag:false,
            /*  条件查询值 */
            param:{
              peopless:[]
            }

          }
        },components:{Update,Add}//加载组件
        ,created:function(){//相当于页面加载函数
          this.queryData(1,4);
      },methods:{
        showUpdate:function(id){
          this.showUpdateFlag=true;
          this.showAddFlag=false;
          this.updateId=id;
        },
        showAdd:function(){
          this.showAddFlag=true;
          this.showUpdateFlag=false;
        },
        delById:function(id){
          var bthis=this;
           this.$ajax.delete("http://localhost:8082/api/book/delBookById?id="+id).then(function (res) {
               bthis.queryData(1,4);
           }).catch(function () {
              alert("删除失败");
           })
        },
          jump:function(page){
            this.queryData(page,4);
          },
          queryData:function(currPage,size){
            // 把修改 和新增  隐藏了
            this.showUpdateFlag=false;
            this.showAddFlag=false;
            //处理请求参数
            this.param.currPage=currPage; this.param.size=size;
            //处理复选框  peopless 复选框的值    peoples 后台传值
            if(this.param.peopless!=null&&this.param.peopless.length>0){
                //声明适用人群传值
              var peoples="";
              for (let i = 0; i <this.param.peopless.length ; i++) {
                peoples+=this.param.peopless[i]+",";
              }
              this.param.peoples=peoples;
            }else{
              this.param.peoples="";
            }

            console.log(this.param);
            console.log(qs.stringify(this.param));

            //请求数据  qs
            // 声明this 对象
            var bthis=this;
            axios.post("http://localhost:8082/api/book/list",qs.stringify(this.param)).then(function (res) {
              //书籍的分页数据
              bthis.books=res.data.data.list;
              //书籍的总条数
              bthis.count=res.data.data.count;
              //给总页数赋值
              bthis.totalPage=Math.ceil(bthis.count/bthis.size);
            })
          }
      }
    }
</script>

<style scoped>

</style>
