/*快速排序*/
function quickSort(arr){
    let states = [], count = 0, record = createRecord(arr);
    //一次划分
    function partition(first,end){
        let i = first, j = end;
        while(i < j){
            while(i<j && record[i].data<=record[j].data) j--; //右侧扫描
            if(i<j){
                let temp = record[i];
                record[i] = record[j];
                record[j] = temp;
                states[count] = {"first":record[i].index,"second":record[j].index,};
                i++;
                count++;
            }
            while(i<j && record[i].data<=record[j].data) i++; //左侧扫描
            if(i<j){
                let temp = record[i];
                record[i] = record[j];
                record[j] = temp;
                states[count] = {"first":record[i].index,"second":record[j].index,};
                j--;
                count++;
            }
        }
        return i;
    }

    function sort(first,end){
        if(first<end){
            let pivot = partition(first,end);
            sort(first,pivot-1);
            sort(pivot+1,end);
        }
    }
    sort(0,record.length-1);

    return states;
}