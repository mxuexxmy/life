
(function () {
//初始化：一开始做什么

var list = document.querySelector('.list');
 //1.将列表中的第一个元素，克隆到列表的最后一个
  function cloneFirstIem(){
    var firstItem = list.children[0];
    var newItem = firstItem.cloneNode(true);
        list.appendChild(newItem);

  }
  cloneFirstIem();
  //2.滚动:每隔一段时间，将列表滚动到以下各位置
  var duration = 2000;
  var itemHeight = 30;
  setInterval(moveNext,duration);
  var curIndex = 0;//目前展示的是第几项

  // 将列表滚动到下一个位置
  function moveNext(){
    var from = curIndex * itemHeight;
        curIndex++;
    var to = curIndex * itemHeight;
        // list.scrollTop = to;
      //  让list的scrollTop,从from慢慢变为to
      //慢慢变为：在一段时间内，每隔一小段时间，变化一点
      var totalDuration = 1000;//变化的总时间
      var duration = 100;//变化的间隔时间
      var times = totalDuration/duration ; //变化的次数
      var dis = (to-from) /times ;//每次变化的量
      var timerId = setInterval(function(){
         from += dis;
         if(from >= to) {
          // 到达目标值
          clearInterval(timerId);//停止计时
          if(curIndex === list.children.length -1){
            curIndex = 0;
            from =  0;
          }
         }
         list.scrollTop = from;
      },duration)
      
  }

})();



//此效果无交互