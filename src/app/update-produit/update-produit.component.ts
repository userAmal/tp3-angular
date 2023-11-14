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
  this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe( prod =>{ this.currentProduit = prod; } ) ;
  }
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }

}
