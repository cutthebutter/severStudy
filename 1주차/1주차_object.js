//object
const animal = {
    //Property : Key: value로 구성됨
    animalType: "dog",
    animalName : "뽀삐",
    animalFriends: [
        '코코',
        '밍밍'
    ],
    //method :property가 함수일 때(일반함수와 구분하기 위해
    bark: function () {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function(){
        this.animalFriends.forEach( friend =>{
            console.log(`${this.animalName}의 친구: ${friend}`);
        })
    }
};