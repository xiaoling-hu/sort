/*插入排序*/
function insertSort(arr){
    let states = [], count = 0, record = createRecord(arr);
    for(let i = 1,len=record.length; i<len; i++){
        let temp = record[i]; //保存待插入的数
        let j = 0;
        //在有序区中的移动，如果temp较小，就往前移动
        for(j=i-1; record[j]!=undefined && temp.data<record[j].data; j--){
            record[j+1] = record[j] //有序区后移，给temp留插入的空间
            //是temp和前面的交换，不能是记录j+1的，因为下一趟J+1就变成之前后移的元素了
            states[count] = {"first":record[j].index,"second":temp.index,};
            count++;
        }
        record[j+1] = temp; //插入temp
    }
    return states;
}