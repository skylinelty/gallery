var data=[];
var dataString='1.吸血鬼助手<br><br>导演：保罗·韦兹<br>主演：约翰·C·赖利/克里斯·凯利/乔什·哈切森<br>类型：动作/冒险/幻想/惊悚<br>信息：美国|109分钟|2009年10月23日<br><br><br>2.大笑江湖<br><br>导演：朱延平/徐正超<br>主演：赵本山/小沈阳/林熙蕾/吴宗宪<br>类型：喜剧/古装<br>信息：中国|119分钟|2010年12月3<br><br><br>3.狄仁杰之神都龙王<br><br>导演：徐克<br>主演：赵又廷/冯绍峰/林更新/杨颖/刘嘉玲/金范/陈坤<br>类型：剧情/动作/悬疑<br>信息：中国|135分钟|2013年9月28日<br><br><br>4.风声<br><br>导演：高群书/陈国富<br>主演：周迅/李冰冰/黄晓明/张涵予/苏有朋/英达/王志文<br>类型：剧情/惊悚/犯罪/悬疑<br>信息：中国大陆|114分钟|2009年9月29日<br><br><br>5.寒战<br><br>导演：梁乐民/陆剑青<br>主演：郭富城/梁家辉/李治廷/彭于晏/杨采妮<br>类型：动作/剧情<br>信息：中国香港|98分钟<br><br><br>6.暮光之城<br><br>导演：比尔·康顿<br>主演：克里斯汀·斯图尔特/罗伯特·帕丁森<br>类型：爱情/剧情/幻想/冒险<br>信息：美国|2011年11月18日<br><br><br>7.恋爱通告<br><br>导演：王力宏<br>主演：王力宏/刘亦菲/陈汉典/陈冲/乔振宇/曾轶可/谢园<br>类型：喜剧/爱情<br>信息：中国台湾|98分钟|2010年8月12日<br><br><br>8.让子弹飞<br><br>导演：姜文<br>主演：姜文/周润发/葛优/刘嘉玲/陈坤/周韵/廖凡<br>类型：剧情/喜剧/动作/西部<br>信息：中国大陆/香港|132分钟|2010年12月16日<br><br><br>9.杀神特工<br><br>导演：提莫·贝克曼贝托夫 <br>主演：詹姆斯·麦卡沃伊/安吉丽娜·朱莉<br>类型：动作/惊悚/爱情/警匪<br>信息：美国|110分钟|2008年10月19日<br><br><br>10.神火之盗<br><br>导演：克里斯·哥伦布<br>主演：罗根·勒曼/布兰登·T·杰克逊<br>类型：喜剧/冒险/奇幻<br>信息：美国|118分钟|2010-02-10<br><br><br>11.同桌的你<br><br>导演：郭帆<br>主演：周冬雨/林更新/隋凯/王啸坤/龚格尔/李岷城/赵思园<br>类型：剧情/爱情/青春<br>信息：中国|98分钟|2014年4月25日<br><br><br>12.西游记之大闹天宫<br><br>导演：郑保瑞<br>主演：甄子丹/周润发/郭富城/何润东/夏梓桐/陈乔恩<br>类型：剧情/动作/神话<br>信息：中国香港|120分钟|2014年1月31日<br><br><br>13.心花路放<br><br>导演：宁浩<br>主演：黄渤/徐峥<br>类型：公路/爱情/喜剧<br>信息：中国大陆|118分钟|2014年9月30日';
var d=dataString.split('<br><br><br>');
for (var n = d.length - 1; n >= 0; n--) {
var c=d[n].split('<br><br>');
var i=c[1].split('<br>');
data.push({
img:c[0].replace('.',' ')+'.jpg',
caption:c[0].split('.')[1],
id:c[0].split('.')[0],
info_d:i[0],
info_a:i[1],
info_t:i[2],
info_i:i[3],
});
console.log(c[0].replace('.',' ')+'.jpg');
}