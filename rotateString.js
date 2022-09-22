function rotateString(str,instruction) {
    for (let i = 0; i < instruction.length; i+=2) {
       const strIns = instruction[i]+instruction[i+1] 
       if (strIns[0]=='R') {
        for (let r = 1; r <= strIns.charCodeAt(1)-48; r++) {
            for (let j = 0; j < str.length; j++) {
                let temp;
                if (j===0) {
                    str = [...str];
                    temp = str[0];
                    str[0]=str[str.length-1]
                    str[str.length-1] = temp;
                    str =str.join("");
                }else if(j===str.length-1){
                    break;
                }
                else if(str.length%2===0){
                    str = [...str];
                    temp = str[j+1];
                    str[j+1]=str[j]
                    str[j] = temp;
                    str =str.join("");
                }   
            }
            console.log(str);
        }
       }
    }
}

//Only did right rotation as time ended

rotateString("abc","R1L2L3")