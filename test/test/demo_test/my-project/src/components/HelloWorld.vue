<template>
  <div>
        <div class="nav">
        <div class="navLeft">
            <div class="logo">
                <a href="">校宝在线</a>
            </div>
            <div class="language"></div>
        </div>
        <div class="navRight">
            <div class="pages ">
                <div class="pageOne">我的任务</div>
            </div>
            <div class="line">|</div>
            <div class="user"></div>
        </div>
    </div>

    <div class="backGround">
        <div class="box">
            <div class="boxNav">
                <ul class="tab">
                    <li class="tab-item ">名称一好长好长好长好长好长好长好长好长好长好长好长好长</li>
                    <li class="tab-item clearfix">名称二</li>
                </ul>
            </div>
            <div class="boxInner">
                <div class="questionnaire questionnaireOne">
                    <div class="quState">
                        <p >{{boxState[info.lists[0].courseStatus]}}</p>
                    </div>
                    <div class="quTitle">
                        <p>标题:新高考7选3</p>
                    </div>
                    <div class="quTime">
                        <p>时间：2018-05-11 12：00 至 2018-05-18 12：00</p>
                    </div>
                    <div class="quExplain">
                        <p>这里是选课说明，很长很长的选课说明选课说明选课说明选课说明选课说明选课说明选课说明选课说明选课说明选课说明选课说明选课说明选课说明明选课说明选课说明选课说明选课说明选课说明选课说明选课说明选课说明</p>
                    </div>
                    <div class="trLine"></div>
                    <div class="quBody">
                        <ul class="innerDiv">
                           <li v-for="(item, index) in info.lists">
                             <p>Q{{item.ordNum}}、</p><p>{{item.title}}(最多选{{item.max}}个选项)</p><span v-if="item.whenMore==='more'">(最多选{{item.max}}个!)</span><span v-if="item.whenNone==='none'">内容不能为空！</span>
                             <ul>
                              <li v-for="(subItem, indexQu) in item.Qu">
                                <div v-if="item.type==='1'">
                                 <input type="checkbox" :name="'repeat'+index" :value="subItem.value"  :checked="subItem.status" v-model="item.status" @change="changeChe(subItem)"><p>{{subItem.value}}</p></div>
                                <div v-else>
                                <input type="radio" :name="'repeat'+index"  :value="subItem.value" :checked="subItem.status"  @change="changeSel(subItem,item)"><p>{{subItem.value}}</p></div>
                             </li>
                             </ul>
                           </li>
                        </ul>
                    </div>
                    <div>
                            <input type="button" value="提交" class="submit" @click="ifMore(info.lists);ifNone(info.lists);submit(info.lists,loading,boxState)">
                            <p v-html="loading"></p>
                        </div>
                </div>
                <!-- <div class="questionnaire questionnaireTwo">这是调研二</div> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      loading: "", //提交后控制loading特效
      boxState: {
        1: "未开始",
        2: "进行中",
        3: "已结束"
      }, 
      //控制左上角页面状态
      //   ordNum:题目ID/序号
      //   type:题目类型(1-复选题;2-单选题)
      //   title:题目名称
      //   num:题目的选项数目
      //   max:复选题最多选项数目
      //   min:复选题最少选项数目
      //   status:返回的时候记录选项的具体数值
      //   whenMore:提交的时候校验是否选多了
      //   whenNone:提交的时候校验是否未选
      //   Qu:各个选项(id:选项的id;value:选项的内容;status:选项所处的状态(true-已选;false-未选))
      params: {
          tab:[
              {
                  
              }
          ]
      },
      info: {
        courseStatus: 1,
        lists: [
          {
            ordNum: "1",
            type: "1",
            title: "题目名称有点长有点长有点长?",
            num: "3",
            max: "2",
            min: "1",
            status: [],
            whenMore: "",
            whenNone: "",
            Qu: [
              { id: "1", value: "选项一", status: false },
              { id: "2", value: "选项二", status: false },
              { id: "3", value: "选项三", status: false }
            ]
          },
          {
            ordNum: "2",
            type: "2",
            title: "题目名称有点长有点长有点长?",
            num: "2",
            max: "1",
            min: "1",
            status: [],
            whenMore: "",
            whenNone: "",
            Qu: [
              { id: "1", value: "选项一", status: false },
              { id: "2", value: "选项一", status: false }
            ]
          }
        ]
      }
    };
  },
  methods: {
    //单选效果
    changeSel(sub, parent) {
      parent.Qu.forEach(item => {
        if (item.id == sub.id) {
          item.status = true;
        } else {
          item.status = false;
        }
      });
    },
    //点击后改变复选框的checked
    changeChe(subItem) {
      subItem.status = !subItem.status;
    },
    //校验:选多了
    ifMore(lists) {
      lists.forEach((item, index) => {
        var ifMore = 0;
        item.Qu.forEach((itemQu, indexQu) => {
          if (itemQu.status == true) {
            ifMore++;
          }

          if (ifMore > item.max) {
            item.whenMore = "more";
            console.log(`ifMore:${ifMore}`);
          } else {
            item.whenMore = "";
          }
        });
      });
    },
    //校验:是否未选
    ifNone(lists) {
      lists.forEach((item, index) => {
        var ifNone = item.num;
        item.Qu.forEach((itemQu, indexQu) => {
          if (itemQu.status == false) {
            ifNone--;
          }

          if (ifNone == "0") {
            item.whenNone = "none";
          } else {
            item.whenNone = "";
          }
        });
      });
    },
    //提交事件
    submit(lists, loading, boxState) {
      var ifOk = 0;
      lists.forEach((item, index) => {
        if (item.whenMore == "" && item.whenNone == "") {
          ifOk++;
        }
      });
      if (ifOk == lists.length) {
        lists[0].courseStatus = "3";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/common.css";
@import "../css/index.css";
</style>
