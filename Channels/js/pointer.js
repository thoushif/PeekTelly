var app = angular.module('myPointerApp',[]);
app.controller('pointerCtrl', function($scope,$compile, $timeout) {
	$scope.heads=true;
	$scope.headUrl="./pics/Pointers/quarter-coin-head.jpg";
	$scope.tailUrl="./pics/Pointers/quarter-coin-tail.jpg";
	$scope.flipping="./pics/Pointers/flipping.gif";
	$("#coin").css('background-image', 'url(' + $scope.headUrl + ')');
		
	
		
	$scope.greeting = "welcome pointer program!";
	$scope.windowWidth = window.innerWidth; 
	$scope.windowHeight = window.innerHeight;
	 
	 var imageUrl="./pics/Pointers/1.jpg";
	 $scope.basepoints = [{x:546,y:422},{x:546,y:423},{x:546,y:424},{x:546,y:425},{x:546,y:426},{x:546,y:427},{x:546,y:428},{x:546,y:429},{x:546,y:430},{x:546,y:431},{x:546,y:432},{x:546,y:433},{x:546,y:434},{x:546,y:435},{x:546,y:436},{x:546,y:437},{x:546,y:438},{x:546,y:439},{x:546,y:440},{x:546,y:441},{x:546,y:442},{x:546,y:443},{x:546,y:444},{x:546,y:445},{x:546,y:446},{x:546,y:447},{x:546,y:448},{x:546,y:449},{x:546,y:450},{x:546,y:451},{x:546,y:452},{x:546,y:453},{x:546,y:454},{x:546,y:455},{x:546,y:456},{x:546,y:457},{x:546,y:458},{x:546,y:459},{x:546,y:460},{x:546,y:461},{x:546,y:462},{x:546,y:463},{x:546,y:464},{x:546,y:465},{x:546,y:466},{x:546,y:467},{x:546,y:468},{x:546,y:469},{x:546,y:470},{x:546,y:471},{x:546,y:472},{x:546,y:473},{x:546,y:474},{x:546,y:475},{x:546,y:476},{x:546,y:477},{x:546,y:478},{x:546,y:479},{x:546,y:480},{x:546,y:481},{x:546,y:482},{x:546,y:483},{x:546,y:484},{x:546,y:485},{x:546,y:486},{x:546,y:487},{x:546,y:488},{x:546,y:489},{x:546,y:490},{x:546,y:491},{x:546,y:492},{x:546,y:493},{x:546,y:494},{x:546,y:495},{x:546,y:496},{x:546,y:497},{x:546,y:498},{x:546,y:499},{x:546,y:500},{x:546,y:501},{x:546,y:502},{x:546,y:503},{x:546,y:504},{x:546,y:505},{x:546,y:506},{x:546,y:507},{x:546,y:508},{x:546,y:509},{x:546,y:510},{x:546,y:511},{x:546,y:512},{x:546,y:513},{x:546,y:514},{x:546,y:515},{x:546,y:516},{x:546,y:517},{x:546,y:518},{x:546,y:519},{x:546,y:520},{x:546,y:521},{x:546,y:522},{x:546,y:523},{x:546,y:524},{x:546,y:525},{x:546,y:526},{x:546,y:527},{x:546,y:528},{x:546,y:529},{x:546,y:530},{x:546,y:531},{x:546,y:532},{x:546,y:533},{x:546,y:534},{x:546,y:535},{x:546,y:536},{x:546,y:537},{x:546,y:538},{x:546,y:539},{x:546,y:540},{x:546,y:541},{x:546,y:542},{x:546,y:543},{x:546,y:544},{x:546,y:545},{x:546,y:546},{x:546,y:547},{x:546,y:548},{x:546,y:549},{x:546,y:550},{x:546,y:551},{x:546,y:552},{x:546,y:553},{x:546,y:554},{x:546,y:555},{x:546,y:556},{x:546,y:557},{x:546,y:558},{x:546,y:559},{x:546,y:560},{x:546,y:561},{x:546,y:562},{x:546,y:563},{x:546,y:564},{x:546,y:565},{x:546,y:566},{x:546,y:567},{x:546,y:568},{x:546,y:569},{x:546,y:570},{x:546,y:571},{x:546,y:572},{x:546,y:573},{x:546,y:574},{x:546,y:575},{x:546,y:576},{x:546,y:577},{x:546,y:578},{x:546,y:579},{x:546,y:580},{x:546,y:581},{x:546,y:582},{x:546,y:583},{x:546,y:584},{x:546,y:585},{x:546,y:586},{x:546,y:587},{x:546,y:588},{x:546,y:589},{x:546,y:590},{x:546,y:591},{x:546,y:592},{x:546,y:593},{x:546,y:594},{x:546,y:595},{x:546,y:596},{x:546,y:597},{x:546,y:598},{x:546,y:599},{x:546,y:600},{x:546,y:601},{x:546,y:602},{x:546,y:603},{x:546,y:604},{x:546,y:605},{x:546,y:606},{x:546,y:607},{x:546,y:608},{x:546,y:609},{x:546,y:610},{x:546,y:611},{x:546,y:612},{x:546,y:613},{x:546,y:614},{x:546,y:615},{x:546,y:616},{x:546,y:617},{x:546,y:618},{x:546,y:619},{x:546,y:620},{x:546,y:621},{x:546,y:622},{x:546,y:623},{x:546,y:624},{x:546,y:625},{x:546,y:626},{x:546,y:627},{x:546,y:628},{x:546,y:629},{x:546,y:630},{x:546,y:631},{x:546,y:632},{x:546,y:633},{x:546,y:634},{x:546,y:635},{x:546,y:636},{x:546,y:637},{x:546,y:638},{x:546,y:639},{x:546,y:640},{x:546,y:641},{x:546,y:642},{x:546,y:643},{x:546,y:644},{x:546,y:645},{x:546,y:646},{x:546,y:647},{x:546,y:648},{x:546,y:649},{x:546,y:650},{x:546,y:651},{x:546,y:652},{x:546,y:653},{x:546,y:654},{x:546,y:655},{x:546,y:656},{x:546,y:657},{x:546,y:658},{x:546,y:659},{x:546,y:660},{x:546,y:661},{x:546,y:662},{x:546,y:663},{x:546,y:664},{x:546,y:665},{x:546,y:666},{x:546,y:667}];
	
	 
	 $("#centerbox").css('background-image', 'url(' + imageUrl + ')');

	 $("#centerbox").css('background-size', 'cover');
 
	 $scope.mouseMoved = function(event) {
	 	  //console.log($scope.windowHeight);
		//console.log("im here in function");
        $scope.x= event.offsetX;
        $scope.y=   event.offsetY;
		//$scope.points = [];
		
		//lets take 100,100 as example
		/*
		$scope.xDummy= 100;
        $scope.yDummy=  100;
		x1=100;
		y1=100;
		x2=$scope.xDummy;
		y2=$scope.yDummy;
 		console.log("start");
		$scope.newy =  Math.round(  (1 - T) * y1 + T * y2);
		$scope.newx  =  Math.round((1 - T) * x1 + T * x2);
		
		for(var i=0;i<$scope.windowWidth;i=i+5){
			for(var j=0;j<$scope.windowHeight;j=j+5){
				x2=i; y2 = j;
				$scope.distance = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));

				T = 10/$scope.distance;
				$scope.newy =  Math.round(  (1 - T) * y1 + T * y2);
				$scope.newx  =  Math.round((1 - T) * x1 + T * x2);
				$scope.points.push({x:$scope.newx,y:$scope.newy});
				
				 
 
			}
		}*/
		//console.log($scope.points);
		console.log("end");
		
		/*for(var k = 0;k<$scope.windowHeight;k++){
		//alert($scope.basepoints[k]);
			if($scope.containsObject($scope.basepoints[k],$scope.points)){
			alert(true);
			}
		}*/
		
		
		$("#dummyNew").css('top', $scope.y);
		$("#dummyNew").css('left', $scope.x);
		
		
		
		
		
     }
	
	
	
	$scope.containsObject = function(obj, list) {
		var i;
		for (i = 0; i < list.length; i++) {
			if (angular.equals(list[i], obj)) {
				return true;
			}
		}

		return false;
	};
	$scope.changeImage = function(){
	
		$("#coin").css('background-image', 'url(' + $scope.flipping + ')');
		$("#dummy").html('flipping...');
		$timeout(function(){
					
					var random = Math.floor((Math.random() * 2) + 1);
					/*$scope.heads = !$scope.heads;
					if($scope.heads==true){
						$("#coin").css('background-image', 'url(' + $scope.headUrl + ')');
					}else{
						$("#coin").css('background-image', 'url(' + $scope.tailUrl + ')');
					}*/

					if(random==1){
						$("#coin").css('background-image', 'url(' + $scope.headUrl + ')');
						$("#dummy").html('Heads');
					}else{
						$("#coin").css('background-image', 'url(' + $scope.tailUrl + ')');
						$("#dummy").html('Tails');
					}
		}
		
		, 1000); 
		
		
		
		 
	};
	
});
 
