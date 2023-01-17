import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  public teamMembers: any = [
    {
      id: 0,
      nom: 'D\'Artigues',
      prenom: 'Thibault',
      img: './../../assets/thibault.webp',
    },
    {
      id: 1,
      nom: 'Claich',
      prenom: 'Alexis',
      img: './../../assets/alexis.webp',
    },
    {
      id: 2,
      nom: 'Gallerand',
      prenom: 'Christophe',
      img: './../../assets/gallerand.webp',
    },
    {
      id: 3,
      nom: 'Panier',
      prenom: 'Florian',
      img: './../../assets/florian.webp',
    },
    {
      id: 4,
      nom: 'Romefort',
      prenom: 'Thomas',
      img: './../../assets/thomas.webp',
    }
  ]

}
