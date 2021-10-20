
let html = document.querySelector("#html")
let style = document.querySelector("style")
let n = 0
let content =`/*你好，我是lee
*接下来我来演示一下我的前端功底
*首先我来准备一个div*/

#bagua{
    border: 1px solid red;
    width : 200px;
    height : 200px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
*/
#bagua{
    border-radius:50%;
}
/*八卦图是半黑半白的阴阳图案，用渐变实现*/
#bagua{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加点阴影帅气一点*/
#bagua{
    box-shadow: 0px 0px 100px rgba(0,0,0,0.5);
    border:none;
}
/*加两个小球，用来做八卦图内部的弧形图案*/
#bagua::before{
    width:100px;
    height:100px;
    border-radius:50%;
    top:0;
    left:50%;
    transform:translate(-50%);
    border:none;
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%);
}
#bagua::after{
    width:100px;
    height:100px;
    border-radius:50%;
    bottom: 0 ;
    left:50%;
    transform:translate(-50%);
    border:none;
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 100%);
}
/*让八卦转起来就更好玩了*/
#bagua{
    animation: 2s infinite xuanzhuan; 
}
`
let out = ''


let step = ()=>{
    setTimeout(() => {
    if(content[n]==='\n') {
        out+='<br>'
    } else if(content[n]===' '){
        out+='&nbsp'
    }else{
        out+=content[n]
    }
    html.innerHTML = out
    style.innerHTML = content.substring(0,n)
    window.scrollTo(0,999999)
    html.scrollTo(0, 99999)
    if(n<content.length-1)
    {
        n+=1
        step()
    }
    }, 50);  
}
step()
