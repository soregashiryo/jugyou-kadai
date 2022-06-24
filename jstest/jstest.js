let member1 = ['A','B','C','D','E'];
let member2 = ['A','B','C','D','E'];
for(let m1 of member1){
    member2.shift();
    for(let m2 of member2){
        console.log(m1 + 'vs' + m2);
    }
}