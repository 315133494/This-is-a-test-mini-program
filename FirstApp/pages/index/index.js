//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg', 
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
       logo:'/images/pro_01.jpg',
       title:'精英贷',
        desc:'22周岁以上即可\n 最快3小时下款,件均8万'
      }, 
      {
        logo: '/images/pro_02.jpg',
        title: '月供贷',
        desc: '不看工作,不看流水\n不限地区,无须家人签字,最高可做150万'
      }, 
      {
        logo: '/images/pro_03.jpg',
        title: '保单贷',
        desc: '凭祥版征信和保单\n 官网账号密码就可进件,最高可做150万'
      }
    ]
  },
  onLoad:function(){
      this.setData({
        test:'01'
      })
  },

  toDetail:function(e){
    console.log(e)
    var index=e.currentTarget.dataset.index;
    console.log(index);
  }
 

})
