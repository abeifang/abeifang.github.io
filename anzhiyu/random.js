var posts=["2024/05/08/用户中心/","2024/05/08/部署上线踩坑/","2024/05/08/马赛克项目部署文档/","2024/05/09/活着-余华/","2024/05/09/重庆/","2024/05/09/指令记录存档/","2024/05/11/伙伴匹配系统/","2024/05/12/图像处理学习/","2024/05/12/云旅行-伊斯坦布尔/","2024/05/13/意大利 · 多洛米蒂/","2024/05/15/日常踩坑/","2024/05/28/屈光转裸眼算法研究记录/","2024/05/28/每日打卡/","2024/05/28/你想活出怎样的人生/","2024/05/28/打工人的进化史/","2024/05/28/API开发平台/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };