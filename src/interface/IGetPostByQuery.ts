export interface ITag {
  name: string;
  color: string;
}

export default interface IGetPostByQuery {
  number: string;
  id: string;
  slug: string;
  title: string;
  category: { id: string; name: string };
  tags: ITag[];
  content: string;
  createdAt: string;
  lastEditedAt?: string;
}
