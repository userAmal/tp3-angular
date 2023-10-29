import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent {
  newProduit = new Produit();
  message: string = '';
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;

  constructor(private produitService: ProduitService, private router :Router,) { }
  ngOnInit() {
    this.categories = this.produitService.listeCategories();
    }
    addProduit() {
    this.newCategorie = 
    this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
    this.message ="Produit"+this.newProduit.nomProduit+ " ajouter avec succés ";
    }
    
 
}
