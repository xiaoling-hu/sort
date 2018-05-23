/*冒泡排序*/
const bubbleSort = function(arr){
    let exchange = arr.length;
    let states = [], count=0, record=createRecord(arr);
    exchange--;
    while(exchange != 0){
        bound = exchange; exchange = 0;
        for(let j=0; j<bound; j++){
            if(record[j].data > record[j+1].data){
                let temp = record[j];
                record[j] = record[j+1];
                record[j+1] = temp;
                exchange = j;
                //记录原来位置，用来操作dom
                states[count] = {"first":record[j].index,"second":record[j+1].index,};
                count++;
            }
        }
    }
    return states;
}