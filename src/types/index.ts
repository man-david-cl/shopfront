export type Product={id:string;name:string;category:string;price:number;compareAt?:number;rating:number;reviews:number;image:string;badge?:string;colors:string[];description:string;featured?:boolean}
export type CartItem=Product&{quantity:number}
