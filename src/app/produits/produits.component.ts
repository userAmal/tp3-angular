import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits : Produit[]; //un tableau de Produit
  constructor(private produitService: ProduitService) {
  //this.produits=[];
  this.produits = this.produitService.listeProduits();
  }
  ngOnInit(): void{
  }
  supprimerProduit(p: Produit)
  {
  //console.log(p);
  //this.produitService.supprimerProduit(p);
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
 this.produitService.supprimerProduit(p);
 }
  }
  

