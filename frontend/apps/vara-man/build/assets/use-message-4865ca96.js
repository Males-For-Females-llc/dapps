import{u as t,d as l,h as c,a as i}from"./index-48645c43.js";function f(){const{isPending:d,setIsPending:e}=t(),{account:s}=l(),o=c(),r=i();return{isPending:d,onStart:a=>{s!=null&&s.decodedAddress&&(e(!0),r({payload:{StartGame:{level:a,player_address:s.decodedAddress}},onSuccess:()=>{e(!1),o("/game")},onError:()=>e(!1)}))},onClaimReward:(a,n)=>{e(!0),r({payload:{ClaimReward:{silver_coins:a,gold_coins:n}},onSuccess:()=>{e(!1),o("/levels")},onError:()=>e(!1)})}}}export{f as u};