var body = document.getElementsByTagName('body')[0];
// console.log(typeof.body);
function row(){
  for(let i=0;i<63;i++){
    if(i%2 == 0){
      let newdiv = document.createElement('div');
      newdiv.style.backgroundColor = 'black';
      newdiv.style.float = 'left';
      newdiv.style.paddingBottom = '11.1%';
      newdiv.style.width = '11.1%';
      body.appendChild(newdiv);
    }
    else {
      let newdiv = document.createElement('div');
      newdiv.style.backgroundColor = 'red';
      newdiv.style.float = 'left';
      newdiv.style.paddingBottom = '11.1%';
      newdiv.style.width = '11.1%';
      body.appendChild(newdiv);
    }
  }
}// Your JS goes here

row();
