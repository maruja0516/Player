namespace app {
  export class PlayerCreateController {
    public player: IPlayer;
    public create() {
      this.PlayerService.create(this.player).then(() => {
      this.$state.go('player main');
      })
}
    constructor (
      private PlayerService: app.PlayerService,
      private $state: ng.ui.IStateService

    ){

}
}
angular.module("app").controller("PlayerCreateController",
PlayerCreateController);
}
