# jquery-move
Ever wanted to move a jquery element only by telling how much on x-axis and y-axis, without calculate everything with .css() ? Here is a plugin that does it !

Short version: 
$('#element').move({x: 15}); // default {position: "absolute", unit: "px"}

Long version:
$('#element').move({x: 15, y: -50, position: "relative", unit: "px"});