var app=angular.module("app",[]);
app.controller("control",function($scope){
      $scope.portada=true;
  $scope.funcion=function(x){
    if(x==1){
      $scope.c=false;
      $scope.b=false;
      $scope.a=true;
      $scope.portada=false;
      $scope.bipe=false;
      $scope.secre=false;
      $scope.perito=false;
    }else if(x==100){
      $scope.portada=true;
      $scope.a=false;
      $scope.c=false;
      $scope.b=false;
      $scope.bipe=false;
      $scope.secre=false;
      $scope.perito=false;
    }else if(x==2){
      $scope.c=false;
      $scope.b=true;
      $scope.a=false;
      $scope.bipe=false;
      $scope.portada=false;
      $scope.secre=false;
      $scope.perito=false;
    }else if(x==3){
      $scope.c=true;
      $scope.b=false;
      $scope.a=false;
      $scope.bipe=false;
      $scope.portada=false;
      $scope.secre=false;
      $scope.perito=false;
    }else if(x==4){
      $scope.bipe=true;
      $scope.c=false;
      $scope.b=false;
      $scope.a=false;
      $scope.portada=false;
      $scope.secre=false;
      $scope.perito=false;
    }else if(x==5){
      $scope.secre=true;
      $scope.bipe=false;
      $scope.c=false;
      $scope.b=false;
      $scope.a=false;
      $scope.portada=false;
      $scope.perito=false;
    }else if(x==6){
      $scope.perito=true;
      $scope.secre=false;
      $scope.bipe=false;
      $scope.c=false;
      $scope.b=false;
      $scope.a=false;
      $scope.portada=false;
    }
  }
  $scope.ods=true;
  $scope.funcion2=function(s){
    if(s==1){
      $("#oo1").addClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo5").removeClass("od5");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=true;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.e=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==2){
      $("#oo2").addClass("od2");
      $("#oo1").removeClass("od1");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo5").removeClass("od5");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=true;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.e=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==3){
      $("#oo3").addClass("od3");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo4").removeClass("od4");
      $("#oo5").removeClass("od5");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=true;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.e=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==4){
      $("#oo4").addClass("od4");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo5").removeClass("od5");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=true;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.e=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==5){
      $("#oo5").addClass("od5");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=true;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.e=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==6){
      $("#oo6").addClass("od6");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo5").removeClass("od5");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=true;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.e=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==7){
      $("#oo7").addClass("od7");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo5").removeClass("od5");
      $("#oo8").removeClass("od8");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=true;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.e=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==8){
      $("#oo8").addClass("od8");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=true;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.e=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==9){
      $("#oo9").addClass("od9");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo10").removeClass("od10");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=true;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.e=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==10){
      $("#oo10").addClass("od10");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=true;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.e=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==11){
      $("#oo11").addClass("od11");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo10").removeClass("od10");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=true;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.e=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==12){
      $("#oo12").addClass("od12");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo10").removeClass("od10");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=true;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.e=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==13){
      $("#oo13").addClass("od13");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo10").removeClass("od10");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=true;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.e=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==14){
      $("#oo10").addClass("od10");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo10").removeClass("od10");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=true;
      $scope.o15=false;
      $scope.o16=false;
      $scope.e=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==15){
      $("#oo15").addClass("od15");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo10").removeClass("od10");
      $("#oo16").removeClass("od16");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=true;
      $scope.o16=false;
      $scope.e=false;
      $scope.o17=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==16){
      $("#oo16").addClass("od16");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo10").removeClass("od10");
      $("#oo17").removeClass("od17");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.e=false;
      $scope.o16=true;
      $scope.o17=false;
      $scope.e=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==17){
      $("#oo17").addClass("od17");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo10").removeClass("od10");
      $scope.ods=false;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.e=false;
      $scope.o17=true;
      $scope.e=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(s==100){
      $("#oo17").removeClass("od17");
      $("#oo1").removeClass("od1");
      $("#oo2").removeClass("od2");
      $("#oo3").removeClass("od3");
      $("#oo4").removeClass("od4");
      $("#oo6").removeClass("od6");
      $("#oo7").removeClass("od7");
      $("#oo8").removeClass("od8");
      $("#oo5").removeClass("od5");
      $("#oo9").removeClass("od9");
      $("#oo11").removeClass("od11");
      $("#oo12").removeClass("od12");
      $("#oo13").removeClass("od13");
      $("#oo14").removeClass("od14");
      $("#oo15").removeClass("od15");
      $("#oo16").removeClass("od16");
      $("#oo10").removeClass("od10");
      $scope.ods=true;
      $scope.o1=false;
      $scope.o2=false;
      $scope.o3=false;
      $scope.o4=false;
      $scope.o5=false;
      $scope.o6=false;
      $scope.o7=false;
      $scope.o8=false;
      $scope.o9=false;
      $scope.o10=false;
      $scope.o11=false;
      $scope.o12=false;
      $scope.o13=false;
      $scope.o14=false;
      $scope.o15=false;
      $scope.o16=false;
      $scope.o17=false;
      $scope.e=false;
      $scope.e=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }
  }
  $scope.funcion3=function(x){
    if (x==1) {
      $scope.e=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=true;
      $scope.ss=false;
      $scope.o2=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if(x==2){
      $scope.e=true;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.o2=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if (x==3){
      $scope.e=false;
      $scope.bl=false;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=true;
      $scope.o2=false;
      $scope.ds=false;
      $scope.bb=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }else if (x==4){
      $scope.e=false;
      $scope.bl=true;
      $scope.os=false;
      $scope.s=false;
      $scope.ss=false;
      $scope.o2=false;
      $scope.ds=false;
      $scope.bb=false;
      scope.bbb=false;
      $scope.pcjm=false;
    }
  }
  $scope.funcion4=function(y){
    if (y==2) {
      $scope.ds=true;
      $scope.bb=false;
      $scope.o8=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    } else if(y==1){
      $scope.ds=false;
      $scope.bb=true;
      $scope.o8=false;
      $scope.bbb=false;
      $scope.pcjm=false;
    }
  }
  $scope.funcion5=function(m){
    if (m==1) {
      $scope.bbb=true;
      $scope.pcjm=false;
      $scope.o4=false;
    }else if (m==2) {
      $scope.bbb=false;
      $scope.pcjm=true;
      $scope.o4=false;
    }
  }
})
