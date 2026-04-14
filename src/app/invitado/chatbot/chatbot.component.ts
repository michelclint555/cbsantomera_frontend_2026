import { Component } from '@angular/core';
import { ServiceScriptService } from '../../ServiceScript/service-script.service';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  constructor(private scriptService: ServiceScriptService) {
    this.scriptService.loadScript(["chatbot/chatbot"]);
  }
}
