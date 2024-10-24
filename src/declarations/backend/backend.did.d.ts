import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Post { 'title' : string, 'body' : string, 'author' : string }
export interface _SERVICE {
  'create_post' : ActorMethod<[Post], undefined>,
  'get_posts' : ActorMethod<[], Array<Post>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
