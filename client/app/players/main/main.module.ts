namespace app {
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider

) => {
  $stateProvider.state('players.main', {
    url: '/players',
    templateUrl: '/client/app/players/main/main.jade',
    controller: 'PlayerMainController as vm'
  })
});
}
