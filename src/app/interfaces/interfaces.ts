import { NumberValueAccessor } from "@angular/forms";
import { PostComponent } from "../components/post/post.component";

export interface MenuOption{
    icon: string;
    name: string;
    redirectTo: string;
}

 export interface RespuestaPublicacion {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}

export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  post: Post[];
}

export interface RespuestaPerfil{
  ok:boolean;
  usuario:Usuario[];
  pagina: number;
}

export interface RespuestaComment {
  ok: boolean;
  comment: Comment[];
  pagina: number;
}

export interface RespuestaFavorites{
  ok: boolean;
  pagina: number;
  favorite: Favorite[];
}

export interface Favorite{
  date?: string;
  _id?: string;
  _v?: number;
  views?: number;
  title?: string;
  description?: string;
  usuario?: Usuario;
  user?: string;
  idpost?: string;
}

export interface Comment{
  date?: String;
  _id?: string;
  description?: string;
  poost?: Post;
  __v?: number;
}

export interface Post {
  views?: number;
  likes?: number;
  _id?: string;
  title?: string;
  description?: string;
  usuario?: Usuario;
  date?: string;
  __v?: number;
}

export interface Usuario {
  _id?: string;
  nombre?: string;
  email?: string;
  genero?:string,
  fechaNaci?:string,
  tiempoCuidado?:string,
  relacion?:string,
  __v?: number;
}
