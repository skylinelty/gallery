/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-06-05 15:26:31
 * @version $Id$
 */

// 图片翻转
function turn(elem) {
	var name = elem.className;
	// 正则表达式test方法：
	// 如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。
	if (/photo-front/.test(name)) {
		// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
		name = name.replace(/photo-front/, "photo-back");
	} else {
		name = name.replace(/photo-back/, "photo-front");
	}
	elem.className = name;
	return elem.className;
}

// 类选择函数
var getElementsByClassName = function(searchClass, node, tag) {
	if (document.getElementsByClassName) {
		return document.getElementsByClassName(searchClass);
	} else {
		node = node || document;
		tag = tag || "*";
		var classes = searchClass.split(" "),
			elements = (tag === "*" && node.all) ? node.all : node.getElementsByTagName(tag),
			patterns = [],
			returnElements = [],
			current,
			match;
		var i = classes.length;

		while (--i >= 0) {
			// 匹配所有以空号分割的字符串，包括开头和结尾
			//若没有空格或段前段后正则，会导致className中某一个name中出现classes[i]就会匹配成功
			patterns.push(new RegExp("(^|\\s)" + classes[i] + "(\\s|$)"));
		}

		var j = elements.length;

		while (--j >= 0) {
			current = elements[j];
			match = false;

			for (var k = 0, kl = patterns.length; k < kl; k++) {
				match = patterns[k].test(current.className);
				if (!match) break;
			}

			if (match) returnElements.push(current);
		}

		return returnElements;
	}
};

// 随机函数
function v_random(min, max) {
	var v_min = Math.min(min, max);
	var v_max = Math.max(min, max);
	var diff = v_max - v_min;
	// Math.ceil取整，random() 方法可返回介于 0 ~ 1 之间的一个随机数
	return Math.ceil(Math.random() * diff + v_min);
}

// 居中图片显示,并左右分区设置，n是居中图片序号
function range(n) {
	var p = select("#c_" + n);
	var b_i = select("#b_" + n);

	p.className += " photo-center";
	b_i.className +=" button_now";

	var _photo = select(".photo-container");
	var photos = [];

	for (var s = 0; s < _photo.length; s++) {
		photos.push(_photo[s]);
	}

	var del_photos = photos.splice(13 - n, 1);
	var left_photos = photos.splice(0, Math.ceil(photos.length / 2));
	var right_photos = photos;

	var wrap = {
		h: select(".wrap")[0].clientHeight,
		w: select(".wrap")[0].clientWidth
	};

	var photo = {
		h: select(".photo-container")[0].clientHeight,
		w: select(".photo-container")[0].clientWidth
	};

	for (var i = 0; i < left_photos.length; i++) {
		left_photos[i].style.left = v_random(0 - photo.w / 2, wrap.w / 2 - photo.w / 2) + "px";
		left_photos[i].style.top = v_random(0 - photo.h / 2, wrap.h - photo.h / 2) + "px";

		left_photos[i].style["-webkit-transform"] = 'rotate('+v_random(-160,160)+'deg)';
		left_photos[i].style["-moz-transform"] = 'rotate('+v_random(-160,160)+'deg)';
		left_photos[i].style["-ms-transform"] = 'rotate('+v_random(-160,160)+'deg)';
		left_photos[i].style["transform"] = 'rotate('+v_random(-160,160)+'deg)';
	}

	for (var j = 0; j < right_photos.length; j++) {
		right_photos[j].style.left = v_random(wrap.w / 2 - photo.w / 2, wrap.w - photo.w / 2) + "px";
		right_photos[j].style.top = v_random(0 - photo.h / 2, wrap.h - photo.h / 2) + "px";

		right_photos[j].style["-webkit-transform"] = "rotate("+v_random(-160,160)+"deg)";
		right_photos[j].style["-moz-transform"] = "rotate("+v_random(-160,160)+"deg)";
		right_photos[j].style["-ms-transform"] = "rotate("+v_random(-160,160)+"deg)";
		right_photos[j].style["transform"] = "rotate("+v_random(-160,160)+"deg)";
	}
}

// 选择器获取
function select(selector) {
	var sec = selector.substr(0, 1) == "#" ? "getElementById" : "getElementsByClassName";
	return document[sec](selector.substr(1));
}

//图片添加
var add_data = data;

function add_photo() {
	var wraphtml = select("#wrap").innerHTML;
	var _html = [];
    var _buttons = [];
	for (var i = 0; i < add_data.length; i++) {
		_html[i] = wraphtml.replace("/id/","c_" + data[i].id)
			.replace("{id}", "photo_" + data[i].id)
			.replace("{img}", data[i].img)
			.replace("{caption}", data[i].caption)
			.replace("{desc}", data[i].info_t + data[i].info_i + data[i].info_d + data[i].info_a);
	    _buttons[i] = "<span class='button' id='b_"+data[i].id+"' onclick='turn(photo_"+data[i].id+")'></span>";	
	}

	select("#wrap").innerHTML = _html.join('')　+ "<div id='nav'>"+_buttons.join('')+"</div>";

	range(v_random(1, 13));
}
add_photo();