/**
 * Created by augusta on 30/08/2018.
 */
export class Film{

  public title: string = '';
  public director: string = '';
  public episode_id: string= '';

  constructor(title: string, director: string, episodeId: string) {
      this.title = title;
      this.director = director;
      this.episode_id = episodeId;
  }

}
