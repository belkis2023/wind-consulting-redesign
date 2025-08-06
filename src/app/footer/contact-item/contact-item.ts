import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-item',
  imports: [NgIf],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})
export class ContactItem {

  @Input() icon: string = "";
  @Input() link: string = "";
  @Input() text: string = "";

}
