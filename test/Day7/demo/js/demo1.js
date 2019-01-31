$(function () {
    // 布局jQ
    $(".tab-item").mouseenter(function () {
        //两件事件
        $(this).addClass("active").siblings().removeClass("active");
        let idx = $(this).index();
        $(".main").eq(idx).addClass("selected").siblings().removeClass("selected");
    });

    // 布局jQ END



    //   作业一初始jQ

    //给所有的div元素添加高度属性为30px
    $(".homeworkOne div").height(30);
    //改变id为one的元素的背景颜色为红色
    $(".homeworkOne #one").css("backgroundColor", "red");
    //改变元素名为div的所有元素的背景色为#bbffaa，字体颜色为红色
    $(".homeworkOne div").css({
        color: "red",
        backgroundColor: "#bbffaa"
    });
    //改变第二个div元素的背景颜色为蓝色
    $(".homeworkOne div").eq(1).css("backgroundColor", "blue").click(function () {
        alert(1)
    })
    //匹配到标签是div或者类名存在a的元素
    console.log($(".homeworkOne div,.homeworkOne.a").length);
    //匹配标签是div中类名存在a的元素
    console.log($(".homeworkOne div.a").length);


    //   作业一初始jQ END
    // 作业一需求jQ

    $('.homeworkOneP').each(function (index, element) {
        $('.homeworkOneP').eq(index).click(() => alert($(this).text()))
    })
    // 作业一需求jQ END



    //作业二需求
    $('.homeworkTwo .TableChange tr:even').css("backgroundColor", "blue");
    //作业二需求 END




    //作业三需求
    $('.outBtn').click(() => {
        alert(`您选中了${$('input:checkbox:checked').length}个`)
    });
    //作业三需求 END



    //作业四需求
    $('.homeworkFour #submit').click(() => {
        let $ifCheck = $('input:radio:checked').length;
        if ($ifCheck === 0) {
            alert("请选择类型!");
        } else {
            let $value = $('.inputHK4').val(); // 获取值
            $value = $.trim($value); // 用jQuery的trim方法删除前后空格
            if ($value == '') { // 判断是否是空字符串，而不是null
                alert("输入不能为空!");
                return false;
            } else {
                let $checkCity = $('.city:checked').length;
                let $checkGame = $('.game:checked').length;
                let value = $('.inputHK4').val();
                if ($checkCity == 1) {
                    let exLi = $('<li></li>');
                    exLi.text(value);
                    $('#city').append(exLi);
                    $('.homeworkFour li').each(function (index, element) {
                        $('.homeworkFour li').eq(index).click(() => alert($(this).text()))
                    })
                } else {
                    if ($checkGame == 1) {
                        let exLi = $('<li></li>');
                        exLi.text(value);
                        $('#game').append(exLi);
                        $('.homeworkFour li').each(function (index, element) {
                            $('.homeworkFour li').eq(index).click(() => alert($(this).text()))
                        })
                    }
                }
            }
        }
    });
    //作业四需求 END


    //出师作业需求


    // //submit按钮点击事件
    $('#addEmpButton').click(() => {
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let salary = $("#salary").val().trim();
        if (name === "" || email === "" || salary === "") {
            alert("输入内容不能为空");
        } else {
            if ($editLine === null) {
                let valueName = $('#name').val();
                let valueEmail = $('#email').val();
                let valueSalary = $('#salary').val();
                let exTr = $(`<tr><td>${valueName}</td><td>${valueEmail}</td><td>${valueSalary}</td><td><a href="" onclick="return false" class="delete">Delete</a></td><td><a href="" onclick="return false" class="Edit">Edit</a></td></tr>`);
                $('#employeetable').prepend(exTr);
                $("#employeetable tr:nth(0)").insertAfter('#employeetable tr:nth(1)');
                //为新节点添加删除事件
                $('.delete').click(function () {
                    var link = $(this).parent().parent();
                    link.remove();
                });
                //为新节点添加Edit事件
                $("#employeetable").on('click', '.Edit', function () {
                    // 改变标题
                    $("center p").text("编辑新员工");
                    // 设置当前编辑行
                    $editLine = $(this).parent().parent();
                    // 分别获取name,email,salary
                    let ele = $editLine.text().trim().split('\n');
                    let name = ele[0].trim();
                    let email = ele[1].trim();
                    let salary = ele[2].trim();
                    // 将要编辑的内容写入输入框
                    $("#name").val(name);
                    $("#email").val(email);
                    $("#salary").val(salary); 
                })
                $('#name,#email,#salary').val('');
             } 
             //else {
            //     // 改变当前行的内容
            //     $editLine.html(
            //         `<td>${name}</td>
            //         <td>${email}</td>
            //         <td>${salary}</td>
            //         <td><a href="" class="Delete" onclick='return false'>Delete</a></td>
            //         <td><a href="" class="Edit"  onclick='return false'>Edit</a></td>`
            //     );
            //     // 将$editLine重新置空
            //     $editLine = null;
            //     // 改变标题
            //     $("center p").text("添加新员工");
            //     $("#name,#email,#salary").val("");
            // }
            event.stopPropagation();
        }

    })
     //Edit点击事件
     $("#employeetable").on('click', '.Edit', function () {
        // 改变标题
        $("center p").text("编辑新员工");
        // 设置当前编辑行
        $editLine = $(this).parent().parent();
        // 分别获取name,email,salary
        let ele = $editLine.text().trim().split('\n');
        let name = ele[0].trim();
        let email = ele[1].trim();
        let salary = ele[2].trim();
        // 将要编辑的内容写入输入框
        $("#name").val(name);
        $("#email").val(email);
        $("#salary").val(salary); 
    })
        //a标签不跳转
        $('.homeworkEx a').attr("onclick", "return false");
        //delete点击事件删除节点
        // 定义一个变量$editLine接受编辑行的JQuery对象
        let $editLine = null;
        $('.delete').click(function () {
            var link = $(this).parent().parent();
            link.remove();
        });
    // 删除事件
    // $("#employeetable").on('click', '.Delete', function () {
    //   $(this).parent().parent().remove();
    // });

    // //submit按钮点击事件
    // $('#addEmpButton').click(() => {
    //     let name = $("#name").val().trim();
    //     let email = $("#email").val().trim();
    //     let salary = $("#salary").val().trim();
    //     if (name === "" || email === "" || salary === "") {
    //         alert("输入内容不能为空");
    //     } else {
    //         if ($editLine === null) {
    //             $("#employeetable").prepend(
    //                 `<tr>
    //                   <td>${name}</td>
    //                   <td>${email}</td>
    //                   <td>${salary}</td>
    //                   <td><a href="" class="Delete" onclick='return false'>Delete</a></td>
    //                   <td><a href="" class="Edit" onclick='return false'>Edit</a></td>
    //                 </tr>`
    //             );
    //             $("#employeetable tr:nth(0)").insertAfter('#employeetable tr:nth(1)');

    //         } else {
    //             // 改变当前行的内容
    //             $editLine.html(
    //                 `<td>${name}</td>
    //                 <td>${email}</td>
    //                 <td>${salary}</td>
    //                 <td><a href="" class="Delete" onclick='return false'>Delete</a></td>
    //                 <td><a href="" class="Edit"  onclick='return false'>Edit</a></td>`
    //             );
    //             // 将$editLine重新置空
    //             $editLine = null;
    //             // 改变标题
    //             $("center p").text("添加新员工");
    //             $("#name,#email,#salary").val("");
    //         }
    //         event.stopPropagation();
    //     }

    // })
    //  //Edit点击事件
    //  $("#employeetable").on('click', '.Edit', function () {
    //     // 改变标题
    //     $("center p").text("编辑新员工");
    //     //console.log($(this).parent().parent());
    //     // 设置当前编辑行
    //     $editLine = $(this).parent().parent();
    //     // 分别获取name,email,salary
    //     let ele = $editLine.text().trim().split('\n');
    //     let name = ele[0].trim();
    //     let email = ele[1].trim();
    //     let salary = ele[2].trim();
    //     // 将要编辑的内容写入输入框
    //     $("#name").val(name);
    //     $("#email").val(email);
    //     $("#salary").val(salary);
        
    // })
    // // 删除事件
    // $("#employeetable").on('click', '.Delete', function () {
    //   $(this).parent().parent().remove();
    // });






    //Edit点击事件
    // var $thistdName;
    // var $thistdEmail;
    // var $thistdSalary;
    // $('.homeworkEx #addEmpButton').click(() => {
    //     if ($('.homeworkExP').html() == '添加新员工') {
    //         let $checkName = $('#name').val(); // 获取值   校验name
    //         $checkName = $.trim($checkName); // 用jQuery的trim方法删除前后空格
    //         if ($checkName == '') { // 判断是否是空字符串，而不是null
    //             alert("name不能为空!");
    //             return false;
    //         } else {
    //             let $checkemail = $('#email').val(); // 获取值   校验email
    //             $checkemail = $.trim($checkemail); // 用jQuery的trim方法删除前后空格
    //             if ($checkemail == '') { // 判断是否是空字符串，而不是null
    //                 alert("email不能为空!");
    //                 return false;
    //             } else {
    //                 let $checksalary = $('#salary').val(); // 获取值    校验salary
    //                 $checksalary = $.trim($checksalary); // 用jQuery的trim方法删除前后空格
    //                 if ($checksalary == '') { // 判断是否是空字符串，而不是null
    //                     alert("salary不能为空!");
    //                     return false;
    //                 } else {
    //                     //创建节点
    //                     let valueName = $('#name').val();
    //                     let valueEmail = $('#email').val();
    //                     let valueSalary = $('#salary').val();
    //                     let exTr = $(`<tr><td>${valueName}</td><td>${valueEmail}</td><td>${valueSalary}</td><td><a href="" onclick="return false" class="delete">Delete</a></td><td><a href="" onclick="return false" class="Edit">Edit</a></td></tr>`);

    //                     // $("#employeetable tr:nth(0)").insertAfter(exTr);
    //                     $('#employeetable').prepend(exTr);
    //                     $("#employeetable tr:nth(0)").insertAfter('#employeetable tr:nth(1)');

    //                 }
    //             }
    //         }

    //     }
    // })

    // $('.Edit').click(function () {
    //     $('.homeworkExP').html("编辑新员工");
    //     $('#addEmpButton').addClass('btnEdit');
    //     //将table内容映射到input上
    //     $thistdName = $(this).parent().siblings().eq(0);
    //     $thistdEmail = $(this).parent().siblings().eq(1);
    //     $thistdSalary = $(this).parent().siblings().eq(2);
    //     let $tdName = $thistdName.html();
    //     $("#name").attr("value", $tdName);
    //     let $tdEmail = $thistdEmail.html();
    //     $("#email").attr("value", $tdEmail);
    //     let $tdSalary = $thistdSalary.html();
    //     $("#salary").attr("value", $tdSalary);
    //     $('.btnEdit').click(function () {
    //         console.log($thistdName);
    //         $thistdName.html($("#name").val());
    //         $thistdEmail.html($("#email").val());
    //         $thistdSalary.html($("#salary").val());
    //         $('.homeworkExP').html("添加新员工");
    //         $('#name,#email,#salary').val('');
    //         $('#addEmpButton').removeClass('btnEdit');


    //     });
    // });
    //出师作业需求 END

});