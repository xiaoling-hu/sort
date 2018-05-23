/*希尔排序*/
function shellSort(arr){
    let states = [], count = 0, record = createRecord(arr);
    console.log(record);
    //选择d为len/2
    let len = record.length-1; //最后的下标
    //增量缩小 直到小于1跳出
    for(let d = record.length/2; d>=1; d=parseInt(d/2)){
        //划分组数的循环 组数为d
        for(let i=0; i<d; i++){
            //每一个组都是[i+1,len-d+1] --> 对每一个组直接排序
            for(let j=i+1; j<=(len-d+1); j++){
                let temp = record[j];
                let k = 0;
                for(k = j-1; record[k] != undefined && temp.data < record[k].data; k--){
                    console.log(1);
                    record[k+1] = record[k];
                    states[count] = {"first":record[k].index,"second":temp.index,};
                    count++;
                }
                record[k+1]=temp;
            }
        }
    }
    return states;
}