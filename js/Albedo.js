window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);

function add1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=6; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=6; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=6; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=7; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=6; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}



function del1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){
let relic1_matrix = [];
let allrows1 = relic1.querySelectorAll('tr');
allrows1.forEach(tr=>{
let allcells1 = tr.querySelectorAll('td');
let all =[];
allcells1.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic1_matrix.push(all);
})


let relic2_matrix = [];
let allrows2 = relic2.querySelectorAll('tr');
allrows2.forEach(tr=>{
let allcells2 = tr.querySelectorAll('td');
let all =[];
allcells2.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic2_matrix.push(all);
})


let relic3_matrix = [];
let allrows3 = relic3.querySelectorAll('tr');
allrows3.forEach(tr=>{
let allcells3 = tr.querySelectorAll('td');
let all =[];
allcells3.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic3_matrix.push(all);
})


let relic4_matrix = [];
let allrows4 = relic4.querySelectorAll('tr');
allrows4.forEach(tr=>{
let allcells4 = tr.querySelectorAll('td');
let all =[];
allcells4.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic4_matrix.push(all);
})


let relic5_matrix = [];
let allrows5 = relic5.querySelectorAll('tr');
allrows5.forEach(tr=>{
let allcells5 = tr.querySelectorAll('td');
let all =[];
allcells5.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic5_matrix.push(all);
})


var C1=relic1_matrix.length;
var C2=relic2_matrix.length;
var C3=relic3_matrix.length;
var C4=relic4_matrix.length;
var C5=relic5_matrix.length;
var Cx=C1*C2*C3*C4*C5;


function eval(){
    var totalATK=baseATK*(1+(ATKrate+u_ATKrate)*0.01)+ATK;
    var totalDEF=baseDEF*(1+(DEFrate+u_DEFrate)*0.01)+DEF;
    var total_CRIT=(5+u_CRIT+CRIT)*0.01;
    var total_CRITd=(50+u_CRITd+CRITd)*0.01;

    console.log(flower,skill,totalDEF);

    var model
    =((burst+7*burst_flower*possibility_flower)*totalATK+120*totalDEF*DEF_flag)*(1+total_CRIT*total_CRITd)*(1+kizoku+u_burst)
    +skill*flower*totalDEF*1.25*(1+(total_CRIT+fushoku_crit)*total_CRITd)*(1+fushoku_damage+bakuto);

    return model*(1+0.01*(u_geo+geo));
}



let EV_index=[];
let EV_vector=[];



stella=Number($("#stella").val());
talent1=Number($("#talent1").val());
talent2=Number($("#talent2").val());
talent3=Number($("#talent3").val());
weapon_rank=Number($("#weapon_rank").val());
relic_type=Number($("#relic_type").val());

flower=Number($("#flower").val());
possibility_flower  =Number($("#possibility_flower").val());


var DEF_flag=0;
if(stella>=2){
    DEF_flag=1;
}


u_ATKrate           =Number($("#u_ATKrate").val());
u_DEFrate=0;
u_CRIT              =Number($("#u_CRIT").val());
u_CRITd             =0;
u_geo               =Number($("#u_geo").val());
u_burst             =Number($("#u_burst").val())*0.01;


u_geo+=28.8;


skill=187+13.655*(talent2-6);
burst=514+37.429*(talent3-6);
burst_flower=100.8+7.35*(talent3-6);



baseATK=251;
baseDEF=876;
var fushoku_crit=0;
var fushoku_damage=0;

if($("#weapon").val()=="reimei"){
    u_CRITd+=49.6;
    baseATK+=401;
    u_CRIT+=14+3.5*(weapon_rank-1);
}
if($("#weapon").val()=="fushoku"){
    baseATK+=510;
    fushoku_crit=0.06+0.015*(weapon_rank-1);
    fushoku_damage=0.16+0.04*(weapon_rank-1);
}









var index=0;

var alert_label=0;
var alert_nan=0;
var alert_minus=0;


for (var r1=0 ; r1<C1 ; r1++){
    for (var r2=0 ; r2<C2 ; r2++){
        for (var r3=0 ; r3<C3 ; r3++){
            for (var r4=0 ; r4<C4 ; r4++){
                for (var r5=0 ; r5<C5 ; r5++){

                    var series  =relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                    var ATK     =relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                    var ATKrate =relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2];
                    var DEF     =relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                    var DEFrate =relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4];
                    var CRIT    =relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5];
                    var CRITd   =relic1_matrix[r1][6]+relic2_matrix[r2][6]+relic3_matrix[r3][6]+relic4_matrix[r4][6]+relic5_matrix[r5][6];
                    var geo     =relic4_matrix[r4][7];

                    var ev=0;


                    kizoku=0;
                    bakuto=0;



                    if(relic_type==1){
                        if(series%(13**2)==0){
                            DEFrate+=30;
                        }if(series%(13**4)==0){
                            geo+=24;
                            DEFrate+=24;
                        }if(series%(11**2)==0){
                            geo+=15;
                        }if(series%(5**2)==0){
                            kizoku+=0.2;
                        }if(series%(3**2)==0){
                            bakuto+=0.2;
                        }if(series%(2**2)==0){
                            DEFrate+=30;
                        }
                        ev=eval();
                    }
                    if(relic_type==2&&series%(7**4)==0){
                        ev=eval();
                    }
                    if(relic_type==3&&series%(11**4)==0){
                        geo+=15;
                        ev=eval();
                    }
                    EV_index[index] = [r1,r2,r3,r4,r5];
                    EV_vector[index] = ev;
                    if(isNaN(ev)){
                        alert_nan=1;
                        alert_label=1;
                    }
                    if(ev<0){
                        alert_minus=1;
                        alert_label=1;
                    }
                    index++;
                }
            }
        }
    }
}

