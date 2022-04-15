function getNthFib(n) {
    if(n==1) return 0
    if(n==2) return 1
    let current = 1, last = 0, next;
    for(let index = 2;index != n;index++){
        next = current + last
        last = current
        current = next		
    }
    return next
}