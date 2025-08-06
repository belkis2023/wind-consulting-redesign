import { Component } from '@angular/core';
import { CircularButton } from '../../buttons/circular-button/circular-button';
import { NgForOf, NgSwitchCase } from '@angular/common';
import { ContactItem } from '../contact-item/contact-item';

@Component({
  selector: 'app-footer-links',
  imports: [CircularButton, NgSwitchCase, NgForOf, ContactItem],
  templateUrl: './footer-links.html',
  styleUrl: './footer-links.css',
})
export class FooterLinks {
  services1: string[] = ['Accueil', 'Qui sommes nous', 'Expertises'];
  services2: string[] = ['Nos services', 'Carrière', 'Contact'];
  contactInfo: { icon: string; link: string; text: string }[] = [
    {
      icon: '/icons/phone.svg',
      link: 'tel:+33612345678',
      text: '+216 73 671 986',
    },
    {
      icon: '/icons/location.svg',
      link: '#',
      text: 'Rue Chaanbi MAHDIA, 5100',
    },
    {
      icon: '/icons/mail.svg',
      link: 'mailto:' + 'direction@wind-consulting-tunisia.com',
      text: 'direction@wind-consulting-tunisia.com',
    },
  ];
}
