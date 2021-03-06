import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { ApiComponent } from './api/api.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressComponent } from './progress/progress.component';
import { BlocksComponent } from './explorer/blocks/blocks.component';
import { BlockComponent } from './explorer/block/block.component';
import { ScrollDirective } from './shared/scroll.directive';
import { AgoPipe } from './shared/ago.pipe';
import { RemoveCommaPipe } from './shared/removecomma.pipe';
import { TimestampPipe } from './shared/timestamp.pipe';
import { SizePipe } from './shared/size.pipe';
import { TickerComponent } from './ticker/ticker.component';
import { LoadingResolverService } from './shared/loading.resolver';
import { TransactionComponent } from './explorer/transaction/transaction.component';
import { AmountPipe } from './shared/amount';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { YesPipe } from './shared/yes.pipe';
import { AddressComponent } from './explorer/address/address.component';
import { InsightComponent } from './insight/insight.component';
import { RichlistComponent } from './insight/richlist/richlist.component';
import { TippyDirective } from './shared/tippy.directive';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full', resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain', component: TickerComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/explorer', component: ExplorerComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/explorer/blocks', component: BlocksComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/explorer/block/:block', component: BlockComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/explorer/transaction/:transaction', component: TransactionComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/explorer/address/:address', component: AddressComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/network', component: NetworkComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/api', component: ApiComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/about', component: AboutComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/insight', component: InsightComponent, resolve: {
      chain: LoadingResolverService
    }
  },
  {
    path: ':chain/insight/richlist', component: RichlistComponent, resolve: {
      chain: LoadingResolverService
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    ExplorerComponent,
    NetworkComponent,
    ApiComponent,
    AboutComponent,
    ProgressComponent,
    BlocksComponent,
    BlockComponent,
    ScrollDirective,
    AgoPipe,
    RemoveCommaPipe,
    TimestampPipe,
    SizePipe,
    AmountPipe,
    TickerComponent,
    TransactionComponent,
    SearchComponent,
    ErrorComponent,
    YesPipe,
    AddressComponent,
    InsightComponent,
    RichlistComponent,
    TippyDirective
  ],
  imports: [
    BrowserModule,
    // BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      // onSameUrlNavigation: 'reload'
    })
  ],
  exports: [
    ScrollDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
