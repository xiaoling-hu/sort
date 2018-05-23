/*选择排序*/
function selectSort(arr){
    let states = [], count = 0, record = createRecord(arr);
    for(let i=0,len=record.length; i<len; i++){
        index = i;
        for(let j=i+1; j<len; j++){
            if(record[j].data<record[index].data)
                index = j;
        }
        //等于就不用交换
        if(index != i){
            let temp = record[i];
            record[i] = record[index];
            record[index] = temp;
            states[count] = {"first":record[i].index,"second":record[index].index,};
            count++;
        }
    }
    return states;
}