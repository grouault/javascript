/**
 * Created by augusta on 30/08/2018.
 */
export class Film{

  public title: string = '';
  public director: string = '';
  public episodeId: string= '';

  constructor(title: string, director: string, episodeId: string) {
      this.title = title;
      this.director = director;
      this.episodeId = episodeId;
  }

}
