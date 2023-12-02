import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent implements OnInit, OnDestroy {
  
  feedback = signal('');

  constructor(private telegram: TelegramService) {
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Send message');
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendFeedback);
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendFeedback);
  }

  handleChange(event) {
    this.feedback.set(event.target.value);
    if(this.feedback().trim()) {
      this.telegram.MainButton.show();
    } else {
      this.telegram.MainButton.hide();
    }
  }

  sendFeedback() {
    this.telegram.sendData({ feedback: this.feedback()});
  }
}
