$("img").each(function(){ if($(this).width() > $(this).parent().width()) { $(this).width("100%"); }});

//����jquery����obj,�����W,���߶�H
function imgZone(obj,W,H){
var bl=obj.width()/obj.height();
if(bl >(W/H)){
if(obj.width()>W){
obj.width(W);
obj.height(Math.floor(W/bl));
}
}
else{
if(obj.height()>H){
obj.height(H);
obj.width(Math.floor(H*bl));
}
}
}