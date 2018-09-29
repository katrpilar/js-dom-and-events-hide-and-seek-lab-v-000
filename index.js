function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector('#nested .target');
};

function increaseRankBy(n){
  return document.querySelectorAll('.ranked-list li').forEach(function(element) {
  element.innerHTML = parseInt(element.innerHTML) + n
});
};

function deepestChild(){
  let obj = document.querySelector('#grand-node div');
  while(obj.querySelector('div')){
    // debugger
    obj = obj.querySelector('div')
    // debugger
  };
  return obj;
};
