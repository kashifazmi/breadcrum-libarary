export interface MenuItem {
    label?: string;
    icon?: string;
    url?: string;
    routerLink?: any;
    queryParams?: {
        [k: string]: any;
    };
    disabled?: boolean;
    target?: string;
    style?: any;
    styleClass?: string;
}
