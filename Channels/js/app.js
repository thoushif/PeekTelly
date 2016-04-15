var  channelData = [{"id":"te1","ChannelName":"ETV","Logo":"./pics/WIW/ETV.jpg","Language":"Telugu","Genre":"entertainment","Age":"all"},
			{"id":"te2","ChannelName":"Maa TV","Logo":"./pics/WIW/maa.png","Language":"Telugu","Genre":"entertainment","Age":"all"},
			{"id":"te3","ChannelName":"Maa Movies","Language":"Telugu","Genre":"movies","Age":"all"},
			{"id":"ta2","ChannelName":"SS Music","Language":"Tamil","Genre":"music","Age":"all"},
			{"id":"hi5","ChannelName":"MTV","Language":"Hindi","Genre":"entertainment","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"ta2","ChannelName":"Kalingar news","Language":"Tamil","Genre":"news","Age":"all"},
			{"id":"en1","ChannelName":"Star Sports","Language":"English","Genre":"sports","Age":"all"}];


var  programData = [{"id":"te1p1","ChannelName":"ETV","ProgramName":"Disney Sandhya","TimeStart":"18:30","TimeEnd":"19:30","Genre":"Comedy","Over":"yes"},
{"id":"te1p1","ChannelName":"ETV","ProgramName":"Jabardash 2","TimeStart":"18:00","TimeEnd":"18:30","Genre":"Comedy","Over":"yes"},
{"id":"te1p1","ChannelName":"ETV","ProgramName":"Jabardash","TimeStart":"21:30","TimeEnd":"22:30","Genre":"Comedy","Over":"yes"},
				{"id":"te1p2","ChannelName":"ETV","ProgramName":"Manasu Mamatha","TimeStart":"19:00","TimeEnd":"19:30","Genre":"Serial","Over":"yes"},
				{"id":"te1p3","ChannelName":"ETV","ProgramName":"ETV News","TimeStart":"21:00","TimeEnd":"21:30","Genre":"NEWS","Over":"yes"},
			{"id":"te1p4","ChannelName":"ETV","ProgramName":"Attarintiki Daredi","TimeStart":"23:00","TimeEnd":"23:30","Genre":"Serial","Over":"yes"},
			{"id":"te2p1","ChannelName":"Maa TV","ProgramName":"Teleshopping","TimeStart":"06:00","TimeEnd":"07:30","Genre":"Shopping","Over":"yes"},
				{"id":"te2p2","ChannelName":"Maa TV","ProgramName":"Maa Voori Vanta","TimeStart":"11:30","TimeEnd":"12:00","Genre":"Cooking","Over":"yes"},
				{"id":"te2p3","ChannelName":"Maa TV","ProgramName":"Samsaram Oka Chadarangaam","TimeStart":"12:00","TimeEnd":"13:00","Genre":"Family","Over":"yes"},
			{"id":"te2p4","ChannelName":"Maa TV","ProgramName":"Maa Maha Lakshmi","TimeStart":"13:00","TimeEnd":"14:00","Genre":"Game Show","Over":"yes"},
			{"id":"te2p4","ChannelName":"Maa TV","ProgramName":"Meelo Evaru Koteeswarudu","TimeStart":"21:00","TimeEnd":"22:30","Genre":"Game Show","Over":"yes"}];



			
var app = angular.module('myApp', ['ngRoute','ngAnimate','angularMoment']);
app.controller('channelsCtrl', function($scope) {
			
	$scope.channelList = channelData;
		
	$scope.setfilterQuery = function(s){
		 $scope.filterQuery =s;

	};
	
	$scope.initial = function(){
	 
		 $scope.channelList = channelData
		 console.log($scope.channelList.length);
		 $scope.filterQuery ="";
		 $scope.filterOn=true;
		
	};

	$scope.ilovethis = function(n){
		 console.log($scope.channelList[n].id);
		 
		
	};
	
	$scope.myColor = this.Language;
});

app.controller('programsCtrl', function($scope, $routeParams,$filter) {
	
	$scope.channelId = $routeParams.channelid;
	$scope.programList = programData;
	$scope.sortField = 'TimeStart';
	$scope.timeFormat = "AM/PM";
	
	$scope.timeNow = $filter('date')(new Date(), 'HH:mm');
	
	$scope.getChannel = function(s){
		var index = 0;
		var found;
		var entry;
		for (index = 0; index < channelData.length; ++index) {
			entry = channelData[index];
		 
			 if ( entry.id.indexOf(s)==0) {
		 
				found = entry;
				break;
			}
				
		}
		return found;
	};
	
	
	$scope.setfilterQuery = function(s){
		 $scope.filterQuery =s;

	};
	$scope.initial = function(){
	 
		 $scope.programList = programData;
		 console.log($scope.channelList.length);
		 $scope.filterQuery ="";
		 $scope.startTime = 0;
		$scope.endTime = 47;
		$scope.sortField = 'TimeStart';
		
		 
	};

	$scope.ilovethis = function(n){
		 console.log($scope.programList[n].id);
		 
		
	};
	$scope.startsWith = function (actual, expected) {

		if(angular.isString(actual)){
			var lowerStr = actual.toLowerCase();
			return lowerStr.indexOf(expected.toLowerCase()) === 0;
		}else{
		return false;
		}
	}
	$scope.selectedTime = function () {
		
		$scope.listTimes= ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
		$scope.listTimesAMPM= ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
 
		if(!$scope.startTime)
			$scope.startTime = 0;
		if(!$scope.endTime)
			$scope.endTime = 0;	
		if($scope.startTime==47)
			$scope.endTime = 47;
		if(parseInt($scope.endTime) < parseInt($scope.startTime) && $scope.startTime != 47)
			$scope.endTime = 1 +  1 *$scope.startTime;
		
		if(angular.equals($scope.timeFormat, "AM/PM")){
			return ''+$scope.listTimesAMPM[$scope.startTime] + "  to  " + $scope.listTimesAMPM[$scope.endTime];
		}else{
			return ''+$scope.listTimes[$scope.startTime] + "  to  " + $scope.listTimes[$scope.endTime];
		}
	 
	}
	
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/programs/:channelid', {
            templateUrl: 'partials/programs.html',
            controller: 'programsCtrl'
        })
        .when('/channels', {
            templateUrl: 'partials/Channels.html',
            controller: 'channelsCtrl'
        })
        .otherwise({
            redirectTo: '/channels',
			
        });
});


app.controller('TimeCtrl', function($scope, $interval) {
  var tick = function() {
    $scope.clock = Date.now();
  }
  tick();
  $interval(tick, 1000);
});

app.filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});


app.directive('channelView', function () {
	return{
		restrict: 'A',
		templateUrl: './partials/channel-view-template.html',
		scope:{
			channels :'='
		}
	};


});

app.filter('TimeFilter', [function () {
	
    return function (programs, selectedStartTime, selectedEndTime, timeNow) {
	selectedStartTime =  selectedStartTime+'';
	selectedEndTime =  selectedEndTime+'';
	
	console.log(timeNow);
 	 
	
	
	
	var listTimes= ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
        if (!angular.isUndefined(programs) && !angular.isUndefined(selectedStartTime) && selectedStartTime.length > 0
						&& !angular.isUndefined(selectedEndTime) && selectedEndTime.length > 0) {
            var tempPrograms = [];
			selectedStartTime =  listTimes[selectedStartTime].slice(0,5);
			selectedEndTime =  listTimes[selectedEndTime].slice(0,5);
			
			angular.forEach(programs, function (program) {
			var timeStart = program.TimeStart.slice(0,5);
			var timeEnd = program.TimeEnd.slice(0,5);
			
				if (selectedStartTime <= timeStart && selectedEndTime >= timeEnd ) {
					if(timeNow>timeStart){
						program.Over = "yes";
					}else{
						program.Over = "no";
					}
					tempPrograms.push(program);
				}
			});
         
            return tempPrograms;
        } else {
            return programs;
        }
    };
}]);


app.filter('changeFormat', function () {
		var listTimes= ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
		var listTimesAMPM= ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
		
		
        return function (time, format) {
		var i=0, len=listTimes.length;
		console.log(format);
		if(angular.equals(format, "AM/PM")){
			for (; i<len; i++) {
				if (listTimes[i] == time) {
					return listTimesAMPM[i];
				}
			}
		}else{
			return time;
		}
		
		return null;
        };
});
