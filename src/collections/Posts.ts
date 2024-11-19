import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
	slug: "posts",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "slug",
			type: "text",
		},
		{
			name: "images",
			type: "upload",
			relationTo: "media",
			hasMany: true,
		},
	],
};
