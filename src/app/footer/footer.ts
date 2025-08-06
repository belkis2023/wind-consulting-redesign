import { Component } from '@angular/core';
import { LineWrapper } from '../line-wrapper/line-wrapper';
import { NgIf } from '@angular/common';
import { FooterLinks } from './footer-links/footer-links';

@Component({
  selector: 'app-footer',
  imports: [LineWrapper, NgIf, FooterLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
