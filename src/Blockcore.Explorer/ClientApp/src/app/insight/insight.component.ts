import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { SetupService } from '../services/setup.service';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit, OnDestroy {
  @HostBinding('class.content-centered-top') hostClass = true;

  subscription: any;
  info: any;
  node: any;
  blockchain: any;
  network: any;
  configuration: any;
  consensus: any;
  peers: any;
  richlist: any;
  timerInfo: any;
  timerRichlist: any;
  timerSupply: any;
  errorRichlist: string;
  errorSupply: string;
  errorInfo: string;
  errorWallets: string;
  supply: any;
  wallets: any;
  timerWallets: any;

  constructor(private api: ApiService, public setup: SetupService) {
    this.subscription = this.setup.currentChain$.subscribe(async (chain) => {
      await this.updateSupply();
      await this.updateWallets();
      await this.updateRichlist();
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerInfo);
    clearTimeout(this.timerRichlist);
    clearTimeout(this.timerSupply);
    clearTimeout(this.timerWallets);
    this.subscription.unsubscribe();
  }

  async updateWallets() {
    try {
      this.wallets = await this.api.getWallets();
      this.errorWallets = null;
    } catch (error) {
      this.errorWallets = error;
    }

    this.timerWallets = setTimeout(async () => {
      await this.updateWallets();
    }, 30000);
  }

  async updateSupply() {
    try {
      this.supply = await this.api.getSupply();
      this.errorSupply = null;
    } catch (error) {
      this.errorSupply = error;
    }

    this.timerSupply = setTimeout(async () => {
      await this.updateSupply();
    }, 15000);
  }

  async updateRichlist() {
    try {
      const list = await this.api.getRichlist(0, 5);
      list.reverse()
      this.richlist = list;
      this.errorRichlist = null;
    } catch (error) {
      this.errorRichlist = error;
    }

    this.timerRichlist = setTimeout(async () => {
      await this.updateRichlist();
    }, 15000);
  }
}
