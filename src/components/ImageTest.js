import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Link, Box } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-darkL2",
	"height": "32px",
	"sm-height": "48px",
	"quarkly-title": "Product Hunt"
};
const overrides = {
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://www.producthunt.com/posts/quarkly?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-quarkly",
			"target": "_blank",
			"display": "flex",
			"quarkly-title": "Link",
			"position": "fixed",
			"bottom": "16px",
			"left": "16px",
			"z-index": "1",
			"sm-left": "12px",
			"sm-bottom": "12px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "250px",
			"alt": "Quarkly - Design tool to create sites & web apps on React | Product Hunt",
			"sm-width": "180px"
		}
	}
};

const ProductHunt = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Link {...override("link")}>
			<Image {...override("image")} src={"https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=273981&theme=dark&period=daily"} />
		</Link>
		 
		{children}
	</Box>;
};

Object.assign(ProductHunt, { ...Box,
	defaultProps,
	overrides
});
export default ProductHunt;