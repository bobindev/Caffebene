console.log("TRAIN AREA");
//TASK - Q

function hasProperty(obj: any, str: string) {
    const keys = Object.keys(obj);
    if (keys.includes(str)) return true;
    else return false;
    
}

const include = hasProperty({name: "BMW", model: "M3"}, "name");
console.log(include);