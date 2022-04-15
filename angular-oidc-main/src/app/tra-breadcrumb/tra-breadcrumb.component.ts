import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-tra-breadcrumb',
  templateUrl: './tra-breadcrumb.component.html',
  styleUrls: ['./tra-breadcrumb.component.scss']
})
export class TraBreadcrumbComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  menuItems: MenuItem[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const MenuItem: MenuItem[] = this.createBreadcrumbs(this.activatedRoute.root);
        // Add home path default to show in the breadcrumb
        MenuItem.unshift({ label: 'Home', url: '/home', icon: 'home', styleClass: 'homebreadcrumb' });
        // Code to remove the duplicate object in the list
        this.menuItems = MenuItem.filter((outerEle: MenuItem, index: number, self: MenuItem[]) => {
          return index === self.findIndex((innerEle: MenuItem) => (
            innerEle.label === outerEle.label && innerEle.url === outerEle.url
          ))
        });
      });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[TraBreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
      if ((label)) {
        breadcrumbs.push({ label, url });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
