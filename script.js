var bid = document.querySelector('#bid');
var edu = document.querySelector('#education');
var networth = document.querySelector('#networth');
var caste = document.querySelector('#caste');
var skills = document.querySelectorAll('#skills');
var age = document.querySelectorAll('#age');
var rep = document.querySelectorAll('#reputation');
var total = document.querySelector('#total');

function eduValue() {
      if(edu.value=='1') {
        return 1.5
        }
        if(edu.value=='2') {
            return 1.2
        }
        if(edu.value=='3') {
            return 1.05
        }
        if(edu.value=='4') {
            return 0.9
        }
        if(edu.value=='blank') {
            return 1
        }
    }
    function networthValue() {
        if(networth.value=='1') {
            return 2
        }
        if(networth.value=='2') {
            return 1.5
        }
        if(networth.value=='3') {
            return 1.2
        }
        if(networth.value=='blank') {
            return 1
        }
    }
    function casteValue() {
        if(caste.value=='1') {
            return 100
        }
        if(caste.value=='2') {
            return 50
        }
        if(caste.value=='3') {
            return 20
        }
        if(caste.value=='4') {
            return 10
        }
        if(caste.value=='5') {
            return -50
        }
        if(caste.value=='blank') {
            return 0
        }
    }
    function skillsValue() {
        let a=0;
        skills.forEach(item=> {
            if(item.checked) {
                if(item.value=='1') {
                    return a+=10
                }
                if(item.value=='2') {
                    return a+=20
                }
                if(item.value=='3') {
                    return a+=15
                }
                if(item.value=='4') {
                    return a+=10
                }
                else {
                    return a+=0
                }
            }
        });
        return a;
    }
function ageValue() {
    let a=1;
    age.forEach(item=>{
        if(item.checked) {
            if(item.value=='1') {
                return a*=1.5
            }
            
            else if(item.value=='2') {
                return a*=1.2
            }
            
            else if(item.value=='3') {
                return a*=0.95
            }
            else {
                return 1
            }
        }
    });
    return a;
}
function repValue() {
    let a=1;
    let b=0;
    rep.forEach(item=> {
        if(item.checked){
            if(item.value=='1') {
                return a*=0.85
            }
            else if(item.value=='2') {
                return a*=0.9
            }
            else if(item.value=='3') {
                return b-=20
            }
            else {
                return [a, b]
            }
        }
    })
    return [a, b];
}

let totalBid=0; 

function totalCalculate(cost){
    if(cost!==""){
        cost = parseInt(cost);
        totalBid=cost*eduValue()*networthValue()*repValue()[0]*ageValue()+casteValue()+skillsValue()+repValue()[1];
        return totalBid;
    }
    else 
        return 0;
}