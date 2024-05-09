var posts=["2024/05/08/用户中心/","2024/05/08/部署上线踩坑/","2024/05/08/马赛克项目部署文档/","2024/05/09/活着-余华/","2024/05/09/重庆/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };