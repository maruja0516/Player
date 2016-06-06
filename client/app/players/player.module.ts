namespace app {
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
//basick url to set all the pages together in the index
    $stateProvider.state('players main', {
      url: '/players',
      templateUrl: '/client/app/players/main/main.jade',
      controller: 'PlayerMainController as vm'
    }).state('player details', {
      url: '/player/:id',
      templateUrl: '/client/app/players/details/details.jade',
      controller: 'PlayerDetailsController as vm'
    }).state("player create", {
      url: "/create",
      templateUrl:"client/app/players/create.jade",
      controller: "PlayerCreateController as vm"
    }).state("player team", {
      url: "/team",
      templateUrl:"client/app/players/team.jade",
      controller: "PlayersCreateController as vm"
    })
    })
    });
}
