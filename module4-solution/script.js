var names=new Array();
names[0]="messi";
names[1]="ronaldo";
names[2]="neymar";
names[3]="nmbape";
names[4]="pogba";
names[5]="benzima";
names[6]="modric";
names[7]="kroos";
names[8]="lewandowski";
names[9]="kane";


for (var i = 0; i < names.length; i++) {
  if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
  }
  else{
    console.log("Hello "+ names[i])
  }
}