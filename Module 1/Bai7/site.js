// let dtb=8.5;
// let label ="";
// if(dtb >=9)
//     label = "A";
// else if(dtb >=8)
//     label = "B";
//     else if(dtb >=7)
//         label = "C";
//         else if(dtb >=5)
//             label = "D";
//             else label = "E";
// switch(label){
//     case "A":{
//         alert("XS");
//         break;
//     }
//     case "B":{
//         alert("G");
//         break;
//     }
//     case "C":{
//         alert("Kha");
//         break;
//     }
//     case "D":{
//         alert("TB");
//         break;
//     }
//     case "E":{
//         alert("Yeu");
//         break;
//     }
//     default:{
//         alert("Invalid score");
//     }
// }

let dtb = 8.7;
switch(Math.floor(dtb)){
    case 10:
    case 9:{
        alert('xs');
        break;
    }
    case 8:{
        alert('g');
        break
    }
    case 7:{
        alert('k');
        break;
    }
    case 6:
    case 5:{
        alert('tb');
        break;
    }
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:{
        alert('y');
        break;
    }
    default:{
        alert("invalid score");
    }

}