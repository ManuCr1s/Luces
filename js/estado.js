var btn=document.getElementById("btn"),
    cnd=document.getElementById("estado");

btn.addEventListener('click',function(){
    if(cnd.className=='cambio1'){
        a=0;
        cnd.className='cambio2';
    }else{
        a=1;
        cnd.className='cambio1';
    }
    $xttp=new XMLHttpRequest();
    $xttp.open('GET','procesa.php?dato='+a,true);
    $xttp.onreadystatechange = function(){
            if(this.status==200 && this.readyState==4){
                document.getElementById('texto').innerHTML=this.responseText;
            }
        };
    $xttp.send();
    console.log(a);
});

