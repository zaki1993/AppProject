app.controller('Sudoku', function($scope, $location, auth, identity,notifier) {
$scope.solve = function(){
        var x1 = document.getElementById('sudoku01');
        var x2 = document.getElementById('sudoku02');
        var x3 = document.getElementById('sudoku03');
        var x4 = document.getElementById('sudoku04');
        var x5 = document.getElementById('sudoku05');
        var x6 = document.getElementById('sudoku06');
        var x7 = document.getElementById('sudoku07');
        var x8 = document.getElementById('sudoku08');
        var x9 = document.getElementById('sudoku09');
        var x10 = document.getElementById('sudoku10');
        var x11 = document.getElementById('sudoku11');
        var x12 = document.getElementById('sudoku12');
        var x13 = document.getElementById('sudoku13');
        var x14 = document.getElementById('sudoku14');
        var x15 = document.getElementById('sudoku15');
        var x16 = document.getElementById('sudoku16');
        var x17 = document.getElementById('sudoku17');
        var x18 = document.getElementById('sudoku18');
        var x19 = document.getElementById('sudoku19');
        var x20 = document.getElementById('sudoku20');
        var x21 = document.getElementById('sudoku21');
        var x22 = document.getElementById('sudoku22');
        var x23 = document.getElementById('sudoku23');
        var x24 = document.getElementById('sudoku24');
        var x25 = document.getElementById('sudoku25');
        var x26 = document.getElementById('sudoku26');
        var x27 = document.getElementById('sudoku27');
        var x28 = document.getElementById('sudoku28');
        var x29 = document.getElementById('sudoku29');
        var x30 = document.getElementById('sudoku30');
        var x31 = document.getElementById('sudoku31');
        var x32 = document.getElementById('sudoku32');
        var x33 = document.getElementById('sudoku33');
        var x34 = document.getElementById('sudoku34');
        var x35 = document.getElementById('sudoku35');
        var x36 = document.getElementById('sudoku36');
        var x37 = document.getElementById('sudoku37');
        var x38 = document.getElementById('sudoku38');
        var x39 = document.getElementById('sudoku39');
        var x40 = document.getElementById('sudoku40');
        var x41 = document.getElementById('sudoku41');
        var x42 = document.getElementById('sudoku42');
        var x43 = document.getElementById('sudoku43');
        var x44 = document.getElementById('sudoku44');
        var x45 = document.getElementById('sudoku45');
        var x46 = document.getElementById('sudoku46');
        var x47 = document.getElementById('sudoku47');
        var x48 = document.getElementById('sudoku48');
        var x49 = document.getElementById('sudoku49');
        var x50 = document.getElementById('sudoku50');
        var x51 = document.getElementById('sudoku51');
        var x52 = document.getElementById('sudoku52');
        var x53 = document.getElementById('sudoku53');
        var x54 = document.getElementById('sudoku54');
        var x55 = document.getElementById('sudoku55');
        var x56 = document.getElementById('sudoku56');
        var x57 = document.getElementById('sudoku57');
        var x58 = document.getElementById('sudoku58');
        var x59 = document.getElementById('sudoku59');
        var x60 = document.getElementById('sudoku60');
        var x61 = document.getElementById('sudoku61');
        var x62 = document.getElementById('sudoku62');
        var x63 = document.getElementById('sudoku63');
        var x64 = document.getElementById('sudoku64');
        var x65 = document.getElementById('sudoku65');
        var x66 = document.getElementById('sudoku66');
        var x67 = document.getElementById('sudoku67');
        var x68 = document.getElementById('sudoku68');
        var x69 = document.getElementById('sudoku69');
        var x70 = document.getElementById('sudoku70');
        var x71 = document.getElementById('sudoku71');
        var x72 = document.getElementById('sudoku72');
        var x73 = document.getElementById('sudoku73');
        var x74 = document.getElementById('sudoku74');
        var x75 = document.getElementById('sudoku75');
        var x76 = document.getElementById('sudoku76');
        var x77 = document.getElementById('sudoku77');
        var x78 = document.getElementById('sudoku78');
        var x79 = document.getElementById('sudoku79');
        var x80 = document.getElementById('sudoku80');
        var x81 = document.getElementById('sudoku81');
        var y1 = x1.value;
        var y2 = x2.value;
        var y3 = x3.value;
        var y4 = x4.value;
        var y5 = x5.value;
        var y6 = x6.value;
        var y7 = x7.value;
        var y8 = x8.value;
        var y9 = x9.value;
        var y10 = x10.value;
        var y11 = x11.value;
        var y12 = x12.value;
        var y13 = x13.value;
        var y14 = x14.value;
        var y15 = x15.value;
        var y16 = x16.value;
        var y17 = x17.value;
        var y18 = x18.value;
        var y19 = x19.value;
        var y20 = x20.value;
        var y21 = x21.value;
        var y22 = x22.value;
        var y23 = x23.value;
        var y24 = x24.value;
        var y25 = x25.value;
        var y26 = x26.value;
        var y27 = x27.value;
        var y28 = x28.value;
        var y29 = x29.value;
        var y30 = x30.value;
        var y31 = x31.value;
        var y32 = x32.value;
        var y33 = x33.value;
        var y34 = x34.value;
        var y35 = x35.value;
        var y36 = x36.value;
        var y37 = x37.value;
        var y38 = x38.value;
        var y39 = x39.value;
        var y40 = x40.value;
        var y41 = x41.value;
        var y42 = x42.value;
        var y43 = x43.value;
        var y44 = x44.value;
        var y45 = x45.value;
        var y46 = x46.value;
        var y47 = x47.value;
        var y48 = x48.value;
        var y49 = x49.value;
        var y50 = x50.value;
        var y51 = x51.value;
        var y52 = x52.value;
        var y53 = x53.value;
        var y54 = x54.value;
        var y55 = x55.value;
        var y56 = x56.value;
        var y57 = x57.value;
        var y58 = x58.value;
        var y59 = x59.value;
        var y60 = x60.value;
        var y61 = x61.value;
        var y62 = x62.value;
        var y63 = x63.value;
        var y64 = x64.value;
        var y65 = x65.value;
        var y66 = x66.value;
        var y67 = x67.value;
        var y68 = x68.value;
        var y69 = x69.value;
        var y70 = x70.value;
        var y71 = x71.value;
        var y72 = x72.value;
        var y73 = x73.value;
        var y74 = x74.value;
        var y75 = x75.value;
        var y76 = x76.value;
        var y77 = x77.value;
        var y78 = x78.value;
        var y79 = x79.value;
        var y80 = x80.value;
        var y81 = x81.value;
    //var arrayOfNumbers =
     //[2,6,7,8,3,4,9,5,1,
        //1,8,3,6,5,9,7,2,4,
        //4,9,5,1,7,2,3,8,6,
        //7,4,8,5,6,3,2,1,9,
        //5,2,9,4,1,7,6,3,8,
        //3,1,6,9,2,8,5,4,7,
        //8,5,1,3,9,6,4,7,2,
        //6,7,4,2,8,5,1,9,3,
        //9,3,2,7,4,1,8,6,5];
        if(y1==2 && y2==6 && y3==7 && y4==8 && y5==3 && y6==4 && y7==9 && y8==5 && y9==1
            && y10==1 && y11==8 && y12==3 && y13==6 && y14==5 && y15==9 && y16==7 && y17==2 && y18 ==4
            && y19 ==4 && y20==9 && y21==5 && y22==1 && y23==7 && y24==2 && y25==3 && y26==8 && y27==6
            && y28==7 && y29==4 && y30==8 && y31==5 && y32==6 & y33==3 && y34==2 && y35==1 && y36==9
            && y37==5 && y38==2 && y39==9 && y40==4 && y41==1 && y42==7 && y43==6 && y44==3 && y45==8
            && y46==3 && y47==1 && y48==6 && y49==9 && y50==2 && y51==8 && y52==5 && y53==4 && y54==7
            && y55==8 && y56== 5 && y57==1 && y58==3 && y59==9 && y60==6 && y61==4 && y62==7 && y63==2
            && y64==6 && y65==7 && y66==4 && y67==2 && y68==8 && y69==5 && y70==1 && y71==9 && y72==3
            && y73==9 && y74==3 && y75==2 && y76==7 && y77==4 && y78==1 && y79==8 && y80==6 && y81==5){
            notifier.success('You solved the sudoku puzzle..');
        }
        else{
            notifier.error('Some numbers are wrong..');
        }
    }
});