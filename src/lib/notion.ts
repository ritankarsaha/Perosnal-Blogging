import { Client }  from '@notionhq/client';
import { env }     from '$env/dynamic/private';

export const notion = new Client({ auth: env.NOTION_API_KEY });
export const COMMENTS_DB_ID = env.NOTION_DATABASE_ID!;
export const STATS_DB_ID    = env.NOTION_STATS_DATABASE_ID!;  
