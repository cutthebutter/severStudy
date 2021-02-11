//1.1 동기적 write
const fs1 = require('fs');

const numArr1=[1,2,3,4,5];
const fileCommonName_syncText = 'syncText';

numArr1.forEach((num) =>{
    const fileName = fileCommonName_syncText + num;
    const data = `reserved message for the '${fileName}'`;
    fs1.writeFileSync(`${fileName}.text`,data);
    console.log(`file[${fileName}] write complete`)
})

//1.2 비동기적  write
const fs2 = require('fs');

const numArr2=[1,2,3,4,5];
const fileCommonName_asyncText = 'asyncText';

numArr2.forEach((num) =>{
    const fileName = fileCommonName_asyncText + num;
    const data = `reserved message for the '${fileName}'`;
    fs2.writeFileSync(`${fileName}.text`,data);
    console.log(`file[${fileName}] write complete`)
});

//2.1 동기적 read
const fs3 = require('fs');

const numArr3=[1,2,3,4,5];
const fileCommonName_syncText_read = 'syncText';

numArr3.forEach((num) =>{
    const fileName = fileCommonName_syncText_read + num;
    const data = fs3.readFileSync(`${fileName}.text`);
    console.log(`file[${fileName}] with ${data}`);
});

//2.2 비동기적 read
const fs4 = require('fs');

const numArr4=[1,2,3,4,5];
const fileCommonName_asyncText_read = 'asyncText';

numArr4.forEach((num) =>{
    const fileName = fileCommonName_asyncText_read + num;
    fs4.readFile(`${fileName}.text`, (err, data)=>{
        console.log(`file[${fileName}] with ${data}`);
    });
});