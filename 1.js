function Run(N) {
    if (N<2){
        return false;
    }
    for (let i=2 ; i<N ;i++){
        if (N % i == 0){
            return false;
        }
    }
    return true;
}
function display(num){
    let dem=0;
    while (dem<5){
        if (Run(num)==true){
            document.write(num+" ");
            dem+=1;
        }
        num++;

    }
}
display(5)