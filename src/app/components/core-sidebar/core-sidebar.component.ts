import {
    Component,
    Input,
} from "@angular/core";
import {coreSidebarNavGroups} from "../../mocks/sidebar";
import {
    CoreSidebarMode,
    CoreSidebarNavGroup,
} from "./core-sidebar.model";

@Component({
  selector: 'ets-core-sidebar',
  templateUrl: './core-sidebar.component.html',
  styleUrls: ['./core-sidebar.component.less']
})
export class CoreSidebarComponent {
    @Input() public mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    @Input() public navGroups: CoreSidebarNavGroup[] = coreSidebarNavGroups;
}
