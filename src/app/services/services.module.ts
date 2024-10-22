import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { RouterModule, Routes } from '@angular/router';
import { SmartHandsComponent } from './smart-hands/smart-hands.component';
import { RemoteHandsComponent } from './remote-hands/remote-hands.component';
import { SharedServiceSectionComponent } from './shared-service-section/shared-service-section.component';
import { DataDestroyingComponent } from './data-destroying/data-destroying.component';
import { HardwareRecyclingComponent } from './hardware-recycling/hardware-recycling.component';
import { HardwareMonitoringComponent } from './hardware-monitoring/hardware-monitoring.component';
import { RackAndNetworkComponent } from './rack-and-network/rack-and-network.component';
import { RackAndStackComponent } from './rack-and-stack/rack-and-stack.component';
import { MoreComponent as DataDestroyingMoreComponent } from './data-destroying/more/more.component';
import { MoreComponent as HardwareMonitoringMoreComponent } from './hardware-monitoring/more/more.component';
import { MoreComponent as HardwareRecyclingMoreComponent } from './hardware-recycling/more/more.component';
import { MoreComponent as RackAndNetworkMoreComponent } from './rack-and-network/more/more.component';
import { MoreComponent as RackAndStackMoreComponent } from './rack-and-stack/more/more.component';
import { MoreComponent as RemoteHandsMoreComponent } from './remote-hands/more/more.component';
import { MoreComponent as SmartHandsMoreComponent } from './smart-hands/more/more.component';
import { DataCenterMigrationComponent } from './data-center-migration/data-center-migration.component';
import { DataCenterDecomissioningComponent } from './data-center-decomissioning/data-center-decomissioning.component';
import { ServerMigrationComponent } from './server-migration/server-migration.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'data-center-migration', component: DataCenterMigrationComponent },
  { path: 'data-center-decomissioning', component: DataCenterDecomissioningComponent },
  { path: 'server-migration', component: ServerMigrationComponent },
  { path: ':serviceType', component: ServicesComponent },
  { path: 'data-destroying/more', component: DataDestroyingMoreComponent },
  { path: 'hardware-monitoring/more', component: HardwareMonitoringMoreComponent },
  { path: 'hardware-recycling/more', component: HardwareRecyclingMoreComponent },
  { path: 'rack-and-network/more', component: RackAndNetworkMoreComponent },
  { path: 'rack-and-stack/more', component: RackAndStackMoreComponent },
  { path: 'remote-hands/more', component: RemoteHandsMoreComponent },
  { path: 'smart-hands/more', component: SmartHandsMoreComponent },
  { path: '', component: ServicesComponent }
];

@NgModule({
  declarations: [
    ServicesComponent,
    SmartHandsComponent,
    RemoteHandsComponent,
    SharedServiceSectionComponent,
    DataDestroyingComponent,
    HardwareRecyclingComponent,
    HardwareMonitoringComponent,
    RackAndNetworkComponent,
    RackAndStackComponent,
    DataDestroyingMoreComponent,
    HardwareMonitoringMoreComponent,
    HardwareRecyclingMoreComponent,
    RackAndNetworkMoreComponent,
    RackAndStackMoreComponent,
    RemoteHandsMoreComponent,
    SmartHandsMoreComponent,
    DataCenterMigrationComponent,
    DataCenterDecomissioningComponent,
    ServerMigrationComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ServicesModule { }
