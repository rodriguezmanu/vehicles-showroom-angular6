export interface Car {
  id: number;
  photo: string;
  thumb: string;
  model: string;
  year: number;
  company: string;
  price: number;
  motor: number;
  interior: string;
  exterior: string;
  idBrand: number;
  selected?: boolean;
}

export interface Brand {
  id: number;
  brand: string;
  photo: string;
  vehicles: Car[];
}
