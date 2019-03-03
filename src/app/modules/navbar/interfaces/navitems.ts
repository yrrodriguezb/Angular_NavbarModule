export interface NavItem {
  descripcion: string;
  divider?: boolean;
  habilitar?: boolean;
  nombreIcono?: string;
  ruta?: string;
  subitems?: NavItems;
}

export type NavItems = NavItem[];
