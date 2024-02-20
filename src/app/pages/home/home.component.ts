import { Component } from '@angular/core';
import { BannerInterface } from '../../shared/components/banner/banner.component'
import { LogoInterface } from '../../shared/components/logo/logo.component'

interface DataInterface extends BannerInterface {
  logo: LogoInterface[];
}

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html'
})
export class PageHomeComponent {

  public data: DataInterface[] = [
    {
      background: true,
      description: 'Diseño de interfaz de usuario',
      image: 'ui-designer',
      logo: [
        { id: 'figma', icon: 'Figma', text: 'Figma' },
        { id: 'photoshop', icon: 'Photoshop', text: 'Photoshop' },
        { id: 'illustrator', icon: 'Illustrator', text: 'Illustrator' },
        { id: 'material-design', icon: 'Material Design', text: 'Material Design' }
      ],
      title: 'UI designer',
      query: 'ui-designer'
    },
    {
      background: true,
      description: 'Desarrollo de interfaz de usuario',
      image: 'ui-developer',
      logo: [
        { id: 'html', icon: 'HTML', text: 'HTML' },
        { id: 'css', icon: 'CSS', text: 'CSS' },
        { id: 'pwa', icon: 'PWA', text: 'PWA' }
      ],
      title: 'UI Developer',
      query: 'ui-developer'
    },
    {
      background: true,
      description: 'Desarrollo y manejo del navegador',
      image: 'js-developer',
      logo: [
        { id: 'angular', icon: 'Angular', text: 'Angular' },
        { id: 'vanilla-js', icon: 'Vanilla JS', text: 'Vanilla JS' },
        { id: 'react', icon: 'React', text: 'React' }
      ],
      title: 'JS Developer',
      query: 'js-developer'
    },
    {
      background: true,
      description: 'Desarrollo de experiencia de usuario',
      image: 'ux-developer',
      logo: [
        { id: 'commented', icon: 'Commented', text: 'Commented' },
        { id: 'structure', icon: 'Structure', text: 'Structure' },
        { id: 'speed', icon: 'Speed', text: 'Speed' }
      ],
      title: 'UX Developer',
      query: 'ux-developer'
    },
    {
      background: true,
      description: 'Desarrollo del lado del servidor',
      image: 'backend',
      logo: [
        { id: 'nodejs', icon: 'NodeJS', text: 'NodeJS' },
        { id: 'express', icon: 'Express', text: 'Express' },
        { id: 'nestjs', icon: 'NestJS', text: 'NestJS' }
      ],
      title: 'Backend',
      query: 'backend'
    },
    {
      background: true,
      description: 'Configuración de sistema informatico',
      image: 'sis-admin',
      logo: [
        { id: 'cicd', icon: 'CI/CD', text: 'CI/CD' },
        { id: 'linux', icon: 'Linux', text: 'Linux' },
        { id: 'docker', icon: 'Docker', text: 'Docker' }
      ],
      title: 'SIS admin',
      query: 'sis-admin'
    }
  ]

}