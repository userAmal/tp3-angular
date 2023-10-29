import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
currentProduit = new Produit();
categories! : Categorie[];
updatedCatId! : number;
constructor(private activatedRoute: ActivatedRoute,private router :Router,

private produitService: ProduitService) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.categories = this.produitService.listeCategories();
this.currentProduit = 
this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
this.updatedCatId=this.currentProduit.categorie.idCat;

} 
updateProduit() {
  this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
  this.produitService.updateProduit(this.currentProduit);
  this.router.navigate(['produits']);
  }

}
