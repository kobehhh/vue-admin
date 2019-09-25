<template>
  <div >
    <div class="Content" v-load="loadmore">
      <!-- <Table
        ref="tableContent"
        border 
        :columns="userColumns"
        :data="userList"
        height="200"
        >
        <template slot-scope="{ row, index }" slot="action">    
          <div class="action-style">
            <Button  type="default" size="small" >修改</Button>
            <Button  type="default" size="small" >删除</Button>
            <Button  type="default" size="small" >重置密码</Button>
          </div>
        </template>
      </Table> -->
      <Table
        ref="tableContent"
        border 
        :columns="companyColumns"
        :data="comList"
        height="200"
        >
        <template slot-scope="{ row, index }" slot="action">    
          <div class="action-style">
            <Button  type="default" size="small" >修改</Button>
            <Button  type="default" size="small" >删除</Button>
            <!-- <Button  type="default" size="small" >重置密码</Button> -->
          </div>
        </template>   
      </Table>
    </div>
  </div>
</template>

<script>
import { userColumns,companyColumns } from '@/views/common/const.js'
import { getUser,getCompanyByPage } from '@/api/system.js'
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      userColumns:userColumns,
      companyColumns:companyColumns,
      userList:[],
      currentPage:1,
      pageSize:10,
      userName:'',
      role:'',
      groupId:'',
      total:0,
      list:[],
      oldList:[],
      newList:[],
      comList:[],
      pages:null,
    }
  },
  methods: {
    _getUser() {
    let params = {
      page: this.currentPage,
      limit: this.pageSize,
      userName: this.userName,
      companyId: 'ALL',
      roleCode: this.role,
      groupId: this.groupId,
      loginName:'1000'
      }
      getUser(params).then(res => {
        if(res.code == 0) {
          this.total = res.data.total
          this.userList = [...this.userList,...res.data.records]
          this.oldList = this.userList.map(v => v.id)
          this.newList = this.userList.slice()
          this.$nextTick(() => {
            this.setSort()
            this.more()
          })
        }
        this.currentPage += 1
      })
    },
    _getCompanyByPage() {
      getCompanyByPage({
        page:this.currentPage,
        limit:this.pageSize
      }).then(res => {
        if(res.code == 0) {
          this.comList = this.comList.concat(res.data.records)
          this.pages =  res.data.pages
        }
      })
    },
    loadmore() {
      this.currentPage += 1
      if(this.currentPage > this.pages) {
        return
      }
      this._getCompanyByPage()
    },
    //拖拽table
    setSort() {
      const el = this.$refs.tableContent.$el.querySelectorAll('.ivu-table-body > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.userList.splice(evt.oldIndex, 1)[0]
          this.userList.splice(evt.oldIndex, 0, targetRow)

          // for show the changes, you can delete in you code
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    },
    more() {
      // const table = this.$refs.tableContent
      // let dom = document.querySelector('.tableContent')
      // // const el = this.$refs.tableContent.$el.querySelectorAll('.ivu-table-body > table > tbody')[0]
      // dom.addEventListener('scroll',function() {
      //   console.log(dom.scrollHeight)
      // })
      // console.log(el)
    }
  },
  mounted() {
    this._getUser()
    this._getCompanyByPage()
  }
}
</script>

<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
.tableContent {
}
</style>