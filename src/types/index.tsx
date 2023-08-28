export interface LocationsListProps {
  cityId: string;
}

export interface LocationItemProps {
  locationName: string;
  address: string;
  pickup: boolean;
  delivery: boolean;
}
export interface CartState {
  selectItems: CartItem[];
  quantity: number;
  total: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
}