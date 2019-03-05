//首先声明websocket
const ws=require('nodejs-websocket');
//给各变量初始化
let user1=null,user2=null,user1Ready=false,user2Ready=false;
//用ws创建服务器
const server=ws.createServer(function(conn){
  //ws接收消息
  conn.on('text',function(str){
    //如果接收到user1的消息，将user1设置为连接点
    if(str==="user1"){
      user1=conn;
      user1Ready=true;
      user1.sendText('连接成功');
    }
    //接收到user2的消息，将user2设为连接点，这里是把conn的方法给了user2，这样user2才能被websocket指定发送消息
      //否则websocket不知道向谁发送消息
    if(str==="user2"){
      user2=conn;
      user2Ready=true;
    }
    //user1和user2连接点都建立后
    if(user1Ready&&user2Ready){
      let time=new Date();
      let fullYear=time.getFullYear();
      let month=time.getMonth()+1;
      let day=time.getDate();

      time=String(time);
      // console.log(time);
      let timeReg2=/[0-2][0-9]:[0-5][0-9]:[0-5][0-9]/;
      let time2=time.match(timeReg2);
      user2.sendText(fullYear+'年'+month+'月'+day+'号'+time2+"user1向user2发送消息："+str);
    }
  });
  conn.on('close',function(){
    console.log('连接已关闭');
  });
  conn.on('error',function(code,reason){
    console.log('连接出现错误'+reason+code);
  });
}).listen(8001);
console.log('服务器已启动');
