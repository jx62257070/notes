$(function () {
            //选项卡特效
            $(".tab-item").mouseenter(function () {
                $(this).addClass("active").siblings().removeClass("active");
                var idx = $(this).index();
                $(".questionnaire").eq(idx).addClass("selected").siblings().removeClass("selected");
            });
            //校验选多了
            $(".choose input").click(function () {
                if ($(this).parent().children('[checked=""]').length > 3) {
                    alert("最多能选3个");
                    $(this).attr("checked", false);
                }
            });



            var json =[
                {
                    ordNum:'1',
                    type:'1',
                    title:'题目名称有点长有点长有点长?',
                    num:'3',
                    max:'2',
                    min:'1',
                    Qu:[{id:'1',value:'选项一',staue:''},{id:'2',value:'选项二',staue:''},{id:'3',value:'选项三',staue:''}]
                },
                {
                    ordNum:'2',
                    type:'2',
                    title:'题目名称有点长有点长有点长?',
                    num:'3',
                    max:'1',
                    min:'1',
                    Qu:[{id:'1',value:'选项一',staue:''},{id:'2',value:'选项一',staue:''}]
                }
            ]
            var QuState=new Array();   //记录选项按钮状态
            json.forEach(function(item){
                let jsonState=[{
                    ordNum:item.ordNum,
                    max:item.max,
                    min:item.min,
                    Qu:[]
                }];


               


                $.merge(QuState,jsonState);
                
                var ul=$('<ul></ul>')
                if(item.type==1){
                            //多选题目标题
                            let QuUl=$('<ul class="QuUl"></ul>');
                            let li=$('<li></li>');
                            $(`<div class="qu"><p>Q${item.ordNum}、</p><p>${item.title}</p><p>（最多选${item.max}项）</p><p class="tip">题目还没选择！</p></div>`).appendTo(li);
                            li.appendTo(QuUl);
                            li=$('<li></li>');
                            //多选题选项
                            item.Qu.forEach(function(zheQu){
                            $(`<div class="Qus"><input type="checkbox" name="repeat" value=${zheQu}><p>${zheQu.value}</p></div>`).appendTo(li);
                            li.appendTo(QuUl); 
                            })
                            QuUl.appendTo(ul);
                        }else{
                            //单选题目标题
                            let QuUl=$('<ul class="QuUl"></ul>');
                            let li=$('<li></li>');
                            $(`<div class="qu"><p>Q${item.ordNum}、</p><p>${item.title}</p><p>（单选题）</p><p class="tip">题目还没选择！</p></div>`).appendTo(li);
                            li.appendTo(QuUl);
                            li=$('<li></li>');
                            //单选题题选项
                            item.Qu.forEach(function(zheQu){
                                $(`<div class="Qus"><input type="radio" name="single"  value=${zheQu}><p>${zheQu.value}</p></div>`).appendTo(li);
                                li.appendTo(QuUl); 
                                })
                                QuUl.appendTo(ul);
                                QuUl=$('<ul></ul>');
                        }
                ul.appendTo('.innerDiv');
            })
            console.log(QuState);
            console.log(QuState[1].max);

            $(".submit").click(function(){                      //校验选项是否未选
                $.each($(".QuUl"),function(i,item){
                    if(!$(this).find("input:checked").size()){
                        $(".tip").eq(i).css("display","inline-block");
                        alert("第"+(i+1)+"道题目还没选择！");
                        return false;
                    }else{
                        $(".tip").eq(i).css("display","none");
                    }
                });
            })
            // $('.Qus input').click(function(){
            //     $.each($(".QuUl"),function(i,item){
            //         $.each($('input'),function(i,item){
            //             if($(this[check]))
            //         })
            //     })
            // })



            // $(".Qus input").click(function(){                   //校验是否选多了
            //     // var thisInput=this;
            //     $.each((".QuUl"),function(i,item){
            //         if(($(this).find("input:checked").size()>QuState[i].max)){
            //             // $(thisInput).attr("checked",false);
            //             alert(`最多选${QuState[i].max}个！`);
            //             return false;
            //         }
            //     })
            // })





            // var json = [{
            //         "ordNum": "1",
            //         "type": "1",
            //         "num": "5",
            //         "max": "3",
            //         "title": "题目名称有点长有点长有点长?",
            //         "Qu": [{
            //             id: '1',
            //             name: "选项一",
            //             status: ''
            //         }, {
            //             id: '2',
            //             name: "选项二",
            //             status: ''
            //         }, {
            //             id: '3',
            //             name: "选项三",
            //             status: ''
            //         }]
            //     },
            //     {
            //         "ordNum": "2",
            //         "type": "2",
            //         "num": "2",
            //         "max": "1",
            //         "title": "题目名称有点长有点长有点长?",
            //         "Qu": [{
            //             id: '1',
            //             name: "选项一",
            //             status: ''
            //         }, {
            //             id: '2',
            //             name: "选项二",
            //             status: ''
            //         }, {
            //             id: '3',
            //             name: "选项三",
            //             status: ''
            //         }]
            //     }
            // ]
            // var ul = $('<ul></ul>');
            // var li = '';
            // var divSel = '';

            // //插入题目
            // json.forEach((item) => {
            //     li = $('<li></li>');
            //     var baseInfo = $('<div>基本信息</div>');
            //     baseInfo.appendTo(li);
            //     divSel = $('<ul></ul>');
            //     item.Qu.forEach((subItem) => {
            //         var selList = $('<li></li>');
            //         $(`<input type="checkbox" name="fuxuan" value="${subItem}"><div>${subItem.name}</div>`).appendTo(selList);
            //         selList.appendTo(divSel);
            //     })
            //     divSel.appendTo(li);
            //     li.appendTo(ul)
            // })
            // console.log(ul);
            // ul.appendTo('body');
            


        })