if(alert_minus==1){
    alert("期待値がマイナスです");
}if(alert_nan==1){
    alert("数値を入力してください");
}



var max_index=0;
var max=-1;
for(var j=0 ; j<Cx ; j++){
    if(max<EV_vector[j]){
        max=EV_vector[j];
        max_index=j;
    }
}

if(max==0){
    alert_label=1;
    if(relic_type==2){
    alert("千岩4セットがありません");
    }
    if(relic_type==3){
    alert("悠久4セットがありません");
    }
}



var result = document.getElementById('result');



function relic_name(n){
    if(n==13){
        return"華館";
    }
    if(n==11){
        return "悠久";
    }
    if(n==7){
        return "千岩";
    }
    if(n==5){
        return"旧貴族";
    }
    if(n==3){
        return"博徒";
    }
    if(n==2){
        return"守護";
    }
    if(n==1){
        return "その他";
    }
}

var R1=EV_index[max_index][0];
var R2=EV_index[max_index][1];
var R3=EV_index[max_index][2];
var R4=EV_index[max_index][3];
var R5=EV_index[max_index][4];

if(alert_label==0){
    result.rows[0].cells[1].innerHTML=relic_name(relic1_matrix[R1][0]);
    result.rows[1].cells[1].innerHTML=relic_name(relic2_matrix[R2][0]);
    result.rows[2].cells[1].innerHTML=relic_name(relic3_matrix[R3][0]);
    result.rows[3].cells[1].innerHTML=relic_name(relic4_matrix[R4][0]);
    result.rows[4].cells[1].innerHTML=relic_name(relic5_matrix[R5][0]);

    for(var s=2;s<=7;s++){
    result.rows[0].cells[s].innerHTML=relic1_matrix[R1][s-1];
    result.rows[1].cells[s].innerHTML=relic2_matrix[R2][s-1];
    result.rows[2].cells[s].innerHTML=relic3_matrix[R3][s-1];
    result.rows[3].cells[s].innerHTML=relic4_matrix[R4][s-1];
    result.rows[4].cells[s].innerHTML=relic5_matrix[R5][s-1];
    }
    console.log(relic4_matrix[R4][7]);

    if(relic4_matrix[R4][7]>1){
        result.rows[3].cells[0].innerHTML="杯(岩)";
    }else{
        result.rows[3].cells[0].innerHTML="杯";
    }
}

console.log(relic1_matrix);
console.log(relic2_matrix);
console.log(relic3_matrix);
console.log(relic4_matrix);
console.log(relic5_matrix);
console.log(EV_index);
console.log(EV_vector);


}