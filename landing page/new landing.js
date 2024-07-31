let meun = document.querySelector('#meun-icon');
let navlist =  document.querySelector('navlist');

meun.onclick = () =>{
  meun.classList.toggle('bx-x');
  navlist.classList.toggle('open')
}
window.onscroll = () => {
  meun.classList.remove('bx-x');
  navlist.classList.remove('open')
}