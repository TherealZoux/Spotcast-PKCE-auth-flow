import{_ as u,o as s,c as _,w as c,a as o,e as i,t as p,d as w,R as I,h as k,u as C,i as d,r as v,j as S,k as n,f as a,F as m,l as V,p as y,m as N}from"./index-BIryQTnJ.js";import{V as H,a as j,b as B,c as T}from"./VCard-DG6KYzal.js";import{_ as D}from"./loadingComponent-D7XGXsw5.js";const E={__name:"SpotCard",props:["posterImg","imageWidth","imageHight","posterName","posterCreator","posterId"],setup(e){return(r,l)=>(s(),_(w(I),{to:`/show/${e.posterId}`,class:"mb-8"},{default:c(()=>[o(H,{class:"card"},{default:c(()=>[o(j,{src:e.posterImg,eager:"",style:{"border-radius":"6px","box-shadow":"1px 1px 4px black"}},null,8,["src"]),o(B,{class:"text-base p-1"},{default:c(()=>[i(p(e.posterName),1)]),_:1}),o(T,{class:"text-[#b3b3b3] m-0 p-0 mb-4"},{default:c(()=>[i(p(e.posterCreator),1)]),_:1})]),_:1})]),_:1},8,["to"]))}},L=u(E,[["__scopeId","data-v-71534556"]]),g=e=>(y("data-v-a3fda6fb"),e=e(),N(),e),P=g(()=>a("div",{class:"w-ful h-[25rem] bg-[url('https://cdn.pixabay.com/photo/2020/10/01/14/20/donations-keeps-me-going-5618697_960_720.jpg')] bg-center bg-cover relative shadow-2xl shadow-blue-500/30 lg:mt-16 mt-[4rem]"},[a("h2",{class:"absolute top-[22%] md:text-[6rem] md:top-[40%] pl-4 text-[5rem] lg:text-[7rem] tracking-[24px] text-[#fff]"}," Good Vibes "),a("p",{class:"absolute top-[77%] pl-8 text-[1rem] tracking-[2px] text-[#fff]"},' "The best time to plant a tree was 20 years ago. The second best time is now." – Chinese Proverb ')],-1)),R={key:0,class:"flex justify-center items-center m-20"},W={key:1,class:"w-full pt-4"},F=g(()=>a("h1",{class:"text-4xl font-bold text-center m-8"},[i(" Popular Pod"),a("span",{class:"bg-[#DE1A3E] rounded"},"casts")],-1)),$={class:"flex gap-4 sm:gap-6 flex-wrap justify-center items-center w-full pl-4 sm:pl-4"},A={__name:"HomeView",setup(e){const r=k(),l=C(),f=d(()=>r.getters.filteredShows),h=d(()=>r.getters.isLoading);return v(window.screen.width),localStorage.getItem("access_token")===null&&l.push("/login"),S(()=>{r.dispatch("fetchData")}),(G,M)=>{const x=D,b=L;return s(),n(m,null,[P,h.value?(s(),n("div",R,[o(x)])):(s(),n("section",W,[F,a("div",$,[(s(!0),n(m,null,V(f.value,t=>(s(),_(b,{key:t.id,posterImg:t.images[1].url,imageWidth:t.images[1].width,imageHight:t.images[1].height,posterName:t.name,posterCreator:t.publisher,posterId:t.id},null,8,["posterImg","imageWidth","imageHight","posterName","posterCreator","posterId"]))),128))])]))],64)}}},K=u(A,[["__scopeId","data-v-a3fda6fb"]]);export{K as default};
