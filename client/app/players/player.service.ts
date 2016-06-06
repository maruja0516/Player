namespace app{
  interface IPlayerResourceClass extends IPlayer, ng.resource.IResource<IPlayerResourceClass> { }
  interface IPlayerResource extends ng.resource.IResourceClass<IPlayerResourceClass> { }
  update(params: Object);
  update(params: Object, body:Object);
}

  export class PlayerService {
    private playerResource: IPlayerResource;

    public getAll() {
      return this.playerResource.query();
    }

    public getOne(id: number) {
      return this.playerResource.get({ id: id });
    }

    public remove(id: number) {
      return this.playerResource.remove({ id: id }).$promise;
    }
    public create (player:IPlayer) {
      return this.playerResource.save(player: IPlayer).$promise;

    }

    public update(player;IPlayer) {
      return this.playerResource.update({id: player.id}, player).$promise
    }

    constructor(
      $resource: ng.resource.IResourceService
      ) {
      this.playerResource = <IPlayerResource>$resource('/api/v1/players/:id', null, {'update':{'method': 'PUT'}})
    }
  }
  angular.module('app').service('PlayerService', PlayerService);
}
