import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../model/produit.model';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
currentProduit = new Produit();
  router: any;
constructor(private activatedRoute: ActivatedRoute,
private produitService: ProduitService) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
console.log(this.currentProduit);
} 
updateProduit()
{ //console.log(this.currentProduit);
this.produitService.updateProduit(this.currentProduit);
this.router.navigate(['produits']);
}

}