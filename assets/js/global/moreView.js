var moreView={};moreView.init=function(){for(var c,a=document.querySelectorAll('.before.more-view'),b=document.querySelectorAll('.after.more-view'),d=0;d<b.length;d++)b[d].style.display='none';for(d=0;d<a.length;d++)a[d].outerHTML+='<a class="center button for-more-view">\uB354\uBCF4\uAE30</a>';for(c=document.querySelectorAll('.for-more-view'),d=0;d<c.length;d++)c[d].addEventListener('click',moreView.open,!1)},moreView.open=function(){for(var a=this.parentNode.querySelectorAll('.after.more-view'),b=0;b<a.length;b++)a[b].style.display='block',window.animation&&(a[b].style.animation=animation({duration:500,'0%':{transform:translateY(30),opacity:0},'100%':{transform:translateY(0),opacity:1}}));this.style.display='none'},window.addEventListener('DOMContentLoaded',moreView.init,!1);