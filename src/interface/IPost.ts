export default interface ITag {
  name: string;
  color: string;
}

export default interface IPost {
  number?: string;
  id: string;
  slug: string;
  title: string;
  body: string;
  description: string;
  category?: { id: string; name: string };
  tags?: ITag[];
  labels?: { edges: [{ node: ITag }] };
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  lastEditedAt?: string;
}
