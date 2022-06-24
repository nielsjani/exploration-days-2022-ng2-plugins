import {Component, OnInit} from '@angular/core';
import {ContentManager, ScriptRunnerImpl} from "hatool";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'cegeka-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {

  contentManager: ContentManager = new ContentManager();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const runner = new ScriptRunnerImpl(this.http, this.contentManager, 'en');
    runner.timeout = 500;
    runner.run(
      "assets/chatBotScript.json", 0,
      {
        get_chuck: async () => {
          return this.http.get('https://api.chucknorris.io/jokes/random/').pipe(
            map((joke: any) => joke.value),
          ).toPromise();
        }
      },
      (key, value) => {
        console.log('SETTING', key, '<==', value);
      },
      {}
    ).subscribe(() => {
      console.log('done!');
    });
  }


}
