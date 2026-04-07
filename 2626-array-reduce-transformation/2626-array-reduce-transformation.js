/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val=init
    if(nums.length===0)return init
    for(let num=0;num<nums.length;num++){
        val=fn(val,nums[num])
    }
    return val
    
};