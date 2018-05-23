/*堆排序*/
function heapSort(arr){
    let states = [], count = 0, record = createRecord(arr);
    //筛选法调整堆的算法
    /**
     从顶向下调整子树
     @param i 需要调整的子树的根结点
     @param m 子结点的叶子 ： 也是无序区的最后一个
     */
    function sift(i,m){
        console.log(record);
        let left = 2*i+1; //指向左孩子
        let right = left + 1; //指向右孩子
        let maxChild = left;

        if(left > m) return; //如果左结点越界
        //如果右孩子不越界
        if(right <= m && record[left].data<record[right].data){
            maxChild = right;
        }
        //如果根结点大于左右孩子
        if(record[i].data<record[maxChild].data){
            let temp = record[i];
            record[i] = record[maxChild];
            record[maxChild] = temp;
            states[count] = {"first":record[i].index,"second":temp.index,};
            count++;
            sift(maxChild,m); //递归遍历子树
        }
    }
    //排序算法
    function sort(){
        let len = arr.length - 1;
        let beginIndex = (len-1) / 2;
        //初始建堆
        for(let i = beginIndex; i>=0; i--){
            sift(i,len);
        }

        //不断移走堆顶和重复建堆
        for(let i=len; i>0; i--){
            let temp = record[0];
            record[0] = record[i];
            record[i] = temp;
            states[count] = {"first":record[0].index,"second":temp.index,};
            count++;
            sift(0,i-1);
        }
    }
    sort();

    return states;
}