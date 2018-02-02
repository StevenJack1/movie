var Get = function (url,success) {
	"use strict";
	$.ajax({
		url:url,
		type:"GET",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success:function (data) {
			success(data);
		},
		error:function (XMLHttpRequest) {
			if(XMLHttpRequest.status === 404){
				swal({
					title: "资源不存在",
					text: "资源不存在",
					type: "error",
					confirmButtonText: "知道了"
				});
			}
		}
	});
};

var Post = function (url,data) {
	"use strict";

	$.ajax({
		url:url,
		type:"POST",
		contentType: "application/json",
		data: JSON.stringify(data),
		success: function () {
			swal({
				title: "添加成功",
				text: "添加成功",
				type: "success",
				confirmButtonText: "知道了"
			});
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			swal({
				title: "出错了！",
				text: "错误信息" + XMLHttpRequest.status,
				type: "error",
				confirmButtonText: "知道了"
			});
		}
	});
};

var Put = function (url,data) {
	"use strict";

	$.ajax({
		url:url,
		type:"PUT",
		contentType: "application/json",
		data: JSON.stringify(data),
		success: function () {
			swal({
				title: "修改成功",
				text: "修改成功",
				type: "success",
				confirmButtonText: "知道了"
			});
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			swal({
				title: "出错了！",
				text: "错误信息" + XMLHttpRequest.status,
				type: "error",
				confirmButtonText: "知道了"
			});
		}
	});
};


var Delete = function (url) {
	$.ajax({
		url: url,
		type: "DELETE",
		success: function () {
			swal({
				title: "成功",
				text: "删除成功",
				type: "success",
				confirmButtonText: "知道了"
			});
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			swal({
				title: "出错了！",
				text: "错误信息" + XMLHttpRequest.status,
				type: "error",
				confirmButtonText: "知道了"
			});
		}
	});
};
