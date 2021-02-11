const member = require('./member')
const members_ob = member.filter( (item) => item.status == 'OB');
const members_yb = member.filter( (item) => item.status == 'YB');
const groupCount = 5;

const checkGroupOver = (membs) => {

    // 한 그룹에 들어가는 멤버의 최댓값
    const membNumMax = parseInt(membs.length / groupCount) + 1;
    // 최댓값인 그룹의 수 
    const maxGroupNum = membs.length - parseInt(membs.length / groupCount) * groupCount;

    let maxGroupCount = 0;
    for(i = 0; i < groupCount; i++){
        let group = membs.filter( (item) => item.group == i);
        if( group.length > membNumMax){
            return true;
        }else if( group.length == membNumMax){
            maxGroupCount++;
            if(maxGroupCount > maxGroupNum){
                return true;
            }
        }
    }
    return false;
}


const makeGroup = (membs) => {
    
    membs.forEach(memb => {
        jbRandom = Math.random();
        index = Math.floor( jbRandom * groupCount);
        
        memb.group = index;
        while(checkGroupOver(membs)){
            index = (index + 1) % groupCount;
            memb.group = index;
        }
        
    });
}

makeGroup(members_ob);
makeGroup(members_yb);


for(i = 0 ; i < groupCount; i++){
    let memb_ob = members_ob.filter( (member) => member.group == i);
    let memb_yb = members_yb.filter( (member) => member.group == i);
    let members = memb_ob.concat(memb_yb);
    console.log((i+1) + "조");
    members.filter((member) => {console.log(member.name + member.status)})
    console.log();
}